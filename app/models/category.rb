class Category < ActiveRecord::Base
  has_many :inventories
end
