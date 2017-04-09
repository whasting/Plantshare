class Api::RequestsController < ApplicationController

	def index
		@requests = current_user.requests.all
		render :index
	end

	def create
		@request = Request.new(request_params)
		if @request.save
			render :show
		else
			render json: @request.errors.full_messages, status: 422
		end
	end

	def update
		@request = Request.find(params[:id])
		if @request && @request.update_attributes(request_params)
			render 'api/requests/show'
		else
			render json: @request.errors.full_messages, status: 422
		end
	end

	def destroy
		@request = Request.find(params[:id])
		if @request.destroy
			render "api/requests/show"
		else
			render json: @request.errors.full_messages, status: 422
		end
	end

	private

	def current_request
		@request ||= Request.includes(:plant).find(params[:id])
	end

	def current_plant
		current_request.plant
	end

	def request_params
		params.require(:request).permit(:user_id, :plant_id, :comment, :status)
	end
end
