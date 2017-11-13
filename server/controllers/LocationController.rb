class LocationController < ApplicationController

	get '/' do	
		@location = Location.all
		@location.to_json
	end

	post '/' do
		@location = Location.new
		@location.name = params[:name]
		@location.latitude = params[:latitude]
		@location.longitude = params[:longitude]
		@location.save
		'posted'
	end

	put '/:id' do
		payload = params
		payload = JSON.parse(request.body.read).symbolize_keys
		@location = Location.find_by(id: payload[:id])
		@location.name = payload[:name]
		@location.latitude = payload[:latitude]
		@location.longitude = payload[:longitude]
		@location.save
		'saved'
	end

	delete '/:id' do
		payload = params
		payload = JSON.parse(request.body.read).symbolize_keys
		@location = Location.find_by(id: payload[:id])
		@location.delete
		'deleted'
	end

end