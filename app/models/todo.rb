class Todo < ApplicationRecord
  has_many :labels, dependent: :destroy
  has_many :notes, dependent: :destroy
  
  after_initialize :default_values
  
  def default_values
    self.pin       ||= false
    self.completed ||= false
  end
end
