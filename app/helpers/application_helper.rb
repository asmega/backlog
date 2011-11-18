module ApplicationHelper
  def date_in_words(date)
    return "#{time_ago_in_words(date)} from now" if in_future?(date)
    return "#{time_ago_in_words(date)} ago" if in_past?(date)
    "Today"
  end

  private

  def in_past?(date)
    date < Date.today
  end

  def in_future?(date)
    date > Date.today
  end
end
