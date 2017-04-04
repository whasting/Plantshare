# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

u1 = User.create!(username: "demo", password: "password")

Plant.destroy_all

p1 = Plant.create!(
  title: "Aeonium Arboreum",
  description: "20 cuttings available of this beautiful treelike succulent",
  instructions: "Water once weekly during late-spring/summer, water monthly in winter",
  owner_id: u1.id
)
