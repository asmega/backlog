class RenameInventoriesToTasks < ActiveRecord::Migration
  def self.up
    rename_table :inventories, :tasks
  end

  def self.down
    rename_table :tasks, :inventories
  end
end
