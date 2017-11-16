class EntryController < ApplicationController

	get '/' do
		response['Access-Control-Allow-Origin'] = '*'
		@entrys = Entry.all
		@entrys.to_json
	end

	post '/' do
		response['Access-Control-Allow-Origin'] = '*'
		@entry = Entry.new
		@entry.title = params[:title]
		@entry.description = params[:description]
		@entry.image = params[:image]
		@entry.assignedtime = params[:assignedtime]
		@entry.tags = params[:tags]
		@entry.reflection = params[:reflection]
		@entry.location_id = params[:location_id]
		@entry.save
		'saved'
	end

	put '/:id' do
		response['Access-Control-Allow-Origin'] = '*'
		@entry = Entry.find_by(id: params[:id])
		@entry.title = params[:title]
		@entry.description = params[:description]
		@entry.image = params[:image]
		@entry.assignedtime = params[:assignedtime]
		@entry.tags = params[:tags]
		@entry.reflection = params[:reflection]
		@entry.location_id = params[:location_id]
		@entry.save
		'saved'
	end

	delete '/:id' do
		response['Access-Control-Allow-Origin'] = '*'
		payload = params
		payload = JSON.parse(request.body.read).symbolize_keys
		@entry = Entry.find_by(id: payload[:id])
		@entry.delete
		'deleted'
	end

end