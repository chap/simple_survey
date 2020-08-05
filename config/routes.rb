Rails.application.routes.draw do
  resources :surveys, only: [:new, :create, :show]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root to: 'surveys#new'
end
