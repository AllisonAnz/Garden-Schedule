class MovieSummarySerializer < ActiveModel::Serializer
  attributes :summary

  def summary
    "#{self.object.title} - #{self.object.description[0..49]}..."
  end

end 

# Add a new routes.rb
get '/movies/:id/summary', to: 'movies#summary' 

# add a summary action to out controller 
# specify that we want to use our new serializer to render the requested info 
# app/controllers/movies_controller.rb
def summary
  movie = Movie.find(params[:id])
  render json: movie, serializer: MovieSummarySerializer
end 

# if you naviage to /movies/1/summary 
# {"summary": "The Color Purple - Whoopi Goldberg brings Alice Walker's Pulitzer Pri..."} 

# Above allows us to display just our movie summary for a single movie 
# if we wanted to use our new custom serializer to render the full collection of movies 
# we would need to create another route and action 
# config/routes.rb ...
get '/movie_summaries', to: 'movies#summaries'

# app/controllers/movies_controller.rb
def summaries
  movies = Movie.all
  render json: movies, each_serializer: MovieSummarySerializer
end 

# The use of each_serializer: MovieSummarySerializer in our action tells the app 
# to use our custom movie summary serializer to render each of the movies in the collection