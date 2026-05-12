export interface Category {
  id: string;
  name: string;
  icon: string;
  color: string;
  words: string[];
}

export const categories: Category[] = [
  {
    id: "movies",
    name: "Movies",
    icon: "Film",
    color: "from-purple-500 to-indigo-600",
    words: ["Inception", "Titanic", "Avatar", "The Matrix", "Jaws", "Star Wars", "Pulp Fiction", "Gladiator", "The Lion King", "Interstellar", "The Godfather", "Jurassic Park", "Toy Story", "Spider-Man", "The Avengers", "Fight Club", "Forrest Gump", "The Dark Knight", "Goodfellas", "Schindlers List", "The Lord of the Rings", "The Silence of the Lambs", "Se7en", "City of God", "Spirited Away", "Saving Private Ryan", "The Green Mile", "Parasite", "Leon: The Professional", "The Pianist", "Terminator 2", "Back to the Future", "Psycho", "Gladiator", "Memento", "Apocalypse Now", "Alien", "The Shining", "Wall-E", "Coco", "Up", "Inside Out", "The Incredibles", "Finding Nemo", "Monsters, Inc."],
  },
  {
    id: "tv-series",
    name: "TV Series",
    icon: "Tv",
    color: "from-blue-500 to-cyan-600",
    words: ["Breaking Bad", "Stranger Things", "Friends", "The Office", "Game of Thrones", "The Crown", "Sherlock", "The Simpsons", "Black Mirror", "The Bear", "Succession", "The Last of Us", "Lost", "Better Call Saul", "House of Cards", "The Wire", "The Sopranos", "Mad Men", "Fargo", "True Detective", "Peaky Blinders", "Narcos", "The Boys", "Dark", "Mindhunter", "Chernobyl", "Band of Brothers", "Severance", "Squid Game", "Money Heist", "Ted Lasso", "Ozark", "Westworld", "The Mandalorian", "Loki", "WandaVision", "The Witcher", "The Queens Gambit", "Fleabag", "Arrested Development", "Parks and Recreation", "Brooklyn Nine-Nine", "Seinfeld", "Curb Your Enthusiasm", "Its Always Sunny in Philadelphia"],
  },
  {
    id: "cartoons",
    name: "Cartoons & Animation",
    icon: "Ghost",
    color: "from-pink-500 to-rose-600",
    words: ["Mickey Mouse", "Tom and Jerry", "SpongeBob SquarePants", "Scooby-Doo", "Looney Tunes", "Rick and Morty", "The Powerpuff Girls", "Adventure Time", "Futurama", "Bugs Bunny", "Spider-Man", "Batman: TAS", "Bluey", "Avatar: The Last Airbender", "Naruto", "Family Guy", "South Park", "Bobs Burgers", "BoJack Horseman", "Archer", "The Flintstones", "The Jetsons", "Dexters Laboratory", "Johnny Bravo", "Courage the Cowardly Dog", "Ed, Edd n Eddy", "Teen Titans", "Ben 10", "Phineas and Ferb", "Gravity Falls", "Steven Universe", "The Regular Show", "Animaniacs", "Pinky and the Brain", "Rugrats", "Hey Arnold!", "Invader Zim", "The Fairly OddParents", "Danny Phantom", "Kim Possible", "Total Drama Island", "Samurai Jack", "Justice League", "X-Men: TAS", "Gargoyles"],
  },
  {
    id: "music-artists",
    name: "Music Artists",
    icon: "Music",
    color: "from-amber-500 to-orange-600",
    words: ["Michael Jackson", "Beyoncé", "The Beatles", "Taylor Swift", "Drake", "Queen", "Rihanna", "Elvis Presley", "Ed Sheeran", "Adele", "Coldplay", "Eminem", "Billie Eilish", "Justin Bieber", "Madonna", "Lady Gaga", "Katy Perry", "Ariana Grande", "Bruno Mars", "The Weeknd", "Post Malone", "Dua Lipa", "Harry Styles", "Justin Timberlake", "Shawn Mendes", "Selena Gomez", "Miley Cyrus", "Demi Lovato", "Britney Spears", "Christina Aguilera", "Whitney Houston", "Mariah Carey", "Celine Dion", "Frank Sinatra", "Bob Marley", "Elton John", "David Bowie", "Prince", "Stevie Wonder", "Aretha Franklin", "Bruce Springsteen", "Bob Dylan", "Paul McCartney", "Mick Jagger", "Freddie Mercury"],
  },
  {
    id: "celebrities",
    name: "Celebrities",
    icon: "Star",
    color: "from-yellow-500 to-amber-600",
    words: ["Brad Pitt", "Angelina Jolie", "Leonardo DiCaprio", "Tom Cruise", "Will Smith", "Jennifer Lawrence", "Dwayne Johnson", "Scarlett Johansson", "Robert Downey Jr.", "Meryl Streep", "Zendaya", "Chris Hemsworth", "Emma Watson", "Keanu Reeves", "Margot Robbie", "Johnny Depp", "Tom Hanks", "Harrison Ford", "Morgan Freeman", "Samuel L. Jackson", "Denzel Washington", "Clint Eastwood", "Al Pacino", "Robert De Niro", "Jack Nicholson", "Marlon Brando", "James Dean", "Marilyn Monroe", "Audrey Hepburn", "Elizabeth Taylor", "Grace Kelly", "Humphrey Bogart", "Cary Grant", "Clark Gable", "Charlton Heston", "John Wayne", "Gary Cooper", "James Stewart", "Henry Fonda", "Spencer Tracy", "Kirk Douglas", "Burt Lancaster", "William Holden", "Gregory Peck", "Paul Newman"],
  },
  {
    id: "historical-figures",
    name: "Historical Figures",
    icon: "History",
    color: "from-stone-500 to-gray-600",
    words: ["Albert Einstein", "Leonardo da Vinci", "Cleopatra", "Nelson Mandela", "Abraham Lincoln", "Marie Curie", "Mahatma Gandhi", "Winston Churchill", "Napoleon Bonaparte", "Julius Caesar", "Martin Luther King Jr.", "Isaac Newton", "Alexander the Great", "Joan of Arc", "Galileo Galilei", "George Washington", "Thomas Jefferson", "Alexander Hamilton", "Benjamin Franklin", "John Adams", "James Madison", "Martin Luther", "John Calvin", "Thomas Aquinas", "Augustine of Hippo", "Constantine the Great", "Charlemagne", "William the Conqueror", "Richard the Lionheart", "Saladin", "Genghis Khan", "Kublai Khan", "Marco Polo", "Christopher Columbus", "Ferdinand Magellan", "Vasco da Gama", "James Cook", "Charles Darwin", "Isaac Newton", "Galileo Galilei", "Nicolaus Copernicus", "Johannes Kepler", "Rene Descartes", "John Locke", "Jean-Jacques Rousseau"],
  },
  {
    id: "bible-characters",
    name: "Bible Characters",
    icon: "BookOpen",
    color: "from-emerald-500 to-teal-600",
    words: ["Moses", "David", "Noah", "Abraham", "Mary", "Paul", "Peter", "Samson", "Goliath", "Daniel", "Solomon", "Joseph", "Ruth", "Esther", "John the Baptist", "Adam", "Eve", "Cain", "Abel", "Seth", "Enoch", "Methuselah", "Isaac", "Jacob", "Esau", "Reuben", "Simeon", "Levi", "Judah", "Dan", "Naphtali", "Gad", "Asher", "Issachar", "Zebulun", "Joseph", "Benjamin", "Aaron", "Miriam", "Joshua", "Caleb", "Gideon", "Samuel", "Saul", "Jonathan"],
  },
  {
    id: "footballers",
    name: "Footballers",
    icon: "Trophy",
    color: "from-green-500 to-emerald-600",
    words: ["Kylian Mbappe", "Erling Haaland", "Jude Bellingham", "Vinicius Jr", "Lamine Yamal", "Phil Foden", "Bukayo Saka", "Pedri", "Gavi", "Jamal Musiala", "Florian Wirtz", "Rodrygo", "Eduardo Camavinga", "Aurelien Tchouameni", "Cole Palmer", "Declan Rice", "Martin Odegaard", "Enzo Fernandez", "Julian Alvarez", "Alejandro Garnacho", "Rafael Leao", "Khvicha Kvaratskhelia", "Victor Osimhen", "Achraf Hakimi", "Alphonso Davies", "Trent Alexander-Arnold", "Reece James", "William Saliba", "Ronald Araujo", "Ruben Dias", "Josko Gvardiol", "Xavi Simons", "Warren Zaire-Emery", "Endrick", "Arda Guler", "Jeremy Doku", "Kobbie Mainoo", "Rico Lewis", "Joao Felix", "Darwin Nunez", "Marcus Rashford", "Bruno Fernandes", "Bernardo Silva", "Kevin De Bruyne", "Lionel Messi", "Cristiano Ronaldo", "Neymar Jr", "Mohamed Salah", "Son Heung-min", "Virgil van Dijk"],
  },
  {
    id: "sports-games",
    name: "Sports & Games",
    icon: "Dribbble",
    color: "from-orange-500 to-red-600",
    words: ["Basketball", "Tennis", "Cricket", "Golf", "Chess", "Monopoly", "Swimming", "Volleyball", "Boxing", "Rugby", "Baseball", "Formula 1", "Badminton", "Table Tennis", "Scrabble", "Soccer", "American Football", "Hockey", "Gymnastics", "Track and Field", "Cycling", "Snowboarding", "Skiing", "Surfing", "Skateboarding", "Wrestling", "Martial Arts", "Weightlifting", "Archery", "Fencing", "Rowing", "Sailing", "Equestrian", "Triathlon", "Pentathlon", "Decathlon", "Billiards", "Darts", "Bowling", "Poker", "Blackjack", "Roulette", "Craps", "Baccarat", "Slot Machines"],
  },
  {
    id: "chemical-elements",
    name: "Chemical Elements",
    icon: "Beaker",
    color: "from-indigo-500 to-blue-600",
    words: ["Oxygen", "Gold", "Iron", "Carbon", "Helium", "Silver", "Nitrogen", "Calcium", "Uranium", "Sodium", "Hydrogen", "Copper", "Mercury", "Potassium", "Neon", "Lithium", "Beryllium", "Boron", "Fluorine", "Magnesium", "Aluminum", "Silicon", "Phosphorus", "Sulfur", "Chlorine", "Argon", "Scandium", "Titanium", "Vanadium", "Chromium", "Manganese", "Cobalt", "Nickel", "Zinc", "Gallium", "Germanium", "Arsenic", "Selenium", "Bromine", "Krypton", "Rubidium", "Strontium", "Yttrium", "Zirconium", "Niobium"],
  },
  {
    id: "companies",
    name: "Companies",
    icon: "Building2",
    color: "from-slate-500 to-zinc-600",
    words: ["Apple", "Google", "Microsoft", "Amazon", "Tesla", "Coca-Cola", "Nike", "Disney", "Netflix", "Samsung", "Toyota", "Meta", "Starbucks", "McDonald's", "Nintendo", "Facebook", "Instagram", "WhatsApp", "Twitter", "LinkedIn", "Snapchat", "TikTok", "Pinterest", "Reddit", "Tumblr", "YouTube", "Twitch", "Spotify", "Apple Music", "SoundCloud", "Pandora", "Tidal", "Amazon Music", "Google Play Music", "Deezer", "Uber", "Lyft", "Airbnb", "Booking.com", "Expedia", "TripAdvisor", "Yelp", "Zillow", "Trulia", "Redfin"],
  },
  {
    id: "countries",
    name: "Countries",
    icon: "Globe",
    color: "from-sky-500 to-blue-600",
    words: ["Nigeria", "USA", "United Kingdom", "Japan", "Brazil", "France", "Canada", "Australia", "Germany", "India", "South Africa", "Italy", "Mexico", "China", "Spain", "Russia", "Canada", "China", "United States", "Brazil", "Australia", "India", "Argentina", "Kazakhstan", "Algeria", "Democratic Republic of the Congo", "Greenland", "Saudi Arabia", "Mexico", "Indonesia", "Sudan", "Libya", "Iran", "Mongolia", "Peru", "Chad", "Niger", "Angola", "Mali", "South Africa", "Colombia", "Ethiopia", "Bolivia", "Mauritania", "Egypt"],
  },
  {
    id: "places-landmarks",
    name: "Places & Landmarks",
    icon: "MapPin",
    color: "from-rose-500 to-pink-600",
    words: ["Eiffel Tower", "Statue of Liberty", "Great Wall of China", "Taj Mahal", "Pyramids of Giza", "Colosseum", "Mount Everest", "Grand Canyon", "Big Ben", "Machu Picchu", "Sydney Opera House", "Golden Gate Bridge", "Burj Khalifa", "Mount Fuji", "Louvre Museum", "Stonehenge", "Acropolis of Athens", "Petra", "Chichen Itza", "Christ the Redeemer", "Taj Mahal", "Great Wall of China", "Machu Picchu", "Colosseum", "Pyramids of Giza", "Eiffel Tower", "Statue of Liberty", "Sydney Opera House", "Golden Gate Bridge", "Burj Khalifa", "Mount Everest", "Grand Canyon", "Victoria Falls", "Niagara Falls", "Angel Falls", "Mount Fuji", "Mount Kilimanjaro", "Mount Vesuvius", "Mount Etna", "Mount St. Helens", "Yellowstone National Park", "Yosemite National Park", "Grand Teton National Park", "Zion National Park", "Glacier National Park"],
  },
  {
    id: "dc-marvel",
    name: "DC & Marvel",
    icon: "Zap",
    color: "from-red-600 to-blue-600",
    words: ["Spider-Man", "Batman", "Iron Man", "Superman", "Wonder Woman", "The Flash", "Hulk", "Thor", "Black Widow", "Captain America", "Joker", "Thanos", "Aquaman", "Black Panther", "Doctor Strange", "Wolverine", "Cyclops", "Jean Grey", "Storm", "Rogue", "Gambit", "Beast", "Nightcrawler", "Colossus", "Kitty Pryde", "Iceman", "Angel", "Professor X", "Magneto", "Mystique", "Sabretooth", "Juggernaut", "Toad", "Blob", "Pyro", "Avalanche", "Destiny", "Emma Frost", "Sebastian Shaw", "Donald Pierce", "Harry Leland", "Jason Wyngarde", "Mastermind", "Silver Samurai", "Lady Deathstrike"],
  },
  {
    id: "animals",
    name: "Animals",
    icon: "Dog",
    color: "from-lime-500 to-green-600",
    words: ["Lion", "Elephant", "Giraffe", "Tiger", "Penguin", "Kangaroo", "Dolphin", "Panda", "Zebra", "Eagle", "Wolf", "Gorilla", "Shark", "Owl", "Octopus", "Cat", "Dog", "Mouse", "Rat", "Hamster", "Guinea Pig", "Rabbit", "Hare", "Squirrel", "Chipmunk", "Beaver", "Porcupine", "Raccoon", "Skunk", "Opossum", "Badger", "Weasel", "Ferret", "Mink", "Otter", "Seal", "Walrus", "Manatee", "Dugong", "Whale", "Dolphin", "Porpoise", "Shark", "Ray", "Skate"],
  },
  {
    id: "foods",
    name: "Foods",
    icon: "Utensils",
    color: "from-orange-400 to-red-500",
    words: ["Pizza", "Sushi", "Burger", "Pasta", "Taco", "Ice Cream", "Steak", "Pancake", "Salad", "Dumpling", "Curry", "Donut", "Hot Dog", "Ramen", "Lasagna", "Hamburger", "Cheeseburger", "Hot Dog", "French Fries", "Onion Rings", "Chicken Nuggets", "Chicken Wings", "Fried Chicken", "Roast Chicken", "Grilled Chicken", "Steak", "Pork Chop", "Lamb Chop", "Veal Chop", "Venison", "Rabbit", "Duck", "Goose", "Turkey", "Quail", "Pheasant", "Partridge", "Grouse", "Woodcock", "Snipe", "Pigeon", "Dove", "Swan", "Ostrich", "Emu"],
  },
  {
    id: "fruits",
    name: "Fruits",
    icon: "Apple",
    color: "from-red-400 to-orange-500",
    words: ["Mango", "Banana", "Strawberry", "Watermelon", "Apple", "Pineapple", "Grapes", "Orange", "Kiwi", "Blueberry", "Peach", "Cherry", "Avocado", "Lemon", "Pomegranate", "Apple", "Banana", "Orange", "Grape", "Strawberry", "Blueberry", "Raspberry", "Blackberry", "Cranberry", "Cherry", "Peach", "Plum", "Apricot", "Nectarine", "Pear", "Mango", "Pineapple", "Papaya", "Guava", "Kiwi", "Melon", "Watermelon", "Cantaloupe", "Honeydew", "Fig", "Date", "Pomegranate", "Coconut", "Lemon", "Lime"],
  },
  {
    id: "books",
    name: "Books",
    icon: "Library",
    color: "from-brown-500 to-orange-700",
    words: ["Harry Potter", "Lord of the Rings", "The Hobbit", "1984", "To Kill a Mockingbird", "The Great Gatsby", "Pride and Prejudice", "Moby Dick", "The Alchemist", "Dune", "Frankenstein", "Dracula", "Sherlock Holmes", "The Catcher in the Rye", "Animal Farm", "The Catcher in the Rye", "To Kill a Mockingbird", "1984", "Pride and Prejudice", "The Great Gatsby", "Moby-Dick", "The Lord of the Rings", "The Hobbit", "Harry Potter and the Sorcerer's Stone", "The Chronicles of Narnia", "Alice's Adventures in Wonderland", "The Wizard of Oz", "Peter Pan", "Winnie-the-Pooh", "The Wind in the Willows", "Charlotte's Web", "Stuart Little", "The Tale of Peter Rabbit", "The Very Hungry Caterpillar", "Where the Wild Things Are", "Goodnight Moon", "The Cat in the Hat", "Green Eggs and Ham", "One Fish Two Fish Red Fish Blue Fish", "The Lorax", "Horton Hears a Who!", "How the Grinch Stole Christmas!", "Oh, the Places You'll Go!", "Fox in Socks", "Hop on Pop"],
  },
];
