Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: "users#log_in"

  post '/users/sign_up', to: 'users#sign_up'
  get '/users/log_in', to: 'users#log_in'

  resources :users, only: [:index, :show] do
    resources :orders, only: [:index, :show]
  end

  namespace :api, defaults: { format: 'json' } do
    resources :users, only: [:new, :create, :index, :show]
  end
end
