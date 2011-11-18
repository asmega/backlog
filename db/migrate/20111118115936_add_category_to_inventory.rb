class AddCategoryToInventory < ActiveRecord::Migration
  def self.up
    add_column :inventories, :category_id, :integer, :null => false, :default => 1
  end

  def self.down
    remove_column :inventories, :category_id
  end
end
