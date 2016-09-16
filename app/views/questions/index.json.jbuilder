json.array! @questions do |question|
  json.(question, :id, :title, :body)
  json.user question.user
end
