# == Schema Information
#
# Table name: businesses
#
#  id            :bigint           not null, primary key
#  title         :string           not null
#  description   :string           not null
#  longitude     :float            not null
#  latitude      :float            not null
#  address       :string           not null
#  price         :integer          not null
#  opening_hours :string           not null
#  closing_hours :string           not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

require 'test_helper'

class BusinessTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
