class CreateRequests < ActiveRecord::Migration[5.0]
  def change
    create_table :requests do |t|
      t.integer :user_id, null: false
      t.integer :plant_id, null: false

      t.timestamps
    end
    add_index :requests, :user_id
    add_index :requests, :plant_id
  end
end
