# == Schema Information
#
# Table name: plants
#
#  id           :integer          not null, primary key
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
#

class Plant < ApplicationRecord
  validates :owner_id, :title, :description, :instructions, presence: true

  belongs_to :owner,
    class_name: :User,
    foreign_key: :owner_id

  has_many :requests

  has_many :requesters, through: :requests, source: :user

end
