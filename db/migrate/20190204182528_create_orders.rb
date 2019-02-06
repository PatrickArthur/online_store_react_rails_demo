class CreateOrders < ActiveRecord::Migration[5.2]
  def change
    create_table :orders do |t|
      t.integer :buyer_id, index: true, foreign_key: true
      t.integer :seller_id, index: true, foreign_key: true
    end
  end
end
