class Api::PlantsController < ApplicationController
  def index
    @plants = Plant.where(owner_id: params[:id])
  end
end
