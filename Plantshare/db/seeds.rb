# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

demo = User.create!(username: "Demo", password: "password")
wade = User.create!(username: "Wade", password: "password")
colin = User.create!(username: "Colin", password: "password")
eddie = User.create!(username: "Eddie", password: "password")

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

demo_aeonium = Plant.create!(
  title: "Aeonium Arboreum",
  description: "20 cuttings available of this beautiful treelike succulent",
  instructions: "Water once weekly during late-spring/summer, water monthly in winter",
  owner_id: demo.id,
  img_url: "https://res.cloudinary.com/whasting/image/upload/h_175,w_175/v1491368806/Aeonium-arboreum-2_zdkqm2.jpg"
)

demo_apple = Plant.create!(
  title: "Apples",
  description: "Very sweet apples for $20 per tree.",
  instructions: "Apple trees need well-drained soil, not too wet. Soil needs to be moderately rich and retain moisture as well as air; mulch with straw, hay, or some other organic material to keep soil moist and provide nutrients as they decompose.",
  owner_id: demo.id,
  img_url: "https://res.cloudinary.com/eddielao/image/upload/c_scale,w_175/v1491764857/apple_qoyk3z.jpg"
)

demo_lemons = Plant.create!(
  title: "Lemons",
  description: "I have way too many lemons!",
  instructions: "Take the lemons and make some lemonade, donations welcome",
  owner_id: demo.id,
  img_url: "https://res.cloudinary.com/whasting/image/upload/h_175,w_175/v1491584479/o-LEMONS-facebook_qbevvw.jpg"
)

demo_mango = Plant.create!(
  title: "Mangoes",
  description: "Have very limited mangoes for trade! Hurry before they are all gone!",
  instructions: "Store at room temperature until ripe, then refrigerate in plastic bag.",
  owner_id: demo.id,
  img_url: "https://res.cloudinary.com/eddielao/image/upload/c_scale,w_175/v1491765171/mango_t7mkjw.jpg"
)

demo_pork = Plant.create!(
title: "Pork and Beans",
description: "Need to thin out my Pork and Beans plant, all you need is a single bean to get started!",
instructions: "One roots established, water twice per week",
owner_id: demo.id,
img_url: "https://res.cloudinary.com/whasting/image/upload/h_175,w_175/v1491584457/pork-and-beans-sedum-sedum-rubrotinctum_lmmoni.jpg"
)

demo_split = Plant.create!(
  title: "Split Leaf Philodendron",
  description: "This plant has taken over my garden, the cuttings root readily",
  instructions: "Stick directly in the ground and water twice weekly, the plants prefer shade",
  owner_id: demo.id,
  img_url: "https://res.cloudinary.com/whasting/image/upload/h_175,w_175/v1491584533/f051db33576073500488793113388682_vo9cwl.jpg"
)

demo_spider = Plant.create!(
  title: "Spider Plant",
  description: "The corner stone of indoor plants, come grab some offshoots",
  instructions: "Plant in loamy soil and water once weekly",
  owner_id: demo.id,
  img_url: "https://res.cloudinary.com/whasting/image/upload/h_175,w_175/v1491584569/68eb93ea8d7efc05d889cdb78548d2f0_-pinterest-spider-plants-spider-plant_900-651_d2mzai.jpg"
)

demo_strawberry = Plant.create!(
  title: "Strawberries",
  description: "I have more strawberries that I can consume. Willing to trade for other types of fruits.",
  instructions: "Try to plant strawberries on a cloudy day or during the late afternoon. Set the strawberry plant in the soil so that the soil is just covering the tops of the roots. Do not cover the crown. After four or five weeks, the plants will produce runners and new daughter plants.",
  owner_id: demo.id,
  img_url: "https://res.cloudinary.com/eddielao/image/upload/c_scale,w_175/v1491763984/strawberry_ozagrf.jpg"
)

demo_tangerine = Plant.create!(
  title: "Ponkan Tangerines",
  description: "I am looking to sell my sweet tangerines for $1 per pound.",
  instructions: "Unlike some other fruits, tangerine trees need no pruning. As it grows, your tree will need to be repotted about every three to four years. Like other houseplants, one size up in pot size should be enough. It will also take three to four years for your tangerine to bear fruit.",
  owner_id: demo.id,
  img_url: "https://res.cloudinary.com/eddielao/image/upload/c_scale,w_175/v1491764412/tangerine_dhhtne.jpg"
)

