Rails.application.routes.draw do
  root to: "questions#index"

  get '/login' => 'sessions#new'
  post '/login' => 'sessions#create'
  get '/logout' => 'sessions#destroy'

  resources :users, only: [:new, :show, :create]

  resources :questions do
    resources :answers
  end

  resources :comments
end
