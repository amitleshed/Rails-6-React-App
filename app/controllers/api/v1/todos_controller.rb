class Api::V1::TodosController < ApplicationController
  def index
    render json: Todo.where(completed: false).reverse
  end
  
  def create
        puts "PARAMS !!!!!! #{params}"
    @todo = Todo.create(todo_params)
    render json: @todo
  end
  
  def destroy
    Todo.destroy(params[:id])
  end
  
  def update
    @todo = Todo.find(params[:id])
    @todo.update(todo_params)
    render json: @todo
  end 
  
  def pin
    @todo = Todo.find(params[:todo_id])
    @todo.pin = !@todo.pin
    @todo.save
    render json: @todo
  end
  
  private
  
  def todo_params
    params.require(:todo).permit(:id, :title, :description, :pin)
  end
end