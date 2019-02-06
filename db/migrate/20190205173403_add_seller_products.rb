class AddSellerProducts < ActiveRecord::Migration[5.2]
  def change
    add_column :products, :seller_id, :integer, index: true, foreign_key: true
  end
end
