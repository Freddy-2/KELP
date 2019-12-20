# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# require 'open-uri'

# User.destroy_all
# Business.destroy_all
# Review.destroy_all



user1 = User.create(email: 'MY@LEG.com', password: "sponch0", first_name: "Fred", last_name: "Rechid")

prof_pic1 = File.open(Rails.root.join('app', 'assets', 'images', 'profPic.png'))
user1.prof_pic.attach(io: prof_pic1, filename: 'profPic.png')

user2 = User.create(email: 'sponge@bob.com', password: "sponch1", first_name: "SpongeBob", last_name: "SquarePants")

prof_pic2 = File.open(Rails.root.join('app', 'assets', 'images', 'profPic2.png'))
user2.prof_pic.attach(io: prof_pic2, filename: 'profPic2.png')

user3 = User.create(email: 'patrick@star.com', password: "sponch2", first_name: "Patrick", last_name: "Star")

prof_pic3 = File.open(Rails.root.join('app', 'assets', 'images', 'profPic3.png'))
user3.prof_pic.attach(io: prof_pic3, filename: 'profPic3.png')

user4 = User.create(email: 'squidward@tentacles.com', password: "sponch3", first_name: "Squidward", last_name: "Tentacles")

prof_pic4 = File.open(Rails.root.join('app', 'assets', 'images', 'profPic4.png'))
user4.prof_pic.attach(io: prof_pic4, filename: 'profPic4.png')

user5 = User.create(email: 'mr@krabs.com', password: "sponch4", first_name: "Eugene", last_name: "Krabs")

prof_pic5 = File.open(Rails.root.join('app', 'assets', 'images', 'profPic5.png'))
user5.prof_pic.attach(io: prof_pic5, filename: 'profPic5.png')

user6 = User.create(email: 'sheldon@plankton.com', password: "sponch5", first_name: "Sheldon", last_name: "Plankton")

prof_pic6 = File.open(Rails.root.join('app', 'assets', 'images', 'profPic6.png'))
user6.prof_pic.attach(io: prof_pic6, filename: 'profPic6.png')
 
krusty_krab = Business.create(
 title: "Krusty Krab", 
 description: "The Krusty Krab is a fast food restaurant located in Bikini Bottom, founded and owned by Eugene H. Krabs. Its signature item, the Krabby Patty is considered a Bikini Bottom treasure.", 
 longitude: 164.3768, 
 latitude: 12.5833 , 
 address: "831 Bottom Feeder Lane",
 price: 3,
 opening_hours: "8:00 am",
 closing_hours: "10:00 pm"
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
 longitude: 165.3768, 
 latitude: 11.5833 , 
 address: "832 Bottom Feeder Lane",
 price: 1,
 opening_hours: "6:00 am",
 closing_hours: "11:00 pm"
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
 description: "Sandy's Treedome is where Sandy Cheeks lives. It's the only place Sandy can live in Bikini Bottom. A ton of interesting science experiments go on here.", 
 longitude: 167.3768, 
 latitude: 13.5833 , 
 address: "144 Conch Street",
 price: 1,
 opening_hours: "9:00 am",
 closing_hours: "11:30 pm"
)

tree_dome1 = File.open(Rails.root.join('app', 'assets', 'images', 'treeDome.png'))
tree_dome.photos.attach(io: tree_dome1, filename: 'treeDome.png')

tree_dome2 = File.open(Rails.root.join('app', 'assets', 'images', 'treeDome2.png'))
tree_dome.photos.attach(io: tree_dome2, filename: 'treeDome2.png')

tree_dome3 = File.open(Rails.root.join('app', 'assets', 'images', 'treeDome3.png'))
tree_dome.photos.attach(io: tree_dome3, filename: 'treeDome3.png')

tree_dome4 = File.open(Rails.root.join('app', 'assets', 'images', 'treeDome4.png'))
tree_dome.photos.attach(io: tree_dome4, filename: 'treeDome4.png')

weenie_hut = Business.create(
 title: "Weenie Hut Jr's", 
 description: "Weenie Hut Jr's is a restaurant located in Bikini Bottom. It has two other counterparts, Super Weenie Hut Jr's and Weenie Hut General. You usually end up here if you aren't tough enough for the Salty Spitoon", 
 longitude: 161.3768, 
 latitude: 9.5833 , 
 address: "235 Weenie Street",
 price: 3,
 opening_hours: "7:00 am",
 closing_hours: "5:30 pm"
)

weenie_hut1 = File.open(Rails.root.join('app', 'assets', 'images', 'weenieHut.png'))
weenie_hut.photos.attach(io: weenie_hut1, filename: 'weenieHut.png')

weenie_hut2 = File.open(Rails.root.join('app', 'assets', 'images', 'weenieHut2.png'))
weenie_hut.photos.attach(io: weenie_hut2, filename: 'weenieHut2.png')

weenie_hut3 = File.open(Rails.root.join('app', 'assets', 'images', 'weenieHut3.png'))
weenie_hut.photos.attach(io: weenie_hut3, filename: 'weenieHut3.png')

weenie_hut4 = File.open(Rails.root.join('app', 'assets', 'images', 'weenieHut4.png'))
weenie_hut.photos.attach(io: weenie_hut4, filename: 'weenieHut4.png')

salty = Business.create(
 title: "The Salty Spitoon", 
 description: "The Salty Spitoon is a restaurant/bar for tough fish. It is believed to be stricter and tougher than other sailor clubs, and only the toughest of creatures are granted entrance. How tough are ya?", 
 longitude: 170.3768, 
 latitude: 18.5833 , 
 address: "999 No Weenies Lane",
 price: 3,
 opening_hours: "5:00 am",
 closing_hours: "11:59 pm"
)

salty1 = File.open(Rails.root.join('app', 'assets', 'images', 'salty.png'))
salty.photos.attach(io: salty1, filename: 'salty.png')

salty2 = File.open(Rails.root.join('app', 'assets', 'images', 'salty2.png'))
salty.photos.attach(io: salty2, filename: 'salty2.png')

salty3 = File.open(Rails.root.join('app', 'assets', 'images', 'salty3.png'))
salty.photos.attach(io: salty3, filename: 'salty3.png')

salty4 = File.open(Rails.root.join('app', 'assets', 'images', 'salty4.png'))
salty.photos.attach(io: salty4, filename: 'salty4.png')

school = Business.create(
 title: "Mrs. Puff's Boating School", 
 description: "Mrs. Puff's Boating School is a drivers education facility located in Bikini Bottom where Mrs. Puff teaches boat driving and boat safety. When SpongeBob is there trying to get his license, it's not always the case", 
 longitude: 172.3768, 
 latitude: 14.5833 , 
 address: "444 Meep Beep Drive",
 price: 3,
 opening_hours: "9:00 am",
 closing_hours: "6:00 pm"
)

school1 = File.open(Rails.root.join('app', 'assets', 'images', 'school.png'))
school.photos.attach(io: school1, filename: 'school.png')

school2 = File.open(Rails.root.join('app', 'assets', 'images', 'school2.png'))
school.photos.attach(io: school2, filename: 'school2.png')

school3 = File.open(Rails.root.join('app', 'assets', 'images', 'school3.png'))
school.photos.attach(io: school3, filename: 'school3.png')

school4 = File.open(Rails.root.join('app', 'assets', 'images', 'school4.png'))
school.photos.attach(io: school4, filename: 'school4.png')