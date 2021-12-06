# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "Clearing old data"

GardenPlant.destroy_all 
User.destroy_all 

user1 = User.create(username: Faker::Internet.username, first_name: Faker::Name.first_name, last_name: Faker::Name.last_name)
user2 = User.create(username: Faker::Internet.username, first_name: Faker::Name.first_name, last_name: Faker::Name.last_name)
user3 = User.create(username: Faker::Internet.username, first_name: Faker::Name.first_name, last_name: Faker::Name.last_name)
user4 = User.create(username: Faker::Internet.username, first_name: Faker::Name.first_name, last_name: Faker::Name.last_name)
# 

gardenplant7 = GardenPlant.create(name: "SunFlower", user_id: user1.id)
gardenplant1 = GardenPlant.create(name: Faker::Lorem.word, life_cycle: "perennial", color: Faker::Color.color_name, garden_location: "front middle", height: Faker::Measurement.height, planting_season: "July-Aug", bloom_season: "July", planted: Faker::Date.in_date_period(month: 2), days_to_germinate: Faker::Number.within(range: 1..360), days_to_bloom: Faker::Number.within(range: 30..90), notes: Faker::Lorem.sentence, image: Faker::Placeholdit.image, last_watered: Faker::Date.backward(days: 14), last_fertilized: Faker::Date.backward(days: 14), sun_requirement: "Full Sun", description: Faker::Lorem.paragraph(sentence_count: 2), user_id: user1.id)
gardenplant2 = GardenPlant.create(name: Faker::Lorem.word, life_cycle: "annual", color: Faker::Color.color_name, garden_location: "front second from right", height: Faker::Measurement.height, planting_season: "Feb-March", bloom_season: "August", planted: Faker::Date.in_date_period(month: 2), days_to_germinate: Faker::Number.within(range: 1..360), days_to_bloom: Faker::Number.within(range: 30..90), notes: Faker::Lorem.sentence, image: Faker::Placeholdit.image, last_watered: Faker::Date.backward(days: 14), last_fertilized: Faker::Date.backward(days: 14), sun_requirement: "Partial Shade", description: Faker::Lorem.paragraph(sentence_count: 2), user_id: user1.id)
gardenplant3 = GardenPlant.create(name: Faker::Lorem.word, life_cycle: "perennial", color: Faker::Color.color_name, garden_location: "middle middle", height: Faker::Measurement.height, planting_season: "April-May", bloom_season: "July", planted: Faker::Date.in_date_period(month: 2), days_to_germinate: Faker::Number.within(range: 1..360), days_to_bloom: Faker::Number.within(range: 30..90), notes: Faker::Lorem.sentence, image: Faker::Placeholdit.image, last_watered: Faker::Date.backward(days: 14), last_fertilized: Faker::Date.backward(days: 14), sun_requirement: "Full Sun", description: Faker::Lorem.paragraph(sentence_count: 2), user_id: user2.id)
gardenplant4 = GardenPlant.create(name: Faker::Lorem.word, life_cycle: "annual", color: Faker::Color.color_name, garden_location: "back right corner", height: Faker::Measurement.height, planting_season: "Sept-October", bloom_season: "June", planted: Faker::Date.in_date_period(month: 2), days_to_germinate: Faker::Number.within(range: 1..360), days_to_bloom: Faker::Number.within(range: 30..90), notes: Faker::Lorem.sentence, image: Faker::Placeholdit.image, last_watered: Faker::Date.backward(days: 14), last_fertilized: Faker::Date.backward(days: 14), sun_requirement: "Full Sun", description: Faker::Lorem.paragraph(sentence_count: 2), user_id: user3.id)
gardenplant5 = GardenPlant.create(name: Faker::Lorem.word, life_cycle: "annual", color: Faker::Color.color_name, garden_location: "front left corner", height: Faker::Measurement.height, planting_season: "May", bloom_season: "June", planted: Faker::Date.in_date_period(month: 2), days_to_germinate: Faker::Number.within(range: 1..360), days_to_bloom: Faker::Number.within(range: 30..90), notes: Faker::Lorem.sentence, image: Faker::Placeholdit.image, last_watered: Faker::Date.backward(days: 14), last_fertilized: Faker::Date.backward(days: 14), sun_requirement: "Full Sun", description: Faker::Lorem.paragraph(sentence_count: 2), user_id: user3.id)
gardenplant6 = GardenPlant.create(name: Faker::Lorem.word, life_cycle: "perennial", color: Faker::Color.color_name, garden_location: "back middle", height: Faker::Measurement.height, planting_season: "April", bloom_season: "October", planted: Faker::Date.in_date_period(month: 2), days_to_germinate: Faker::Number.within(range: 1..360), days_to_bloom: Faker::Number.within(range: 30..90), notes: Faker::Lorem.sentence, image: Faker::Placeholdit.image, last_watered: Faker::Date.backward(days: 14), last_fertilized: Faker::Date.backward(days: 14), sun_requirement: "Shade", description: Faker::Lorem.paragraph(sentence_count: 2), user_id: user4.id)

puts "seeding done!"