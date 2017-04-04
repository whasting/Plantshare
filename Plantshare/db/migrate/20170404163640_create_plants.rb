class CreatePlants < ActiveRecord::Migration[5.0]
  def change
    create_table :plants do |t|
      t.string :title, null: false
      t.text :description, null: false
      t.text :instructions, null: false
      t.integer :owner_id, null: false
      t.float :lng
      t.float :lat
      t.string :img_url
      t.time :start_time
      t.time :end_time

      t.timestamps
    end
    add_index :plants, :owner_id
  end
end
