class HousePlantSerializer < ActiveModel::Serializer
  attributes :id, :name, :last_repotted , :soil, :watering_schedule, :image, :last_watered, :last_fertilized, :sun_requirement, :description, :user_id
end
