# @requested_plants.each do |request|
#   json.set! request.id do
#     json.extract! request.plant, :title, :img_url, :id
#   end
# end

@requested_plants.each do |request|
  json.set! request.id do
    json.extract! request.plant, :title, :img_url, :lng, :lat, :id
    json.set! 'user' do
      json.partial! "api/users/user", user: request.plant.owner
    end
  end
end
