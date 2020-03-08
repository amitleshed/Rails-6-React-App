class CreateCompletedTodos < ActiveRecord::Migration[6.0]
  def change
    create_table :completed_todos do |t|
      t.string      :title
      t.text        :description
      t.references  :todo, null: false, foreign_key: true

      t.timestamps
    end
  end
end
