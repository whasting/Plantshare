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
#  status     :string           default("pending"), not null
#

require 'test_helper'

class RequestTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
