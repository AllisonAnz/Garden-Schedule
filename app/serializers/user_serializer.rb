class UserSerializer < ActiveModel::Serializer
  attributes :username, :first_name, :last_name
  has_many :garden_plants
end
