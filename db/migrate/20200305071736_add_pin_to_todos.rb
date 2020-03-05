class AddPinToTodos < ActiveRecord::Migration[6.0]
  def change
    add_column :todos, :pin, :boolean
  end
end
