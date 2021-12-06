class User < ApplicationRecord
     has_secure_password
     has_many :garden_plants, dependent: :destroy
     accepts_nested_attributes_for :garden_plants, update_only: true, allow_destroy: true
     
     validates :username, uniqueness: { case_sensitive: false }
     validates :first_name, :last_name, :password, presence: true 
     validates :password, length: {in: 6..20}

end
