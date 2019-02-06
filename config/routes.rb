Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: "users#new"

  resources :users, only: [:index, :new, :show] do
    resources :orders, only: [:index, :show]
  end

  namespace :api, defaults: { format: 'json' } do
    resources :users, only: [:new, :create, :index, :show]
  end
end
