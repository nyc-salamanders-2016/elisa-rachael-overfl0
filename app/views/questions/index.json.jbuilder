json.array! @questions do |question|
  json.(question, :title, :body)
  json.author question.user
end
