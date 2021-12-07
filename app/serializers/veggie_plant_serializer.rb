class VeggiePlantSerializer < ActiveModel::Serializer
  attributes :id, :name, :veggie_location, :planting_season, :harvest_season, :planted, :days_to_germinate, :days_to_harvest, :image, :last_watered, :last_fertilized, :sun_requirement, :description, :user_id

end
