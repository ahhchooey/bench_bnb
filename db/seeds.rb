# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Bench.destroy_all
Bench.create({lat: 37.798583, lng: -122.401064, occupancy: 1, description: "The slowest bench."})
Bench.create({lat: 37.799321, lng: -122.397566, occupancy: 5, description: "The oceanside bench."})
Bench.create({lat: 37.796955, lng: -122.399520, occupancy: 1, description: "The grocery store bench."})
Bench.create({lat: 37.797620, lng: -122.401221, occupancy: 3, description: "Yo Yo's Bench."})
Bench.create({lat: 35.798583, lng: -129.401064, occupancy: 3, description: "The slowest bench."})
Bench.create({lat: 36.799321, lng: -124.397566, occupancy: 2, description: "The oceanside bench."})
Bench.create({lat: 33.796955, lng: -121.399520, occupancy: 1, description: "The grocery store bench."})
Bench.create({lat: 38.797620, lng: -125.401221, occupancy: 1, description: "Yo Yo's Bench."})
