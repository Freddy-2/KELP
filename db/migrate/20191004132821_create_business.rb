class CreateBusiness < ActiveRecord::Migration[5.2]
  def change
    create_table :businesses do |t|
      t.string  :title, null: false
      t.string  :description, null: false
      t.float  :longitude, null: false
      t.float  :latitude, null: false
      t.string  :address, null: false
      t.integer  :price, null: false
      t.string  :opening_hours, null: false
      t.string  :closing_hours, null: false


      t.timestamps
    end
    add_index :businesses, :latitude, unique: true
    add_index :businesses, :longitude, unique: true
  end
end
