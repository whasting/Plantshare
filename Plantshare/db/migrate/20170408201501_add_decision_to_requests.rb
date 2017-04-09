class AddDecisionToRequests < ActiveRecord::Migration[5.0]
  def change
  	add_column :requests, :decision, :string
  end
end
