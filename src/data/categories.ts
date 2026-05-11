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
    words: ["Inception", "Titanic", "Avatar", "The Matrix", "Jaws", "Star Wars", "Pulp Fiction", "Gladiator", "The Lion King", "Interstellar", "The Godfather", "Jurassic Park", "Toy Story", "Spider-Man", "The Avengers"],
  },
  {
    id: "tv-series",
    name: "TV Series",
    icon: "Tv",
    color: "from-blue-500 to-cyan-600",
    words: ["Breaking Bad", "Stranger Things", "Friends", "The Office", "Game of Thrones", "The Crown", "Sherlock", "The Simpsons", "Black Mirror", "The Bear", "Succession", "The Last of Us", "Lost", "Better Call Saul", "House of Cards"],
  },
  {
    id: "cartoons",
    name: "Cartoons & Animation",
    icon: "Ghost",
    color: "from-pink-500 to-rose-600",
    words: ["Mickey Mouse", "Tom and Jerry", "SpongeBob SquarePants", "Scooby-Doo", "Looney Tunes", "Rick and Morty", "The Powerpuff Girls", "Adventure Time", "Futurama", "Bugs Bunny", "Spider-Man", "Batman: TAS", "Bluey", "Avatar: The Last Airbender", "Naruto"],
  },
  {
    id: "music-artists",
    name: "Music Artists",
    icon: "Music",
    color: "from-amber-500 to-orange-600",
    words: ["Michael Jackson", "Beyoncé", "The Beatles", "Taylor Swift", "Drake", "Queen", "Rihanna", "Elvis Presley", "Ed Sheeran", "Adele", "Coldplay", "Eminem", "Billie Eilish", "Justin Bieber", "Madonna"],
  },
  {
    id: "celebrities",
    name: "Celebrities",
    icon: "Star",
    color: "from-yellow-500 to-amber-600",
    words: ["Brad Pitt", "Angelina Jolie", "Leonardo DiCaprio", "Tom Cruise", "Will Smith", "Jennifer Lawrence", "Dwayne Johnson", "Scarlett Johansson", "Robert Downey Jr.", "Meryl Streep", "Zendaya", "Chris Hemsworth", "Emma Watson", "Keanu Reeves", "Margot Robbie"],
  },
  {
    id: "historical-figures",
    name: "Historical Figures",
    icon: "History",
    color: "from-stone-500 to-gray-600",
    words: ["Albert Einstein", "Leonardo da Vinci", "Cleopatra", "Nelson Mandela", "Abraham Lincoln", "Marie Curie", "Mahatma Gandhi", "Winston Churchill", "Napoleon Bonaparte", "Julius Caesar", "Martin Luther King Jr.", "Isaac Newton", "Alexander the Great", "Joan of Arc", "Galileo Galilei"],
  },
  {
    id: "bible-characters",
    name: "Bible Characters",
    icon: "BookOpen",
    color: "from-emerald-500 to-teal-600",
    words: ["Moses", "David", "Noah", "Abraham", "Mary", "Paul", "Peter", "Samson", "Goliath", "Daniel", "Solomon", "Joseph", "Ruth", "Esther", "John the Baptist"],
  },
  {
    id: "footballers",
    name: "Footballers",
    icon: "Trophy",
    color: "from-green-500 to-emerald-600",
    words: ["Lionel Messi", "Cristiano Ronaldo", "Pele", "Diego Maradona", "Kylian Mbappe", "Neymar Jr", "Erling Haaland", "Zinedine Zidane", "Ronaldinho", "David Beckham", "Thierry Henry", "Mohamed Salah", "Harry Kane", "Bukayo Saka", "Vinicius Jr"],
  },
  {
    id: "sports-games",
    name: "Sports & Games",
    icon: "Dribbble",
    color: "from-orange-500 to-red-600",
    words: ["Basketball", "Tennis", "Cricket", "Golf", "Chess", "Monopoly", "Swimming", "Volleyball", "Boxing", "Rugby", "Baseball", "Formula 1", "Badminton", "Table Tennis", "Scrabble"],
  },
  {
    id: "chemical-elements",
    name: "Chemical Elements",
    icon: "Beaker",
    color: "from-indigo-500 to-blue-600",
    words: ["Oxygen", "Gold", "Iron", "Carbon", "Helium", "Silver", "Nitrogen", "Calcium", "Uranium", "Sodium", "Hydrogen", "Copper", "Mercury", "Potassium", "Neon"],
  },
  {
    id: "companies",
    name: "Companies",
    icon: "Building2",
    color: "from-slate-500 to-zinc-600",
    words: ["Apple", "Google", "Microsoft", "Amazon", "Tesla", "Coca-Cola", "Nike", "Disney", "Netflix", "Samsung", "Toyota", "Meta", "Starbucks", "McDonald's", "Nintendo"],
  },
  {
    id: "countries",
    name: "Countries",
    icon: "Globe",
    color: "from-sky-500 to-blue-600",
    words: ["Nigeria", "USA", "United Kingdom", "Japan", "Brazil", "France", "Canada", "Australia", "Germany", "India", "South Africa", "Italy", "Mexico", "China", "Spain"],
  },
  {
    id: "places-landmarks",
    name: "Places & Landmarks",
    icon: "MapPin",
    color: "from-rose-500 to-pink-600",
    words: ["Eiffel Tower", "Statue of Liberty", "Great Wall of China", "Taj Mahal", "Pyramids of Giza", "Colosseum", "Mount Everest", "Grand Canyon", "Big Ben", "Machu Picchu", "Sydney Opera House", "Golden Gate Bridge", "Burj Khalifa", "Mount Fuji", "Louvre Museum"],
  },
  {
    id: "dc-marvel",
    name: "DC & Marvel",
    icon: "Zap",
    color: "from-red-600 to-blue-600",
    words: ["Spider-Man", "Batman", "Iron Man", "Superman", "Wonder Woman", "The Flash", "Hulk", "Thor", "Black Widow", "Captain America", "Joker", "Thanos", "Aquaman", "Black Panther", "Doctor Strange"],
  },
  {
    id: "animals",
    name: "Animals",
    icon: "Dog",
    color: "from-lime-500 to-green-600",
    words: ["Lion", "Elephant", "Giraffe", "Tiger", "Penguin", "Kangaroo", "Dolphin", "Panda", "Zebra", "Eagle", "Wolf", "Gorilla", "Shark", "Owl", "Octopus"],
  },
  {
    id: "foods",
    name: "Foods",
    icon: "Utensils",
    color: "from-orange-400 to-red-500",
    words: ["Pizza", "Sushi", "Burger", "Pasta", "Taco", "Ice Cream", "Steak", "Pancake", "Salad", "Dumpling", "Curry", "Donut", "Hot Dog", "Ramen", "Lasagna"],
  },
  {
    id: "fruits",
    name: "Fruits",
    icon: "Apple",
    color: "from-red-400 to-orange-500",
    words: ["Mango", "Banana", "Strawberry", "Watermelon", "Apple", "Pineapple", "Grapes", "Orange", "Kiwi", "Blueberry", "Peach", "Cherry", "Avocado", "Lemon", "Pomegranate"],
  },
  {
    id: "books",
    name: "Books",
    icon: "Library",
    color: "from-brown-500 to-orange-700",
    words: ["Harry Potter", "Lord of the Rings", "The Hobbit", "1984", "To Kill a Mockingbird", "The Great Gatsby", "Pride and Prejudice", "Moby Dick", "The Alchemist", "Dune", "Frankenstein", "Dracula", "Sherlock Holmes", "The Catcher in the Rye", "Animal Farm"],
  },
];
