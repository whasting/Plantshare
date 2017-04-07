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
  belongs_to :user
  belongs_to :plant

end
