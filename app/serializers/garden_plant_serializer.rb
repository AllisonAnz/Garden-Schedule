class GardenPlantSerializer < ActiveModel::Serializer
  attributes :name, :image, :color, :description, :life_cycle, :sun_requirement, :garden_location, :height, :planting_season, :bloom_season, :planted, :days_to_germinate, :days_to_bloom, :last_watered, :last_fertilized, :user_id

  
end
