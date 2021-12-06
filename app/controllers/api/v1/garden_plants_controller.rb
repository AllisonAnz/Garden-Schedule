class Api::V1::GardenPlantsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    def index 
        #byebug
        render json: GardenPlant.all
    end

    def create 
        #byebug
        garden_plant = @user.garden_plants.create!(plant_params)
        render json: garden_plant, status: :created
    end

    def show 
        plant = GardenPlant.find(params[:id])
        render json: plant 
    end

    def update 
        
        #byebug
        plant = GardenPlant.find(params[:id])
        plant.update(plant_params)
        render json: plant, status: :accepted
    end

    def destroy
        plant = GardenPlant.find(params[:id])
        plant.destroy 
        head :no_content
    end
    
    private 

    def plant_params 
        params.permit(:name, :image, :color, :description, :life_cycle, :sun_requirement, :garden_location, :height, :planting_season, :bloom_season, :planted, :days_to_germinate, :days_to_bloom, :last_watered, :last_fertilized)
    end

    #def find_plant 
    #    GardenPlant.find(params[:id])
    #end

    def render_unprocessable_entity_response(exception)
        render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
    end

    def render_not_found_response 
        render json: { error: "Plant not found" }, status: :not_found
    end
end
