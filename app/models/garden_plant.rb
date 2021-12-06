class GardenPlant < ApplicationRecord
    has_one :user

    validates :name, presence: true
end
