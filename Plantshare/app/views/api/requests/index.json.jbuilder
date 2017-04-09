@requests.each do |request|
	json.set! request.id do
		json.extract! request, :id, :user_id, :plant_id, :comment, :status, :user
	end
end