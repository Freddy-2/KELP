class DeleteUserIDandBizIdIndex < ActiveRecord::Migration[5.2]
  def change
   remove_index :reviews, column: :user_id, unique: true
   remove_index :reviews, column: :business_id, unique: true
  end
end
