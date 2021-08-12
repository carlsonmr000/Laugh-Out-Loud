# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Comment.destroy_all
User.destroy_all
Joke.destroy_all

flamingo = User.create(username: "flamingo", email: "flamingo@ga.edu", password_digest: "123456")
# maxi = User.create(username: "Maxi", email: "maxi@ga.edu", password_digest: "123456")

pp "#{User.count} users created"

joke1 = Joke.create!(title: "What’s a movie whose title got deeper the longer you watched?", content: "The Titanic", user_id: flamingo[:id])
joke2 = Joke.create!(title: "How do you impress a baker?", content: "Bring them flours.", user_id: flamingo[:id])
joke3 = Joke.create!(title: "What did the fisherman say to the magician?", content: "Pick a cod, any cod!", user_id: flamingo[:id])
joke4 = Joke.create!(title: "Why did the clairvoyant visit the psychologist?", content: "He was suffering from pre-traumatic stress disorder.", user_id: flamingo[:id])
joke5 = Joke.create!(title: "Did you know Hawaiians never laugh very loud?", content: "They just give aloha!", user_id: flamingo[:id])
joke6 = Joke.create!(title: "What does the Mandalorian say during pre-workout?", content: "This is the whey", user_id: flamingo[:id])
joke7 = Joke.create!(title: "Which is faster, hot or cold?", content: "Hot. Because you can catch a cold!", user_id: flamingo[:id])
joke8 = Joke.create!(title: "How does a chicken imitate a dog?", content: "Bawk Bawk", user_id: flamingo[:id])


pp "#{Joke.count} jokes created"

# spicy = Flavor.create(name: "spicy")
# sweet = Flavor.create(name: "sweet
# bitter = Flavor.create(name: "bitt")er")
# sour = Flavor.create(name: "sour")
# salty = Flavor.create(name: "salty")
# umami = Flavor.create(name: "umami")

# pp "#{Flavor.count} flavors created"