class User < ApplicationRecord
     has_secure_password
     has_many :garden_plants
     
     validates :username, uniqueness: { case_sensitive: false }
     validates :first_name, :last_name, :password, presence: true 
     validates :password, length: {in: 6..20}

end
