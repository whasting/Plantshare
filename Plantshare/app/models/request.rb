# == Schema Information
#
# Table name: requests
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  plant_id   :integer          not null
#  comment    :text
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Request < ApplicationRecord
	validates :status, inclusion: { in: ["pending", "approved", "denied"]}
  validates :plant_id, uniqueness: { scope: :user_id }

  belongs_to :user
  belongs_to :plant

  after_initialize :assign_pending_status

  def approve!
  	raise "not pending" unless self.status = "pending"
  	transaction do
  		self.status = "approved"
  		self.save!

  		overlapping_pending_requests.update_all(status: "denied")
  	end
  end

  def deny!
  	self.status = "denied"
  	self.save!
  end

  private

  def assign_pending_status
  	self.status ||= "pending"
  end

  def overlapping_requests
  	Request
  		.where.not(id: self.id)
  		.where(plant_id: plant_id)
  	SQL
  end

  def overlapping_pending_requests
  	overlapping_requests.where("status = 'pending'")
  end
end
