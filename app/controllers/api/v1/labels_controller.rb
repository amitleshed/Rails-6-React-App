class Api::V1::LabelsController < ApplicationController
  def index
    render json: Label.where(todo_id: params[:todo_id])
  end

  def create
    @label = Label.create(label_params)
    render json: @label
  end

  def destroy
    Label.destroy(params[:id])
  end
  
  def update
    @label = Label.find(params[:id])
    @label.update(label_params)
    render json: @label
  end
  
  private
  
  def label_params
    params.require(:label).permit(:id, :color, :todo_id)
  end
end
