json.extract! plant, :id, :title, :img_url, :lng, :lat, :description, :instructions, :start_time, :end_time, :owner_id
json.set! "requests" do
  plant.requests.each do |request|
    json.set! request.id do
      json.extract! request, :id, :plant_id, :comment, :status
      json.set! "user" do
        json.partial! "api/users/user", user: request.user
      end
    end
  end
end
