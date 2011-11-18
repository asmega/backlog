class AddTechnicalToCategory < ActiveRecord::Migration
  def self.up
    add_column :categories, :technical_name, :string
  end

  def self.down
    remove_column :categories, :technical_name
  end
end
