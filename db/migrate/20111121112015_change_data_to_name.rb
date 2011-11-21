class ChangeDataToName < ActiveRecord::Migration
  def self.up
    rename_column :tasks, :data, :name
  end

  def self.down
    rename_column :tasks, :name, :data
  end
end
