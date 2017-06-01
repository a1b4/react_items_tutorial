Item.destroy_all
10.times { Item.create!(name: "Item", description: "I am a description.") }
