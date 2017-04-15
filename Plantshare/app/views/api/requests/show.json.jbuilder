json.extract! @request, :id, :plant_id, :comment, :status
json.set! "user" do
  json.partial! "api/users/user", user: @request.user
end
