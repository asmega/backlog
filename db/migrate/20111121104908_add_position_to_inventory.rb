class AddPositionToInventory < ActiveRecord::Migration
  def self.up
    add_column :inventories, :position, :integer, :null => true
  end

  def self.down
    remove_column :inventories, :position
  end
end
