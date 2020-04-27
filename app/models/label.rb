class Label < ApplicationRecord
  belongs_to :todo
  
  enum color: [:green, :yellow, :orange, :red, :purple, :blue]
end
