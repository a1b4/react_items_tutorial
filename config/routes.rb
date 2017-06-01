Rails.application.routes.draw do
  root to: 'site#index'
  namespace :api do
    namespace :v1 do
      resources :items, except: [:new, :edit]
    end
  end
end
