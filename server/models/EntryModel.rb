class Entry < ActiveRecord::Base

	self.table_name = 'entrys'
	belongs_to :location	

end