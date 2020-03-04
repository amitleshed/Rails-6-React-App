TODOS = [ "Clean apartment", "Buy clothes", "Do laundry" ]

TODOS.each do |todo| 
  Todo.create(title: todo, description: "#{todo} as soon as possible")
end