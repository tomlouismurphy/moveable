require 'sinatra/base'

require './controllers/ApplicationController'
require './controllers/LocationController'
require './controllers/EntryController'

require './models/LocationModel'
require './models/EntryModel'

map ('/') {run ApplicationController}
map ('/locations') {run LocationController}
map ('/entrys') {run EntryController}