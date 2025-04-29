import "dotenv/config.js"
import "../../configBD/connectDb.js"
import Itinerary from "../Itinerary.js"


const ItineraryData = [
  // Paris - 3 itinerarios
  {
    price: 150,
    duration: 2,
    likes: 24,
    hashtags: ["adventure", "history"],
    comments: ["An unforgettable experience!", "Highly recommended!"],
    city: "67f6f04a90b994051d294a43",
    title: "Visit the Eiffel Tower",
    user: "681001b9d4ae4179d16c8a2e"
  },
  {
    price: 120,
    duration: 2,
    likes: 18,
    hashtags: ["culture", "photography"],
    comments: ["Amazing art scene!", "Lovely vibe!"],
    city: "67f6f04a90b994051d294a43",
    title: "Explore Montmartre",
    user: "681001b9d4ae4179d16c8a2e"
  },
  {
    price: 200,
    duration: 3,
    likes: 30,
    hashtags: ["romantic", "sightseeing"],
    comments: ["A dream come true!", "Best way to see Paris!"],
    city: "67f6f04a90b994051d294a43",
    title: "Cruise the Seine",
    user: "681001b9d4ae4179d16c8a2e"
  },
  // Tokyo - 2 itinerarios
  {
    price: 100,
    duration: 1,
    likes: 20,
    hashtags: ["urban", "culture"],
    comments: ["Really vibrant!", "Must see!"],
    city: "67f6f04a90b994051d294a44",
    title: "Visit Shibuya Crossing",
    user: "681001b9d4ae4179d16c8a2e"
  },
  {
    price: 130,
    duration: 2,
    likes: 35,
    hashtags: ["nature", "photography"],
    comments: ["Beautiful views!", "So serene!"],
    city: "67f6f04a90b994051d294a44",
    title: "Experience Cherry Blossoms",
    user: "681001b9d4ae4179d16c8a2e"
  },
  // New York - 4 itinerarios
  {
    price: 180,
    duration: 2,
    likes: 40,
    hashtags: ["history", "sightseeing"],
    comments: ["Iconic landmark!", "A must visit!"],
    city: "67f6f04a90b994051d294a45",
    title: "Visit the Statue of Liberty",
    user: "681001b9d4ae4179d16c8a2e"
  },
  {
    price: 60,
    duration: 1,
    likes: 22,
    hashtags: ["nature", "relax"],
    comments: ["Very relaxing!", "Loved the greenery!"],
    city: "67f6f04a90b994051d294a45",
    title: "Stroll in Central Park",
    user: "681001b9d4ae4179d16c8a2e"
  },
  {
    price: 80,
    duration: 1,
    likes: 28,
    hashtags: ["urban", "party"],
    comments: ["So lively!", "Non-stop energy!"],
    city: "67f6f04a90b994051d294a45",
    title: "Explore Times Square",
    user: "681001b9d4ae4179d16c8a2e"
  },
  {
    price: 150,
    duration: 2,
    likes: 45,
    hashtags: ["culture", "theater"],
    comments: ["Amazing performances!", "A real treat!"],
    city: "67f6f04a90b994051d294a45",
    title: "Discover Broadway",
    user: "681001b9d4ae4179d16c8a2e"
  },
  // Rio de Janeiro - 2 itinerarios
  {
    price: 170,
    duration: 2,
    likes: 33,
    hashtags: ["history", "sightseeing"],
    comments: ["Breathtaking view!", "A symbol of love!"],
    city: "67f6f04a90b994051d294a46",
    title: "Visit Christ the Redeemer",
    user: "681001b9d4ae4179d16c8a2e"
  },
  {
    price: 90,
    duration: 1,
    likes: 25,
    hashtags: ["beach", "relax"],
    comments: ["Sunny and fun!", "Loved the vibe!"],
    city: "67f6f04a90b994051d294a46",
    title: "Enjoy Copacabana Beach",
    user: "681001b9d4ae4179d16c8a2e"
  },
  // London - 3 itinerarios
  {
    price: 110,
    duration: 1,
    likes: 27,
    hashtags: ["history", "architecture"],
    comments: ["Fascinating structure!", "Great tour!"],
    city: "67f6f04a90b994051d294a47",
    title: "Tour the Tower Bridge",
    user: "681001b9d4ae4179d16c8a2e"
  },
  {
    price: 140,
    duration: 2,
    likes: 32,
    hashtags: ["royal", "history"],
    comments: ["Elegant and grand!", "Very impressive!"],
    city: "67f6f04a90b994051d294a47",
    title: "Visit Buckingham Palace",
    user: "681001b9d4ae4179d16c8a2e"
  },
  {
    price: 70,
    duration: 2,
    likes: 20,
    hashtags: ["culture", "art"],
    comments: ["So educational!", "Amazing collections!"],
    city: "67f6f04a90b994051d294a47",
    title: "Explore the British Museum",
    user: "681001b9d4ae4179d16c8a2e"
  },
  // Sydney - 2 itinerarios
  {
    price: 160,
    duration: 2,
    likes: 30,
    hashtags: ["architecture", "culture"],
    comments: ["Stunning!", "A landmark!"],
    city: "67f6f04a90b994051d294a48",
    title: "Visit the Sydney Opera House",
    user: "681001b9d4ae4179d16c8a2e"
  },
  {
    price: 140,
    duration: 1,
    likes: 26,
    hashtags: ["adventure", "sightseeing"],
    comments: ["Thrilling experience!", "Incredible view!"],
    city: "67f6f04a90b994051d294a48",
    title: "Climb the Harbour Bridge",
    user: "681001b9d4ae4179d16c8a2e"
  },
  // Dubai - 3 itinerarios
  {
    price: 210,
    duration: 2,
    likes: 38,
    hashtags: ["luxury", "sightseeing"],
    comments: ["Sky-high views!", "Incredible architecture!"],
    city: "67f6f04a90b994051d294a49",
    title: "Visit Burj Khalifa",
    user: "681001b9d4ae4179d16c8a2e"
  },
  {
    price: 130,
    duration: 1,
    likes: 22,
    hashtags: ["shopping", "culture"],
    comments: ["So much to see!", "Great for families!"],
    city: "67f6f04a90b994051d294a49",
    title: "Explore the Dubai Mall",
    user: "681001b9d4ae4179d16c8a2e"
  },
  {
    price: 180,
    duration: 3,
    likes: 40,
    hashtags: ["adventure", "nature"],
    comments: ["Exhilarating ride!", "Memorable experience!"],
    city: "67f6f04a90b994051d294a49",
    title: "Enjoy a Desert Safari",
    user: "681001b9d4ae4179d16c8a2e"
  },
  // Rome - 2 itinerarios
  {
    price: 150,
    duration: 2,
    likes: 35,
    hashtags: ["history", "architecture"],
    comments: ["A glimpse into the past!", "Magnificent!"],
    city: "67f6f04a90b994051d294a4a",
    title: "Visit the Colosseum",
    user: "681001b9d4ae4179d16c8a2e"
  },
  {
    price: 170,
    duration: 3,
    likes: 42,
    hashtags: ["religion", "art"],
    comments: ["Stunning artworks!", "Very spiritual!"],
    city: "67f6f04a90b994051d294a4a",
    title: "Explore Vatican City",
    user: "681001b9d4ae4179d16c8a2e"
  },
  // Cairo - 3 itinerarios
  {
    price: 190,
    duration: 2,
    likes: 37,
    hashtags: ["history", "adventure"],
    comments: ["Majestic!", "Timeless wonder!"],
    city: "67f6f04a90b994051d294a4b",
    title: "Visit the Pyramids of Giza",
    user: "681001b9d4ae4179d16c8a2e"
  },
  {
    price: 80,
    duration: 1,
    likes: 19,
    hashtags: ["culture", "history"],
    comments: ["Very informative!"],
    city: "67f6f04a90b994051d294a4b",
    title: "Explore the Egyptian Museum",
    user: "681001b9d4ae4179d16c8a2e"
  },
  {
    price: 220,
    duration: 3,
    likes: 44,
    hashtags: ["relax", "sightseeing"],
    comments: ["Relaxing ride!", "Beautiful sunset!"],
    city: "67f6f04a90b994051d294a4b",
    title: "Cruise the Nile River",
    user: "681001b9d4ae4179d16c8a2e"
  },
  // Bangkok - 4 itinerarios
  {
    price: 130,
    duration: 2,
    likes: 29,
    hashtags: ["history", "culture"],
    comments: ["Breathtaking!", "A royal experience!"],
    city: "67f6f04a90b994051d294a4c",
    title: "Visit the Grand Palace",
    user: "681001b9d4ae4179d16c8a2e"
  },
  {
    price: 70,
    duration: 1,
    likes: 15,
    hashtags: ["local", "food"],
    comments: ["Fun and unique!", "Delicious street food!"],
    city: "67f6f04a90b994051d294a4c",
    title: "Explore Floating Markets",
    user: "681001b9d4ae4179d16c8a2e"
  },
  {
    price: 90,
    duration: 1,
    likes: 23,
    hashtags: ["food", "adventure"],
    comments: ["Yummy!", "So authentic!"],
    city: "67f6f04a90b994051d294a4c",
    title: "Experience Thai Street Food",
    user: "681001b9d4ae4179d16c8a2e"
  },
  {
    price: 110,
    duration: 2,
    likes: 31,
    hashtags: ["temple", "art"],
    comments: ["Stunning architecture!", "Peaceful!"],
    city: "67f6f04a90b994051d294a4c",
    title: "Discover Wat Arun",
    user: "681001b9d4ae4179d16c8a2e"
  },
  // Barcelona - 2 itinerarios
  {
    price: 140,
    duration: 2,
    likes: 34,
    hashtags: ["architecture", "history"],
    comments: ["Masterpiece!", "Unforgettable design!"],
    city: "67f6f04a90b994051d294a4d",
    title: "Explore Sagrada Familia",
    user: "681001b9d4ae4179d16c8a2e"
  },
  {
    price: 80,
    duration: 1,
    likes: 18,
    hashtags: ["culture", "shopping"],
    comments: ["Vibrant street life!", "Loved it!"],
    city: "67f6f04a90b994051d294a4d",
    title: "Stroll on La Rambla",
    user: "681001b9d4ae4179d16c8a2e"
  },
  // Moscow - 3 itinerarios
  {
    price: 160,
    duration: 2,
    likes: 36,
    hashtags: ["history", "culture"],
    comments: ["Iconic!", "A must-see!"],
    city: "67f6f04a90b994051d294a4e",
    title: "Visit the Red Square",
    user: "681001b9d4ae4179d16c8a2e"
  },
  {
    price: 180,
    duration: 2,
    likes: 39,
    hashtags: ["monument", "history"],
    comments: ["Impressive!", "Very detailed!"],
    city: "67f6f04a90b994051d294a4e",
    title: "Explore the Kremlin",
    user: "681001b9d4ae4179d16c8a2e"
  },
  {
    price: 70,
    duration: 1,
    likes: 15,
    hashtags: ["shopping", "urban"],
    comments: ["Unique experience!", "Worth a visit!"],
    city: "67f6f04a90b994051d294a4e",
    title: "Discover GUM Department Store",
    user: "681001b9d4ae4179d16c8a2e"
  },
  // Cape Town - 1 itinerario
  {
    price: 120,
    duration: 2,
    likes: 28,
    hashtags: ["nature", "adventure"],
    comments: ["Breathtaking view!", "Must climb once!"],
    city: "67f6f04a90b994051d294a4f",
    title: "Visit Table Mountain",
    user: "681001b9d4ae4179d16c8a2e"
  },
  // Istanbul - 1 itinerario
  {
    price: 150,
    duration: 2,
    likes: 33,
    hashtags: ["history", "culture"],
    comments: ["Stunning architecture!", "Rich history!"],
    city: "67f6f04a90b994051d294a50",
    title: "Explore Hagia Sophia",
    user: "681001b9d4ae4179d16c8a2e"
  },
  // Singapore - 1 itinerario
  {
    price: 140,
    duration: 2,
    likes: 30,
    hashtags: ["nature", "urban"],
    comments: ["Futuristic!", "Beautifully designed!"],
    city: "67f6f04a90b994051d294a51",
    title: "Visit Gardens by the Bay",
    user: "681001b9d4ae4179d16c8a2e"
  },
  // Buenos Aires - 2 itinerarios
  {
    price: 100,
    duration: 1,
    likes: 26,
    hashtags: ["culture", "art"],
    comments: ["Colorful street!", "Very artistic!"],
    city: "67f6f0a4157c5048e883b990",
    title: "Explore La Boca",
    user: "681001b9d4ae4179d16c8a2e"
  },
  {
    price: 90,
    duration: 1,
    likes: 22,
    hashtags: ["history", "mystery"],
    comments: ["Intriguing and quiet.", "A unique experience."],
    city: "67f6f0a4157c5048e883b990",
    title: "Visit Recoleta Cemetery",
    user: "681001b9d4ae4179d16c8a2e"
  }
];

  try {

    Itinerary.insertMany(ItineraryData).then(()=> { console.log("Se agrego satisfactoriamente"); process.exit()})
    
  } catch (error) {
    console.log(error)
  }
