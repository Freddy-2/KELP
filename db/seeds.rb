# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(email: 'sponch@sponch.mail', password: "sponch1", first_name: "sponch", last_name: "sponch")
 
Business.create(title: "Krusty Krab", description: "not to krabby", longitude: 1, latitude: 2, address: "krabby way",
 price: 2,
 opening_hours: "8 am",
 closing_hours: "10 pm"
)
Business.create(title: "Chum Bucket", description: "ello Chums", longitude: 2, latitude: 1, address: "chummy chumbo",
 price: 2,
 opening_hours: "8 am",
 closing_hours: "10 pm"
)