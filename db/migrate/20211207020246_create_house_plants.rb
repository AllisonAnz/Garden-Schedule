class CreateHousePlants < ActiveRecord::Migration[6.1]
  def change
    create_table :house_plants do |t|
      t.string  :name
      t.date    :last_repotted 
      t.string  :soil
      t.integer :watering_schedule
  
      t.string  :image
      
      t.date    :last_watered
      t.date    :last_fertilized

      t.string  :sun_requirement
      t.text    :description
      t.integer :user_id
      t.timestamps
    end
  end
end
