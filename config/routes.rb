Rails.application.routes.draw do
  root to: 'groups#index'
  resources :groups, only: [:index, :new, :show]

  namespace :api do
    resources :groups, only: [:index, :show] do
      member do
        get :fetch_group_name
      end
      resources :messages, only: [:index, :create]
    end
  end
end
