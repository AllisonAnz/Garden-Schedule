class GardenPlant < ApplicationRecord
    belongs_to :user, dependent: :destroy

    validates :name, presence: true
end
