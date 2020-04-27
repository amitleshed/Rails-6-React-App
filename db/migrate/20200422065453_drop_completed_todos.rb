class DropCompletedTodos < ActiveRecord::Migration[6.0]
  def change
    drop_table :completed_todos
  end
end