demo_tomato = Plant.create!(
  title: "Tomatoes",
  description: "Will either sell or trade.",
  instructions: "Plant your tomato seedlings up to the first true leaves. New roots will quickly sprout on the stems and more roots mean more fruits. Soak your tomato bed once a week, or every five days at the height of summer. Water directly on the soil, not on the leaves.",
  owner_id: demo.id,
  img_url: "https://res.cloudinary.com/eddielao/image/upload/c_scale,w_175/v1491765658/tomato_jxk6dq.jpg"
)

colin_cilantro = Plant.create!(
  title: "Cilantro",
  description: "Looking to sell my cilantro for $2 a batch.",
  instructions: "Cilantro needs full sun or light shade in southern zones since it bolts quickly in hot weather. It grows best in a well-drained, moist soil. Cilantro plants should be spaced about 6 to 8 inches apart. To harvest fresh cilantro all season, make successive sowings every 2 to 3 weeks starting in late spring.",
  owner_id: colin.id,
  img_url: "https://res.cloudinary.com/eddielao/image/upload/c_scale,w_175/v1491766321/cilantro_ya9ilq.jpg"
)

eddie_pepper = Plant.create!(
title: "Chili Peppers",
description: "My backyard grows a lot of chili peppers every season but I am the only one in the household who remotely likes spicy food. Will trade for mangoes.",
instructions: "Before you put the transplants into the ground, make sure you fertilize the soil fully and work it well. Make sure you transplant the chili peppers on a cool, cloudy day.",
owner_id: eddie.id,
img_url: "https://res.cloudinary.com/eddielao/image/upload/c_scale,w_175/v1491766025/pepper_pfyvkc.jpg"
)

wade_rose = Plant.create!(
  title: "White Roses",
  description: "Carefully grown and ready for sale!",
  instructions: "Do not prune roses in the fall. Simply cut off any dead or diseased canes. Stop fertilizing 6 weeks before the first frost but continue watering during dry autumn weather to help keep plants fortified during the dry winter. Mound, mulch, or add compost after a few frosts but before the ground freezes.",
  owner_id: wade.id,
  img_url: "https://res.cloudinary.com/eddielao/image/upload/c_scale,w_175/v1491767399/rose_otu4mn.jpg"
)

wade_squash = Plant.create!(
  title: "Butternut Squashes",
  description: "Have lots of squashes but my family is not really squash people. Come get them!",
  instructions: "The butternut squash growing season begins when all danger of frost is past and the soil is well warmed by the sun, about 60 to 65 F. (15-18 C.) at a 4-inch depth.",
  owner_id: wade.id,
  img_url: "https://res.cloudinary.com/eddielao/image/upload/v1491766564/squash_mooxee.jpg"
)

wade_sunflower = Plant.create!(
  title: "Sunflower",
  description: "Pots of sunflower available.",
  instructions: "Put a saucer or tray underneath each pot and soak the soil with watering can until the liquid drains from the drainage holes. Avoid getting the foliage wet and always discard the drained water. Water the sunflowers when the top inch of soil is dry. Aim to keep the soil moist -- not soggy.",
  owner_id: wade.id,
  img_url: "https://res.cloudinary.com/eddielao/image/upload/c_scale,w_175/v1491767656/sunflower_fnjdtm.jpg"
)


# ===================REQUESTS============================

Request.destroy_all

colin_request_demo_aeonium = Request.create!(
  user_id: colin.id,
  plant_id: demo_aeonium.id,
  comment: "I am willing to pay $50 for them.",
  status: "pending"
)

colin_request_demo_pork = Request.create!(
  user_id: colin.id,
  plant_id: demo_pork.id,
  comment: "I like to take all.",
  status: "pending"
)

colin_request_demo_strawberry = Request.create!(
  user_id: colin.id,
  plant_id: demo_strawberry.id,
  comment: "Can I take all the strawberries that are still available?",
  status: "pending"
)

eddie_request_demo_pork = Request.create!(
  user_id: eddie.id,
  plant_id: demo_pork.id,
  comment: "Hi, if they are still available, can I have one?",
  status: "pending"
)

eddie_request_demo_aeonium = Request.create!(
  user_id: eddie.id,
  plant_id: demo_aeonium.id,
  comment: "I just sold all my chili peppers for $40 and want to buy whatever amount $40 is worth.",
  status: "pending"
)

wade_request_demo_pork = Request.create!(
  user_id: wade.id,
  plant_id: demo_pork.id,
  comment: "Need them ASAP. Please let me know!",
  status: "pending"
)

wade_request_demo_spider = Request.create!(
  user_id: wade.id,
  plant_id: demo_spider.id,
  comment: "I need two, please!",
  status: "pending"
)
