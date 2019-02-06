class Order < ApplicationRecord
  belongs_to :seller, :class_name => "User"
  belongs_to :buyer, :class_name => "User"
  has_many :order_items
  has_many :products, :through => :order_items
end
