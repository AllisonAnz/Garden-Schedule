class Api::V1::VeggiePlantsController < ApplicationController
     rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    def index 
        plant = @user.veggie_plants.all 
        render json: plant
    end

    def create 
        plant = @user.veggie_plants.create!(plant_params)
        render json: plant, status: :created
    end

    def show 
        plant = VeggiePlant.find(params[:id])
        render json: plant 
    end

    def update 
        plant = VeggiePlant.find(params[:id])
        plant.update(plant_params)
        render json: plant, status: :accepted
    end

    def destroy
        #byebug
        veggie_plant = VeggiePlant.find(params[:id])
        veggie_plant.destroy 
        head :no_content
    end
    
    private 

    def plant_params 
        params.permit(:name, :veggie_location, :planting_season, :harvest_season, :planted, :days_to_germinate, :days_to_harvest, :image, :last_watered, :last_fertilized, :sun_requirement, :description)
    end

    def render_unprocessable_entity_response(exception)
        render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
    end

    def render_not_found_response 
        render json: { error: "veggie plant not found" }, status: :not_found
    end
end
