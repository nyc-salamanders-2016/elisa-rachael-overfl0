# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

users = [
  {username: "rachael", email: "rachael@gmail.com", password: "password"},
  {username: "human", email: "human@people.com", password: "password"}
]

User.create!(users)

questions = [
  {title:"What is love?", body: "Baby don't hurt me", user_id: 1},
  {title:"Why is the sky blue?", body: "Why not green?", user_id: 2},
  {title: "What's for lunch?", body: "I'm hungry", user_id: 1},
  {title: "How many licks does it take to get to the center of a tootsie pop?", body: "Mr Owl", user_id: 1},
  {title: "When is my birthday?", body: "$100 to whoever guesses first", user_id: 2}
]

Question.create!(questions)
