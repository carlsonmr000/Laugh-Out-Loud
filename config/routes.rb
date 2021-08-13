Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  resources :users, only: [:create]
  post "/users/login", to: "users#login"
  get "/users/verify", to: "users#verify"

  #put "/jokes/:id/add_comment", to: "jokes#add_comment_to_joke"
  # get "/comments", to: "comments#index"
  # put '/comments' to: 'comments#update'

  resources :jokes do
    resources :comments
  end
end
