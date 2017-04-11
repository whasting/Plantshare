# @plants.each do |plant|
#   json.set! plant.id do
#     json.extract! plant, :title, :img_url, :lng, :lat, :id
#   end
# end

@plants.each do |plant|
  json.set! plant.id do
    json.extract! plant, :title, :img_url, :lng, :lat, :id
    json.set! 'user' do
      json.partial! "api/users/user", user: plant.owner
    end
  end
end
