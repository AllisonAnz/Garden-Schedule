class CreateVeggiePlants < ActiveRecord::Migration[6.1]
  def change
    create_table :veggie_plants do |t|
      t.string  :name
      t.text    :veggie_location 

      t.string  :planting_season 
      t.string  :harvest_season 

      t.date    :planted 
      t.integer :days_to_germinate 
      t.integer :days_to_harvest

      t.string :image
      
      t.date  :last_watered
      t.date  :last_fertilized

      t.string  :sun_requirement
      t.text    :description

      t.integer :user_id

      t.timestamps
    end
  end
end
