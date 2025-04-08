import "dotenv/config.js"
import "../../configBD/connectDb.js"
import Itinerary from "../Itinerary.js"


const ItineraryData = [
    {
      imgUser: "https://randomuser.me/api/portraits/men/32.jpg",
      nameUser: "Carlos Gomez",
      price: 150,
      duration: 2,
      likes: 24,
      hashtags: ["aventura", "historia"],
      comments: ["¡Una experiencia inolvidable!", "Recomiendo ir con tiempo"],
      city: "67e31d03b3a06d341ee3221f" 
    },
    {
      imgUser: "https://randomuser.me/api/portraits/women/45.jpg",
      nameUser: "Lucia Fernandez",
      price: 90,
      duration: 1,
      likes: 15,
      hashtags: ["gastronomía", "cultura"],
      comments: ["¡La comida local es increíble!"],
      city: "67e31d03b3a06d341ee3221f"
    },
    {
      imgUser: "https://randomuser.me/api/portraits/men/11.jpg",
      nameUser: "Julian Rios",
      price: 220,
      duration: 3,
      likes: 32,
      hashtags: ["naturaleza", "fotografía"],
      comments: [],
      city:"67e31d03b3a06d341ee3221f"
    }
  ];
  


  try {

    Itinerary.insertMany(ItineraryData).then(()=> { console.log("Se agrego satisfactoriamente"); process.exit()})
    
  } catch (error) {
    console.log(error)
  }
