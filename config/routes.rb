Rails.application.routes.draw do
  get "sample", to: "sample#index"
  get "test", to: "test#index"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
