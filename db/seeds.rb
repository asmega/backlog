["Delivered", "Current Sprint", "Next Sprint", "Backlog"].each do |cat|
  Category.find_or_create_by_name_and_technical_name(cat, cat.underscore.downcase.gsub(" ", "_"))
end
