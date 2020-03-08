class Api::V1::CompletedTodosController < ApplicationController
  def index
    render json: CompletedTodo.all
  end
  
  def create
    @completed_todo = CompletedTodo.create(completed_todo_params)
    @todo = Todo.find(@completed_todo.todo_id)
    @todo.completed = true
    @todo.save
    render json: @completed_todo
  end
  
  def destroy
    @completed_todo = CompletedTodo.find(params[:id])
    @todo = Todo.find(@completed_todo.todo_id)
    @todo.completed = false
    @todo.save
    @completed_todo.destroy
  end
  
  def update
    @completed_todo = CompletedTodo.find(params[:id])
    @completed_todo.update(@completed_todo_params)
    render json: @completed_todo
  end
  
  private
  
  def completed_todo_params
    params.require(:completed_todo).permit(:id, :todo_id, :title, :description)
  end
end