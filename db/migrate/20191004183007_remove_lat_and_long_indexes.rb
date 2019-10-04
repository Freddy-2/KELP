class RemoveLatAndLongIndexes < ActiveRecord::Migration[5.2]
  def change
   remove_index :businesses, column: :latitude, unique: true
   remove_index :businesses, column: :longitude, unique: true
  end
end
