class ChangeDecisionToStatus < ActiveRecord::Migration[5.0]
  def change
  	rename_column :requests, :decision, :status
  end
end
