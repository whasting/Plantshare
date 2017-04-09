class Api::RequestedPlantsController < ApplicationController
  def show
		@requested_plants = Request.where(user_id: params[:id]).includes(:plant)
	end
end
