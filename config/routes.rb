Rails.application.routes.draw do  
  get 'labels/index'
  get 'labels/create'
  get 'labels/destroy'
  namespace :api do
    namespace :v1 do
      resources :todos          , only: [:update, :index, :create, :destroy] do
        resources :labels       , only: [:update, :index, :create, :destroy]
      end
      resources :notes          , only: [:update, :index, :create, :destroy]
      put '/todos/:todo_id/pin', to: 'todos#pin'
    end
  end
  
  root to: 'home#index'
  match '*path', to: 'home#index', via: :all
end
