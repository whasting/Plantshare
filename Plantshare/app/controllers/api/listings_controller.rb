class Api::ListingsController < ApplicationController
  def show
    @plants = Plant.where(owner_id: params[:id])
  end
end
