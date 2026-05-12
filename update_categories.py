import re

extra_words = {
    "movies": ["Fight Club", "Forrest Gump", "The Dark Knight", "Goodfellas", "Schindlers List", "The Lord of the Rings", "The Silence of the Lambs", "Se7en", "City of God", "Spirited Away", "Saving Private Ryan", "The Green Mile", "Parasite", "Leon: The Professional", "The Pianist", "Terminator 2", "Back to the Future", "Psycho", "Gladiator", "Memento", "Apocalypse Now", "Alien", "The Shining", "Wall-E", "Coco", "Up", "Inside Out", "The Incredibles", "Finding Nemo", "Monsters, Inc."],
    "tv-series": ["The Wire", "The Sopranos", "Mad Men", "Fargo", "True Detective", "Peaky Blinders", "Narcos", "The Boys", "Dark", "Mindhunter", "Chernobyl", "Band of Brothers", "Severance", "Squid Game", "Money Heist", "Ted Lasso", "Ozark", "Westworld", "The Mandalorian", "Loki", "WandaVision", "The Witcher", "The Queens Gambit", "Fleabag", "Arrested Development", "Parks and Recreation", "Brooklyn Nine-Nine", "Seinfeld", "Curb Your Enthusiasm", "Its Always Sunny in Philadelphia"],
    "cartoons": ["Family Guy", "South Park", "Bobs Burgers", "BoJack Horseman", "Archer", "The Flintstones", "The Jetsons", "Dexters Laboratory", "Johnny Bravo", "Courage the Cowardly Dog", "Ed, Edd n Eddy", "Teen Titans", "Ben 10", "Phineas and Ferb", "Gravity Falls", "Steven Universe", "The Regular Show", "Animaniacs", "Pinky and the Brain", "Rugrats", "Hey Arnold!", "Invader Zim", "The Fairly OddParents", "Danny Phantom", "Kim Possible", "Total Drama Island", "Samurai Jack", "Justice League", "X-Men: TAS", "Gargoyles"],
    "music-artists": ["Lady Gaga", "Katy Perry", "Ariana Grande", "Bruno Mars", "The Weeknd", "Post Malone", "Dua Lipa", "Harry Styles", "Justin Timberlake", "Shawn Mendes", "Selena Gomez", "Miley Cyrus", "Demi Lovato", "Britney Spears", "Christina Aguilera", "Whitney Houston", "Mariah Carey", "Celine Dion", "Frank Sinatra", "Bob Marley", "Elton John", "David Bowie", "Prince", "Stevie Wonder", "Aretha Franklin", "Bruce Springsteen", "Bob Dylan", "Paul McCartney", "Mick Jagger", "Freddie Mercury"],
    "celebrities": ["Johnny Depp", "Tom Hanks", "Harrison Ford", "Morgan Freeman", "Samuel L. Jackson", "Denzel Washington", "Clint Eastwood", "Al Pacino", "Robert De Niro", "Jack Nicholson", "Marlon Brando", "James Dean", "Marilyn Monroe", "Audrey Hepburn", "Elizabeth Taylor", "Grace Kelly", "Humphrey Bogart", "Cary Grant", "Clark Gable", "Charlton Heston", "John Wayne", "Gary Cooper", "James Stewart", "Henry Fonda", "Spencer Tracy", "Kirk Douglas", "Burt Lancaster", "William Holden", "Gregory Peck", "Paul Newman"],
    "historical-figures": ["George Washington", "Thomas Jefferson", "Alexander Hamilton", "Benjamin Franklin", "John Adams", "James Madison", "Martin Luther", "John Calvin", "Thomas Aquinas", "Augustine of Hippo", "Constantine the Great", "Charlemagne", "William the Conqueror", "Richard the Lionheart", "Saladin", "Genghis Khan", "Kublai Khan", "Marco Polo", "Christopher Columbus", "Ferdinand Magellan", "Vasco da Gama", "James Cook", "Charles Darwin", "Isaac Newton", "Galileo Galilei", "Nicolaus Copernicus", "Johannes Kepler", "Rene Descartes", "John Locke", "Jean-Jacques Rousseau"],
    "bible-characters": ["Adam", "Eve", "Cain", "Abel", "Seth", "Enoch", "Methuselah", "Isaac", "Jacob", "Esau", "Reuben", "Simeon", "Levi", "Judah", "Dan", "Naphtali", "Gad", "Asher", "Issachar", "Zebulun", "Joseph", "Benjamin", "Aaron", "Miriam", "Joshua", "Caleb", "Gideon", "Samuel", "Saul", "Jonathan"],
    "footballers": ["Andres Iniesta", "Xavi Hernandez", "Sergio Busquets", "Carles Puyol", "Gerard Pique", "Dani Alves", "Jordi Alba", "Victor Valdes", "Iker Casillas", "Sergio Ramos", "Pepe", "Marcelo", "Luka Modric", "Toni Kroos", "Casemiro", "Karim Benzema", "Gareth Bale", "Wayne Rooney", "Ryan Giggs", "Paul Scholes", "Roy Keane", "Rio Ferdinand", "Nemanja Vidic", "Gary Neville", "Patrice Evra", "Edwin van der Sar", "Steven Gerrard", "Frank Lampard", "John Terry", "Didier Drogba"],
    "sports-games": ["Soccer", "American Football", "Hockey", "Gymnastics", "Track and Field", "Cycling", "Snowboarding", "Skiing", "Surfing", "Skateboarding", "Wrestling", "Martial Arts", "Weightlifting", "Archery", "Fencing", "Rowing", "Sailing", "Equestrian", "Triathlon", "Pentathlon", "Decathlon", "Billiards", "Darts", "Bowling", "Poker", "Blackjack", "Roulette", "Craps", "Baccarat", "Slot Machines"],
    "chemical-elements": ["Lithium", "Beryllium", "Boron", "Fluorine", "Magnesium", "Aluminum", "Silicon", "Phosphorus", "Sulfur", "Chlorine", "Argon", "Scandium", "Titanium", "Vanadium", "Chromium", "Manganese", "Cobalt", "Nickel", "Zinc", "Gallium", "Germanium", "Arsenic", "Selenium", "Bromine", "Krypton", "Rubidium", "Strontium", "Yttrium", "Zirconium", "Niobium"],
    "companies": ["Facebook", "Instagram", "WhatsApp", "Twitter", "LinkedIn", "Snapchat", "TikTok", "Pinterest", "Reddit", "Tumblr", "YouTube", "Twitch", "Spotify", "Apple Music", "SoundCloud", "Pandora", "Tidal", "Amazon Music", "Google Play Music", "Deezer", "Uber", "Lyft", "Airbnb", "Booking.com", "Expedia", "TripAdvisor", "Yelp", "Zillow", "Trulia", "Redfin"],
    "countries": ["Russia", "Canada", "China", "United States", "Brazil", "Australia", "India", "Argentina", "Kazakhstan", "Algeria", "Democratic Republic of the Congo", "Greenland", "Saudi Arabia", "Mexico", "Indonesia", "Sudan", "Libya", "Iran", "Mongolia", "Peru", "Chad", "Niger", "Angola", "Mali", "South Africa", "Colombia", "Ethiopia", "Bolivia", "Mauritania", "Egypt"],
    "places-landmarks": ["Stonehenge", "Acropolis of Athens", "Petra", "Chichen Itza", "Christ the Redeemer", "Taj Mahal", "Great Wall of China", "Machu Picchu", "Colosseum", "Pyramids of Giza", "Eiffel Tower", "Statue of Liberty", "Sydney Opera House", "Golden Gate Bridge", "Burj Khalifa", "Mount Everest", "Grand Canyon", "Victoria Falls", "Niagara Falls", "Angel Falls", "Mount Fuji", "Mount Kilimanjaro", "Mount Vesuvius", "Mount Etna", "Mount St. Helens", "Yellowstone National Park", "Yosemite National Park", "Grand Teton National Park", "Zion National Park", "Glacier National Park"],
    "dc-marvel": ["Wolverine", "Cyclops", "Jean Grey", "Storm", "Rogue", "Gambit", "Beast", "Nightcrawler", "Colossus", "Kitty Pryde", "Iceman", "Angel", "Professor X", "Magneto", "Mystique", "Sabretooth", "Juggernaut", "Toad", "Blob", "Pyro", "Avalanche", "Destiny", "Emma Frost", "Sebastian Shaw", "Donald Pierce", "Harry Leland", "Jason Wyngarde", "Mastermind", "Silver Samurai", "Lady Deathstrike"],
    "animals": ["Cat", "Dog", "Mouse", "Rat", "Hamster", "Guinea Pig", "Rabbit", "Hare", "Squirrel", "Chipmunk", "Beaver", "Porcupine", "Raccoon", "Skunk", "Opossum", "Badger", "Weasel", "Ferret", "Mink", "Otter", "Seal", "Walrus", "Manatee", "Dugong", "Whale", "Dolphin", "Porpoise", "Shark", "Ray", "Skate"],
    "foods": ["Hamburger", "Cheeseburger", "Hot Dog", "French Fries", "Onion Rings", "Chicken Nuggets", "Chicken Wings", "Fried Chicken", "Roast Chicken", "Grilled Chicken", "Steak", "Pork Chop", "Lamb Chop", "Veal Chop", "Venison", "Rabbit", "Duck", "Goose", "Turkey", "Quail", "Pheasant", "Partridge", "Grouse", "Woodcock", "Snipe", "Pigeon", "Dove", "Swan", "Ostrich", "Emu"],
    "fruits": ["Apple", "Banana", "Orange", "Grape", "Strawberry", "Blueberry", "Raspberry", "Blackberry", "Cranberry", "Cherry", "Peach", "Plum", "Apricot", "Nectarine", "Pear", "Mango", "Pineapple", "Papaya", "Guava", "Kiwi", "Melon", "Watermelon", "Cantaloupe", "Honeydew", "Fig", "Date", "Pomegranate", "Coconut", "Lemon", "Lime"],
    "books": ["The Catcher in the Rye", "To Kill a Mockingbird", "1984", "Pride and Prejudice", "The Great Gatsby", "Moby-Dick", "The Lord of the Rings", "The Hobbit", "Harry Potter and the Sorcerer's Stone", "The Chronicles of Narnia", "Alice's Adventures in Wonderland", "The Wizard of Oz", "Peter Pan", "Winnie-the-Pooh", "The Wind in the Willows", "Charlotte's Web", "Stuart Little", "The Tale of Peter Rabbit", "The Very Hungry Caterpillar", "Where the Wild Things Are", "Goodnight Moon", "The Cat in the Hat", "Green Eggs and Ham", "One Fish Two Fish Red Fish Blue Fish", "The Lorax", "Horton Hears a Who!", "How the Grinch Stole Christmas!", "Oh, the Places You'll Go!", "Fox in Socks", "Hop on Pop"]
}

with open("src/data/categories.ts", "r") as f:
    content = f.read()

import json

for cat_id, new_words in extra_words.items():
    # Find the category block
    pattern = r'(id:\s*"' + cat_id + r'".*?words:\s*\[)(.*?)(\])'
    def replacer(match):
        existing_words_str = match.group(2)
        # simplistic splitting, assuming no complex nested structures
        # We can just append to the existing string
        new_words_str = ", ".join(f'"{w}"' for w in new_words)
        if existing_words_str.strip():
            combined = existing_words_str + ", " + new_words_str
        else:
            combined = new_words_str
        return match.group(1) + combined + match.group(3)
    
    content = re.sub(pattern, replacer, content, flags=re.DOTALL)

with open("src/data/categories.ts", "w") as f:
    f.write(content)
