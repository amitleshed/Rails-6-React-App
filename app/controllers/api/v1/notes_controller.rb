class Api::V1::NotesController < ApplicationController
  protect_from_forgery with: :null_session
  
  def index
    render json: Note.all
  end
  
  def create
    @note = Note.create(note_params)
    render json: @note
  end
  
  def destroy
    Note.destroy(params[:id])
  end
  
  def update
    @note = Note.find(params[:id])
    @note.update(note_params)
    render json: @note
  end
  
  private
  
  def note_params
    params.require(:note).permit(:content, :todo_id)
  end
end