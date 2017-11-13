class EntryController < ApplicationController

	get '/' do
		@entrys = Entry.all
		@entrys.to_json
	end

	post '/' do
		@entry = Entry.new
		@entry.title = params[:title]
		@entry.description = params[:description]
		@entry.image = params[:images]
		@entry.linked_date = params[:linked_date]
		@entry.tags = params[:tags]
		@entry.reflection = params[:reflection]
		@entry.location_id = params[:location_id]
		@entry.save
		'saved'
	end

	put '/:id' do
		payload = params
		payload = JSON.parse(request.body.read).symbolize_keys
		@entry = Entry.find_by(id: payload[:id])
		@entry.title = payload[:title]
		@entry.description = payload[:description]
		@entry.image = payload[:images]
		@entry.linked_date = payload[:linked_date]
		@entry.tags = payload[:tags]
		@entry.reflection = payload[:reflection]
		@entry.location_id = payload[:location_id]
		@entry.save
		'saved'
	end

	delete '/:id' do
		payload = params
		payload = JSON.parse(request.body.read).symbolize_keys
		@entry = Entry.find_by(id: payload[:id])
		@entry.delete
		'deleted'
	end

end