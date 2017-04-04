class Api::PlantsController < ApplicationController
  def index
    @plants = Plant.all
  end

  def create
    @plant = Plant.new(plant_params)
    if @plant.save
      render 'api/plants/show'
    else
      render json: @plant.errors.full_messages, status: 422
    end
  end

  def show
    @plant = Plant.find(params[:id])
    if @plant
      render 'api/plants/show'
    else
      render json: ['Plant does not exist'], status: 404
    end
  end

  def update
    @plant = Plant.find(params[:id])
    if @plant && @plant.update_attributes(plant_params)
      render 'api/plants/show'
    else
      render json: @plant.errors.full_messages, status: 422
    end
  end

  private

  def plant_params
    params.require(:plant)
      .permit(
        :title,
        :description,
        :instructions,
        :owner_id,
        :lng,
        :lat,
        :img_url,
        :start_time,
        :end_time
      )
  end
end
