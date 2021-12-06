class CreateGardenPlants < ActiveRecord::Migration[6.1]
  def change
    create_table :garden_plants do |t|
      t.string :name
      t.string :image
      t.string :color 
      t.text :description
      
      t.string :life_cycle
      t.string :sun_requirement
      
      t.text :garden_location 
      t.string :height 
      
      t.string :planting_season
      t.string :bloom_season

      t.date :planted
      t.integer :days_to_germinate
      t.integer :days_to_bloom
      t.text :notes

      t.date :last_watered 
      t.date :last_fertilized 

      t.string :user_id

      t.timestamps
    end
  end
end
