Rails.application.routes.draw do
  get 'home/index'

  root 'home#index'
  resources :garrages do
  	resources :stuffs
	end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  # Serve websocket cable requests in-process
  # mount ActionCable.server => '/cable'
end
