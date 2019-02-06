class AddQuantityInstockProducts < ActiveRecord::Migration[5.2]
  def change
    add_column :products, :quantity, :integer, default: 0
    add_column :products, :in_stock, :boolean, default: false
  end
end
