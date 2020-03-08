class Todo < ApplicationRecord
  after_initialize :default_values
  
  has_many :completed_todos, dependent: :destroy
  
  def default_values
    self.pin       ||= false
    self.completed ||= false
  end
end
