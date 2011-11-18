["Delivered", "Current Sprint", "Next Sprint", "Backlog"].each do |cat|
  Category.find_or_create_by_name(cat)
end
