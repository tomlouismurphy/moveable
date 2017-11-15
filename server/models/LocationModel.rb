class Location < ActiveRecord::Base

	self.table_name = 'locations'
	has_many :entrys

end