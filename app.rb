require 'sinatra/base'
require 'json'

class Thermostat < Sinatra::Base

  enable :sessions

  get '/' do
    redirect '/thermostat.html'
  end

  post '/temperature' do
  	session[:work] = params[:temp].to_i
  end

  get '/temperature' do
    # if session[:work]
    #   JSON.generate({temp: session[:work]})
    # else
    #   JSON.generate({temp: 20})
    # end
    content_type :json
    p ({temp: session[:work]}).to_json
  end

  # start the server if ruby file executed directly
  run! if app_file == $0
end
