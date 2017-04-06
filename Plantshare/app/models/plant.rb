class Plant < ApplicationRecord
  validates :owner_id, :title, :description, :instructions, presence: true

  belongs_to :owner,
    class_name: :User,
    foreign_key: :owner_id

  has_many :requests
end
