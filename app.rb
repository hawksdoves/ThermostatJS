require 'sinatra/base'
require 'json'

class Thermostat < Sinatra::Base
  
  get '/' do
    redirect '/thermostat.html'
  end

  post '/temperature' do
  	p session[:work] = params[:temp]
  end

  get '/temperature' do
  	p session[:work]
  end

  # start the server if ruby file executed directly
  run! if app_file == $0
end
