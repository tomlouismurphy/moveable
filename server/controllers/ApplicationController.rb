class ApplicationController < Sinatra::Base

	require 'bundler'
	Bundler.require

	require 'sinatra/cross_origin'

	ActiveRecord::Base.establish_connection(
		:adapter => 'postgresql',
		:database => 'tasklist'
	)

	set :bind, '0.0.0.0'

	use Rack::MethodOverride

	configure do
		enable :cross_origin
	end

	set :allow_credentials, true
	set :allow_methods, [:get, :post, :options]

	before do
		response.headers['Access-Control-Allow-Origin'] = '*'
	end

	options '*' do
		response.headers["Access-Control-Allow-Methods"] = "HEAD,GET,POST,PUT,PATCH,DELETE,OPTIONS"
		response.headers["Access-Control-Allow-Headers"] = "X-Requested-With, X-HTTP-Method-Override, Content-Type, Cache-Control, Accept"
	end

	set :method_override, true

	set :protection, false

	set :views, File.dirname(__FILE__) + '/../views'

	get '/' do
		"Hello World"
	end

end