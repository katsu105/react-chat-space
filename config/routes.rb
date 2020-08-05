Rails.application.routes.draw do
  root to: 'groups#index'
  resources :groups, only: [:index, :new, :show]

  namespace :api do
    resources :groups, only: [:index]
  end
end
