class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :first_name, :last_name
  has_many :garden_plants
  has_many :veggie_plants
  has_many :house_plants
end
