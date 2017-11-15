class ApplicationController < Sinatra::Base

	require 'bundler'
	Bundler.require

	require 'sinatra/cross_origin'

	ActiveRecord::Base.establish_connection(
		:adapter => 'postgresql',
		:database => 'moveable'
	)

	set :bind, '0.0.0.0'

	use Rack::MethodOverride

	register Sinatra::CrossOrigin

	configure do
		enable :cross_origin
	end

	set :allow_credentials, true
	set :allow_methods, [:get, :post, :options]

	options '*' do
		response.headers["Access-Control-Allow-Methods"] = "HEAD,GET,POST,PUT,PATCH,DELETE,OPTIONS"
		response.headers["Access-Control-Allow-Headers"] = "X-Requested-With, X-HTTP-Method-Override, Content-Type, Cache-Control, Accept"
	end

	set :method_override, true

	set :protection, false

	set :views, File.expand_path('/../views',__FILE__)

	get '/' do
		"Hello Worlds"
	end

end