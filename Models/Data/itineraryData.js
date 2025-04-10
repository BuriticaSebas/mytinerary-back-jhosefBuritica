import "dotenv/config.js"
import "../../configBD/connectDb.js"
import Itinerary from "../Itinerary.js"


const ItineraryData = [
  // Paris - 3 itinerarios
  {
    imgUser: "https://randomuser.me/api/portraits/men/32.jpg",
    nameUser: "Carlos Gomez",
    price: 150,
    duration: 2,
    likes: 24,
    hashtags: ["adventure", "history"],
    comments: ["An unforgettable experience!", "Highly recommended!"],
    city: "67f6f04a90b994051d294a43",
    title: "Visit the Eiffel Tower"
  },
  {
    imgUser: "https://randomuser.me/api/portraits/women/45.jpg",
    nameUser: "Lucia Fernandez",
    price: 120,
    duration: 2,
    likes: 18,
    hashtags: ["culture", "photography"],
    comments: ["Amazing art scene!", "Lovely vibe!"],
    city: "67f6f04a90b994051d294a43",
    title: "Explore Montmartre"
  },
  {
    imgUser: "https://randomuser.me/api/portraits/men/11.jpg",
    nameUser: "Julian Rios",
    price: 200,
    duration: 3,
    likes: 30,
    hashtags: ["romantic", "sightseeing"],
    comments: ["A dream come true!", "Best way to see Paris!"],
    city: "67f6f04a90b994051d294a43",
    title: "Cruise the Seine"
  },
  // Tokyo - 2 itinerarios
  {
    imgUser: "https://randomuser.me/api/portraits/women/50.jpg",
    nameUser: "Emily Clark",
    price: 100,
    duration: 1,
    likes: 20,
    hashtags: ["urban", "culture"],
    comments: ["Really vibrant!", "Must see!"],
    city: "67f6f04a90b994051d294a44",
    title: "Visit Shibuya Crossing"
  },
  {
    imgUser: "https://randomuser.me/api/portraits/men/45.jpg",
    nameUser: "Michael Johnson",
    price: 130,
    duration: 2,
    likes: 35,
    hashtags: ["nature", "photography"],
    comments: ["Beautiful views!", "So serene!"],
    city: "67f6f04a90b994051d294a44",
    title: "Experience Cherry Blossoms"
  },
  // New York - 4 itinerarios
  {
    imgUser: "https://randomuser.me/api/portraits/women/32.jpg",
    nameUser: "Sophia Davis",
    price: 180,
    duration: 2,
    likes: 40,
    hashtags: ["history", "sightseeing"],
    comments: ["Iconic landmark!", "A must visit!"],
    city: "67f6f04a90b994051d294a45",
    title: "Visit the Statue of Liberty"
  },
  {
    imgUser: "https://randomuser.me/api/portraits/men/47.jpg",
    nameUser: "Liam Wilson",
    price: 60,
    duration: 1,
    likes: 22,
    hashtags: ["nature", "relax"],
    comments: ["Very relaxing!", "Loved the greenery!"],
    city: "67f6f04a90b994051d294a45",
    title: "Stroll in Central Park"
  },
  {
    imgUser: "https://randomuser.me/api/portraits/women/40.jpg",
    nameUser: "Olivia Brown",
    price: 80,
    duration: 1,
    likes: 28,
    hashtags: ["urban", "party"],
    comments: ["So lively!", "Non-stop energy!"],
    city: "67f6f04a90b994051d294a45",
    title: "Explore Times Square"
  },
  {
    imgUser: "https://randomuser.me/api/portraits/men/52.jpg",
    nameUser: "Noah Miller",
    price: 150,
    duration: 2,
    likes: 45,
    hashtags: ["culture", "theater"],
    comments: ["Amazing performances!", "A real treat!"],
    city: "67f6f04a90b994051d294a45",
    title: "Discover Broadway"
  },
  // Rio de Janeiro - 2 itinerarios
  {
    imgUser: "https://randomuser.me/api/portraits/women/53.jpg",
    nameUser: "Emma Thompson",
    price: 170,
    duration: 2,
    likes: 33,
    hashtags: ["history", "sightseeing"],
    comments: ["Breathtaking view!", "A symbol of love!"],
    city: "67f6f04a90b994051d294a46",
    title: "Visit Christ the Redeemer"
  },
  {
    imgUser: "https://randomuser.me/api/portraits/men/60.jpg",
    nameUser: "Lucas Martin",
    price: 90,
    duration: 1,
    likes: 25,
    hashtags: ["beach", "relax"],
    comments: ["Sunny and fun!", "Loved the vibe!"],
    city: "67f6f04a90b994051d294a46",
    title: "Enjoy Copacabana Beach"
  },
  // London - 3 itinerarios
  {
    imgUser: "https://randomuser.me/api/portraits/women/33.jpg",
    nameUser: "Mia Garcia",
    price: 110,
    duration: 1,
    likes: 27,
    hashtags: ["history", "architecture"],
    comments: ["Fascinating structure!", "Great tour!"],
    city: "67f6f04a90b994051d294a47",
    title: "Tour the Tower Bridge"
  },
  {
    imgUser: "https://randomuser.me/api/portraits/men/34.jpg",
    nameUser: "Carlos Gomez",
    price: 140,
    duration: 2,
    likes: 32,
    hashtags: ["royal", "history"],
    comments: ["Elegant and grand!", "Very impressive!"],
    city: "67f6f04a90b994051d294a47",
    title: "Visit Buckingham Palace"
  },
  {
    imgUser: "https://randomuser.me/api/portraits/women/46.jpg",
    nameUser: "Lucia Fernandez",
    price: 70,
    duration: 2,
    likes: 20,
    hashtags: ["culture", "art"],
    comments: ["So educational!", "Amazing collections!"],
    city: "67f6f04a90b994051d294a47",
    title: "Explore the British Museum"
  },
  // Sydney - 2 itinerarios
  {
    imgUser: "https://randomuser.me/api/portraits/men/12.jpg",
    nameUser: "Julian Rios",
    price: 160,
    duration: 2,
    likes: 30,
    hashtags: ["architecture", "culture"],
    comments: ["Stunning!", "A landmark!"],
    city: "67f6f04a90b994051d294a48",
    title: "Visit the Sydney Opera House"
  },
  {
    imgUser: "https://randomuser.me/api/portraits/women/51.jpg",
    nameUser: "Emily Clark",
    price: 140,
    duration: 1,
    likes: 26,
    hashtags: ["adventure", "sightseeing"],
    comments: ["Thrilling experience!", "Incredible view!"],
    city: "67f6f04a90b994051d294a48",
    title: "Climb the Harbour Bridge"
  },
  // Dubai - 3 itinerarios
  {
    imgUser: "https://randomuser.me/api/portraits/men/46.jpg",
    nameUser: "Michael Johnson",
    price: 210,
    duration: 2,
    likes: 38,
    hashtags: ["luxury", "sightseeing"],
    comments: ["Sky-high views!", "Incredible architecture!"],
    city: "67f6f04a90b994051d294a49",
    title: "Visit Burj Khalifa"
  },
  {
    imgUser: "https://randomuser.me/api/portraits/women/34.jpg",
    nameUser: "Sophia Davis",
    price: 130,
    duration: 1,
    likes: 22,
    hashtags: ["shopping", "culture"],
    comments: ["So much to see!", "Great for families!"],
    city: "67f6f04a90b994051d294a49",
    title: "Explore the Dubai Mall"
  },
  {
    imgUser: "https://randomuser.me/api/portraits/men/48.jpg",
    nameUser: "Liam Wilson",
    price: 180,
    duration: 3,
    likes: 40,
    hashtags: ["adventure", "nature"],
    comments: ["Exhilarating ride!", "Memorable experience!"],
    city: "67f6f04a90b994051d294a49",
    title: "Enjoy a Desert Safari"
  },
  // Rome - 2 itinerarios
  {
    imgUser: "https://randomuser.me/api/portraits/women/41.jpg",
    nameUser: "Olivia Brown",
    price: 150,
    duration: 2,
    likes: 35,
    hashtags: ["history", "architecture"],
    comments: ["A glimpse into the past!", "Magnificent!"],
    city: "67f6f04a90b994051d294a4a",
    title: "Visit the Colosseum"
  },
  {
    imgUser: "https://randomuser.me/api/portraits/men/53.jpg",
    nameUser: "Noah Miller",
    price: 170,
    duration: 3,
    likes: 42,
    hashtags: ["religion", "art"],
    comments: ["Stunning artworks!", "Very spiritual!"],
    city: "67f6f04a90b994051d294a4a",
    title: "Explore Vatican City"
  },
  // Cairo - 3 itinerarios
  {
    imgUser: "https://randomuser.me/api/portraits/women/54.jpg",
    nameUser: "Emma Thompson",
    price: 190,
    duration: 2,
    likes: 37,
    hashtags: ["history", "adventure"],
    comments: ["Majestic!", "Timeless wonder!"],
    city: "67f6f04a90b994051d294a4b",
    title: "Visit the Pyramids of Giza"
  },
  {
    imgUser: "https://randomuser.me/api/portraits/men/61.jpg",
    nameUser: "Lucas Martin",
    price: 80,
    duration: 1,
    likes: 19,
    hashtags: ["culture", "history"],
    comments: ["Very informative!"],
    city: "67f6f04a90b994051d294a4b",
    title: "Explore the Egyptian Museum"
  },
  {
    imgUser: "https://randomuser.me/api/portraits/women/35.jpg",
    nameUser: "Mia Garcia",
    price: 220,
    duration: 3,
    likes: 44,
    hashtags: ["relax", "sightseeing"],
    comments: ["Relaxing ride!", "Beautiful sunset!"],
    city: "67f6f04a90b994051d294a4b",
    title: "Cruise the Nile River"
  },
  // Bangkok - 4 itinerarios
  {
    imgUser: "https://randomuser.me/api/portraits/men/33.jpg",
    nameUser: "Carlos Gomez",
    price: 130,
    duration: 2,
    likes: 29,
    hashtags: ["history", "culture"],
    comments: ["Breathtaking!", "A royal experience!"],
    city: "67f6f04a90b994051d294a4c",
    title: "Visit the Grand Palace"
  },
  {
    imgUser: "https://randomuser.me/api/portraits/women/47.jpg",
    nameUser: "Lucia Fernandez",
    price: 70,
    duration: 1,
    likes: 15,
    hashtags: ["local", "food"],
    comments: ["Fun and unique!", "Delicious street food!"],
    city: "67f6f04a90b994051d294a4c",
    title: "Explore Floating Markets"
  },
  {
    imgUser: "https://randomuser.me/api/portraits/men/13.jpg",
    nameUser: "Julian Rios",
    price: 90,
    duration: 1,
    likes: 23,
    hashtags: ["food", "adventure"],
    comments: ["Yummy!", "So authentic!"],
    city: "67f6f04a90b994051d294a4c",
    title: "Experience Thai Street Food"
  },
  {
    imgUser: "https://randomuser.me/api/portraits/women/52.jpg",
    nameUser: "Emily Clark",
    price: 110,
    duration: 2,
    likes: 31,
    hashtags: ["temple", "art"],
    comments: ["Stunning architecture!", "Peaceful!"],
    city: "67f6f04a90b994051d294a4c",
    title: "Discover Wat Arun"
  },
  // Barcelona - 2 itinerarios
  {
    imgUser: "https://randomuser.me/api/portraits/men/49.jpg",
    nameUser: "Michael Johnson",
    price: 140,
    duration: 2,
    likes: 34,
    hashtags: ["architecture", "history"],
    comments: ["Masterpiece!", "Unforgettable design!"],
    city: "67f6f04a90b994051d294a4d",
    title: "Explore Sagrada Familia"
  },
  {
    imgUser: "https://randomuser.me/api/portraits/women/37.jpg",
    nameUser: "Sophia Davis",
    price: 80,
    duration: 1,
    likes: 18,
    hashtags: ["culture", "shopping"],
    comments: ["Vibrant street life!", "Loved it!"],
    city: "67f6f04a90b994051d294a4d",
    title: "Stroll on La Rambla"
  },
  // Moscow - 3 itinerarios
  {
    imgUser: "https://randomuser.me/api/portraits/men/50.jpg",
    nameUser: "Liam Wilson",
    price: 160,
    duration: 2,
    likes: 36,
    hashtags: ["history", "culture"],
    comments: ["Iconic!", "A must-see!"],
    city: "67f6f04a90b994051d294a4e",
    title: "Visit the Red Square"
  },
  {
    imgUser: "https://randomuser.me/api/portraits/women/38.jpg",
    nameUser: "Olivia Brown",
    price: 180,
    duration: 2,
    likes: 39,
    hashtags: ["monument", "history"],
    comments: ["Impressive!", "Very detailed!"],
    city: "67f6f04a90b994051d294a4e",
    title: "Explore the Kremlin"
  },
  {
    imgUser: "https://randomuser.me/api/portraits/men/54.jpg",
    nameUser: "Noah Miller",
    price: 70,
    duration: 1,
    likes: 15,
    hashtags: ["shopping", "urban"],
    comments: ["Unique experience!", "Worth a visit!"],
    city: "67f6f04a90b994051d294a4e",
    title: "Discover GUM Department Store"
  },
  // Cape Town - 1 itinerario
  {
    imgUser: "https://randomuser.me/api/portraits/women/55.jpg",
    nameUser: "Emma Thompson",
    price: 120,
    duration: 2,
    likes: 28,
    hashtags: ["nature", "adventure"],
    comments: ["Breathtaking view!", "Must climb once!"],
    city: "67f6f04a90b994051d294a4f",
    title: "Visit Table Mountain"
  },
  // Istanbul - 1 itinerario
  {
    imgUser: "https://randomuser.me/api/portraits/men/62.jpg",
    nameUser: "Lucas Martin",
    price: 150,
    duration: 2,
    likes: 33,
    hashtags: ["history", "culture"],
    comments: ["Stunning architecture!", "Rich history!"],
    city: "67f6f04a90b994051d294a50",
    title: "Explore Hagia Sophia"
  },
  // Singapore - 1 itinerario
  {
    imgUser: "https://randomuser.me/api/portraits/women/36.jpg",
    nameUser: "Mia Garcia",
    price: 140,
    duration: 2,
    likes: 30,
    hashtags: ["nature", "urban"],
    comments: ["Futuristic!", "Beautifully designed!"],
    city: "67f6f04a90b994051d294a51",
    title: "Visit Gardens by the Bay"
  },
  // Buenos Aires - 2 itinerarios
  {
    imgUser: "https://randomuser.me/api/portraits/men/35.jpg",
    nameUser: "Carlos Gomez",
    price: 100,
    duration: 1,
    likes: 26,
    hashtags: ["culture", "art"],
    comments: ["Colorful street!", "Very artistic!"],
    city: "67f6f0a4157c5048e883b990",
    title: "Explore La Boca"
  },
  {
    imgUser: "https://randomuser.me/api/portraits/women/48.jpg",
    nameUser: "Lucia Fernandez",
    price: 90,
    duration: 1,
    likes: 22,
    hashtags: ["history", "mystery"],
    comments: ["Intriguing and quiet.", "A unique experience."],
    city: "67f6f0a4157c5048e883b990",
    title: "Visit Recoleta Cemetery"
  }
];


  try {

    Itinerary.insertMany(ItineraryData).then(()=> { console.log("Se agrego satisfactoriamente"); process.exit()})
    
  } catch (error) {
    console.log(error)
  }
