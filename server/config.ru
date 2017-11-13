require 'sinatra/base'

require './controllers/ApplicationController'

map ('/') {run ApplicationController}