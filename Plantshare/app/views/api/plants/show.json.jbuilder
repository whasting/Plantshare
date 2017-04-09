json.partial! 'api/plants/plant', plant: @plant

json.requesters do
  @plant_requesters.each do |requester|
    json.set! requester.id do
      json.partial! '/api/users/user', user: requester
    end
  end
end
