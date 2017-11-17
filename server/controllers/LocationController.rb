class LocationController < ApplicationController

	get '/' do
		response['Access-Control-Allow-Origin'] = '*'	
		@location = Location.all
		@location.to_json
	end

	post '/' do
		response['Access-Control-Allow-Origin'] = '*'
		@location = Location.new
		@location.name = params[:name]
		@location.latitude = params[:latitude]
		@location.longitude = params[:longitude]
		@location.save
		'posted'
	end

	put '/:id' do
		response['Access-Control-Allow-Origin'] = '*'
		@location = Location.find_by(id: params[:id])
		@location.name = params[:name]
		@location.latitude = params[:latitude]
		@location.longitude = params[:longitude]
		@location.save
		'saved'
	end

	delete '/:id' do
		response['Access-Control-Allow-Origin'] = '*'
		payload = params
		payload = JSON.parse(request.body.read).symbolize_keys
		@location = Location.find_by(id: payload[:id])
		@location.delete
		'deleted'
	end

end