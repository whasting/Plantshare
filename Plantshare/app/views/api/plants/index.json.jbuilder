@plants.each do |plant|
  json.set! plant.id do
    json.extract! plant, :title, :img_url, :lng, :lat
  end
end
