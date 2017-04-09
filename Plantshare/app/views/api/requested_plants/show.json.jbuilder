@requested_plants.each do |request|
  json.set! request.id do
    json.extract! request.plant, :title, :img_url, :id
  end
end
