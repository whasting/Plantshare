# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

u1 = User.create!(username: "demo", password: "password")
u2 = User.create!(username: "wade", password: "password")
u3 = User.create!(username: "colin", password: "password")
u4 = User.create!(username: "eddie", password: "password")

# PLANTS
#  title        :string           not null
#  description  :text             not null
#  instructions :text             not null
#  owner_id     :integer          not null
#  lng          :float
#  lat          :float
#  img_url      :string
#  start_time   :time
#  end_time     :time
#  created_at   :datetime         not null
#  updated_at   :datetime         not null

Plant.destroy_all

p1 = Plant.create!(
  title: "Aeonium Arboreum",
  description: "20 cuttings available of this beautiful treelike succulent",
  instructions: "Water once weekly during late-spring/summer, water monthly in winter",
  owner_id: u2.id,
  img_url: "https://res.cloudinary.com/whasting/image/upload/c_thumb,h_100,w_100/v1491368806/Aeonium-arboreum-2_zdkqm2.jpg"
)

p2 = Plant.create!(
  title: "Pork and Beans",
  description: "Need to thin out my Pork and Beans plant, all you need is a single bean to get started!",
  instructions: "One roots established, water twice per week",
  owner_id: u2.id,
  img_url: "https://res.cloudinary.com/whasting/image/upload/c_thumb,h_100,w_100/v1491584457/pork-and-beans-sedum-sedum-rubrotinctum_lmmoni.jpg"
)

p3 = Plant.create!(
  title: "Lemons",
  description: "I have way too many lemons!",
  instructions: "Take the lemons and make some lemonade, donations welcome",
  owner_id: u4.id,
  img_url: "https://res.cloudinary.com/whasting/image/upload/c_thumb,h_100,w_100/v1491584479/o-LEMONS-facebook_qbevvw.jpg"
)

p4 = Plant.create!(
  title: "Split Leaf Philodendron",
  description: "This plant has taken over my garden, the cuttings root readily",
  instructions: "Stick directly in the ground and water twice weekly, the plants prefer shade",
  owner_id: u3.id,
  img_url: "https://res.cloudinary.com/whasting/image/upload/c_thumb,h_100,w_100/v1491584533/f051db33576073500488793113388682_vo9cwl.jpg"
)

p5 = Plant.create!(
  title: "Spider Plant",
  description: "The corner stone of indoor plants, come grab some offshoots",
  instructions: "Plant in loamy soil and water once weekly",
  owner_id: u2.id,
  img_url: "https://res.cloudinary.com/whasting/image/upload/c_thumb,h_100,w_100/v1491584569/68eb93ea8d7efc05d889cdb78548d2f0_-pinterest-spider-plants-spider-plant_900-651_d2mzai.jpg"
)
