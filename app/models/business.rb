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

class Business < ApplicationRecord
  validates :title, :description, :longitude, :latitude, :address, :price, :opening_hours, :closing_hours, presence: true
  validates :price, inclusion: { in: (1..3) }

  # has_one_attached :biz_photo
  has_many_attached :photos
end
