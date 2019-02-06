class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :first_name
      t.string :last_name
      t.string :street_name
      t.string :city
      t.string :state
      t.string :country
      t.string :zip_code
      t.string :company_name
    end
  end
end
