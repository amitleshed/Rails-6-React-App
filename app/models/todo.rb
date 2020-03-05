class Todo < ApplicationRecord
  after_initialize :default_values
  
  def default_values
    self.pin ||= false
  end
end
