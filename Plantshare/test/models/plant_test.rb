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

require 'test_helper'

class PlantTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
