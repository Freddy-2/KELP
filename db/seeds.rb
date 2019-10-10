# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# require 'open-uri'

User.destroy_all
Business.destroy_all
Review.destroy_all



User.create(email: 'MY@LEG.com', password: "sponch0", first_name: "Fred", last_name: "Rechid")
User.create(email: 'sponge@bob.com', password: "sponch1", first_name: "SpongeBob", last_name: "SquarePants")
User.create(email: 'patrick@star.com', password: "sponch2", first_name: "Patrick", last_name: "Star")
User.create(email: 'squidward@tentacles.com', password: "sponch3", first_name: "Squidward", last_name: "Tentacles")
User.create(email: 'mr@krabs.com', password: "sponch4", first_name: "Eugene", last_name: "Krabs")
User.create(email: 'sheldon@plankton.com', password: "sponch5", first_name: "Sheldon", last_name: "Plankton")
 
krusty_krab = Business.create(
 title: "Krusty Krab", 
 description: "The Krusty Krab is a fast food restaurant located in Bikini Bottom, founded and owned by Eugene H. Krabs. Its signature item, the Krabby Patty is considered a Bikini Bottom treasure.", 
 longitude: 1, 
 latitude: 2, 
 address: "831 Bottom Feeder Lane",
 price: 2,
 opening_hours: "8 am",
 closing_hours: "10 pm"
)

krusty_krab1 = File.open(Rails.root.join('app', 'assets', 'images', 'krustyKrab.png'))
krusty_krab.photos.attach(io: krusty_krab1, filename: 'krustyKrab.png')

krusty_krab2 = File.open(Rails.root.join('app', 'assets', 'images', 'krustyKrab2.png'))
krusty_krab.photos.attach(io: krusty_krab2, filename: 'krustyKrab2.png')

krusty_krab3 = File.open(Rails.root.join('app', 'assets', 'images', 'krustyKrab3.png'))
krusty_krab.photos.attach(io: krusty_krab3, filename: 'krustyKrab3.png')

krusty_krab4 = File.open(Rails.root.join('app', 'assets', 'images', 'krustyKrab4.png'))
krusty_krab.photos.attach(io: krusty_krab4, filename: 'krustyKrab4.png')

chum_bucket = Business.create(
 title: "Chum Bucket", 
 description: "The Chum Bucket is an unsuccessful fast food restaurant that is located right across the street from the Krusty Krab. Its owner Sheldon Plankton has made many attempts to steal the secret formula from his rival at the Krusty Krab.", 
 longitude: 2, 
 latitude: 1, 
 address: "832 Bottom Feeder Lane",
 price: 2,
 opening_hours: "8 am",
 closing_hours: "10 pm"
)

chum_bucket1 = File.open(Rails.root.join('app', 'assets', 'images', 'chumBucket.png'))
chum_bucket.photos.attach(io: chum_bucket1, filename: 'chumBucket.png')

chum_bucket2 = File.open(Rails.root.join('app', 'assets', 'images', 'chumBucket2.png'))
chum_bucket.photos.attach(io: chum_bucket2, filename: 'chumBucket2.png')

chum_bucket3 = File.open(Rails.root.join('app', 'assets', 'images', 'chumBucket3.png'))
chum_bucket.photos.attach(io: chum_bucket3, filename: 'chumBucket3.png')

chum_bucket4 = File.open(Rails.root.join('app', 'assets', 'images', 'chumBucket4.png'))
chum_bucket.photos.attach(io: chum_bucket4, filename: 'chumBucket4.png')




tree_dome = Business.create(
 title: "Sandy's Treedome", 
 description: "Sandy's Treedome is where Sandy Cheeks lives. Because Sandy is a squirrel, it is the only place Sandy can live in Bikini Bottom. Many interesting science experiments go on here.", 
 longitude: 3, 
 latitude: 4, 
 address: "144 Conch Street",
 price: 1,
 opening_hours: "8 am",
 closing_hours: "10 pm"
)

tree_dome1 = File.open(Rails.root.join('app', 'assets', 'images', 'treeDome.png'))
tree_dome.photos.attach(io: tree_dome1, filename: 'treeDome.png')

tree_dome2 = File.open(Rails.root.join('app', 'assets', 'images', 'treeDome2.png'))
tree_dome.photos.attach(io: tree_dome2, filename: 'treeDome2.png')

tree_dome3 = File.open(Rails.root.join('app', 'assets', 'images', 'treeDome3.png'))
tree_dome.photos.attach(io: tree_dome3, filename: 'treeDome3.png')

tree_dome4 = File.open(Rails.root.join('app', 'assets', 'images', 'treeDome4.png'))
tree_dome.photos.attach(io: tree_dome4, filename: 'treeDome4.png')

