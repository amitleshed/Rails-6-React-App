class Api::V1::TodosController < ApplicationController
  def index
    render json: Todo.all
  end
  
  def create
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
  
  private
  
  def todo_params
    params.require(:todo).permit(:id, :title, :description)
  end
end