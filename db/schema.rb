# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_12_05_214923) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "garden_plants", force: :cascade do |t|
    t.string "name"
    t.string "image"
    t.string "color"
    t.text "description"
    t.string "life_cycle"
    t.string "sun_requirement"
    t.text "garden_location"
    t.string "height"
    t.string "planting_season"
    t.string "bloom_season"
    t.date "planted"
    t.integer "days_to_germinate"
    t.integer "days_to_bloom"
    t.text "notes"
    t.date "last_watered"
    t.date "last_fertilized"
    t.string "user_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "password_digest"
    t.string "first_name"
    t.string "last_name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

end
