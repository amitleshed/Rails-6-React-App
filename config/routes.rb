Rails.application.routes.draw do  
  namespace :api do
    namespace :v1 do
      resources :todos, only: [:update, :index, :create, :destroy]
      put '/todos/:todo_id/pin', to: 'todos#pin'
    end
  end
  
  root to: 'home#index'
  match '*path', to: 'home#index', via: :all
end
