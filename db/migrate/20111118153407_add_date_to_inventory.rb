class AddDateToInventory < ActiveRecord::Migration
  def self.up
    add_column :inventories, :date, :date
  end

  def self.down
    remove_column :inventories, :date
  end
end
