class AddStatusColumn < ActiveRecord::Migration[5.0]
  def change
    add_column :requests, :status, :string, default: "pending", null:false
  end
end
