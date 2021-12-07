class Api::V1::HousePlantsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    def index 
        render json: HousePlant.all
    end

    def create 
        plant = @user.house_plants.create!(plant_params)
        render json: plant, status: :created
    end

    def show 
        plant = HousePlant.find(params[:id])
        render json: plant 
    end

    def update 
        plant = HousePlant.find(params[:id])
        plant.update(plant_params)
        render json: plant, status: :accepted
    end

    def destroy
        plant = HousePlant.find(params[:id])
        plant.destroy 
        head :no_content
    end
    
    private 

    def plant_params 
        params.permit(:name, :last_repotted , :soil, :watering_schedule, :image, :last_watered, :last_fertilized, :sun_requirement, :description)
    end

    def render_unprocessable_entity_response(exception)
        render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
    end

    def render_not_found_response 
        render json: { error: "house plant not found" }, status: :not_found
    end
end
