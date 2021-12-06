Rails.application.routes.draw do
  get 'static/index'
  resources :messages
  namespace :api do
    namespace :v1, defaults: {format: :json} do
      get 'random_greeting', to: 'messages#random_greeting'
    end
  end

  root 'static#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
