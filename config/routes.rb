Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resources :businesses, only: [:index, :show]    
    resources :users, only: [:create, :index]
    resource :session, only: [:create, :destroy]
    resources :reviews
  end


  root to: "static_pages#root"
end
