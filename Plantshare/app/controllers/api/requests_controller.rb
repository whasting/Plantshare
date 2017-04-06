class Api::RequestsController < ApplicationController

	def index
		@requests = current_user.requests.all
		render :index
	end

	def create
		@request = Request.new(request_params)
		@request.user_id = current_user.id
		if @request.save
			render :show
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

	def request_params
		params.require(:request).permit(:user_id, :plant_id, :comment)
	end
end
