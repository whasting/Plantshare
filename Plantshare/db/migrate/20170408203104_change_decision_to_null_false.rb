class ChangeDecisionToNullFalse < ActiveRecord::Migration[5.0]
  def change
  	change_column_null :requests, :decision, false
  end
end
