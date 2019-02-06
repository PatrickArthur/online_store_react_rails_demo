class Product < ApplicationRecord
  mount_uploader :image, ImageUploader
  has_many :order_items
  has_many :orders, :through => :order_items
  belongs_to :seller, :class_name => "User"
end


