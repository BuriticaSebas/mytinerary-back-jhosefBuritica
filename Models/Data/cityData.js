import "dotenv/config.js"
import "../../configBD/connectDb.js"
import CityModel from "../City.js"

let cityData = [
    {
      name: "Paris",
      country: "France",
      language: "French",
      climate: "Temperate",
      currency: "Euro",
      rating: 4.8,
      imageUrl: "https://images.adsttc.com/media/images/5d44/14fa/284d/d1fd/3a00/003d/large_jpg/eiffel-tower-in-paris-151-medium.jpg?1564742900",
      bestTimeToVisit: "Spring",
    },
    {
      name: "Tokyo",
      country: "Japan",
      language: "Japanese",
      climate: "Humid Subtropical",
      currency: "Yen",
      rating: 4.9,
      imageUrl: "https://images.unsplash.com/photo-1604928141064-207cea6f571f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8amFwJUMzJUIzbiUyMHRva2lvfGVufDB8fDB8fHww",
      bestTimeToVisit: "March-April",
    },
    {
      name: "New York",
      country: "USA",
      language: "English",
      climate: "Temperate",
      currency: "US Dollar",
      rating: 4.7,
      imageUrl: "https://i0.wp.com/gentleman.com.mx/wp-content/uploads/2024/10/new-york.jpeg?fit=2400%2C1600&ssl=1",
      bestTimeToVisit: "Fall",
    },
    {
      name: "Rio de Janeiro",
      country: "Brazil",
      language: "Portuguese",
      climate: "Tropical",
      currency: "Brazilian Real",
      rating: 4.6,
      imageUrl: "https://res.cloudinary.com/worldpackers/image/upload/c_fill,f_auto,q_auto,w_1024/v1/guides/article_cover/dtceexjjoji0w1ikkp2k?_a=BACADKGT",
      bestTimeToVisit: "September-March",
    },
    {
      name: "London",
      country: "UK",
      language: "English",
      climate: "Oceanic",
      currency: "Pound Sterling",
      rating: 4.8,
      imageUrl: "https://plus.unsplash.com/premium_photo-1664303991463-36449a65d3d6?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bG9uZG9uJTIwZW5nbGFuZHxlbnwwfHwwfHx8MA%3D%3D",
      bestTimeToVisit: "Summer",
    },
    {
      name: "Sydney",
      country: "Australia",
      language: "English",
      climate: "Subtropical",
      currency: "Australian Dollar",
      rating: 4.7,
      imageUrl: "https://www.viajarsydney.com/img/que-visitar-sydney.jpg",
      bestTimeToVisit: "Spring",
    },
    {
      name: "Dubai",
      country: "UAE",
      language: "Arabic",
      climate: "Desert",
      currency: "Dirham",
      rating: 4.9,
      imageUrl: "https://media.istockphoto.com/id/467829216/es/foto/marina-de-dubai.jpg?s=612x612&w=0&k=20&c=p43O66Tap8v3SwuWjcPd407rMnLulHscGyweY06uL_4=",
      bestTimeToVisit: "November-March",
    },
    {
      name: "Rome",
      country: "Italy",
      language: "Italian",
      climate: "Mediterranean",
      currency: "Euro",
      rating: 4.8,
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-GWaWqklynynrhrVZxMPDXAbAQ3LmY9EdkA&s",
      bestTimeToVisit: "Spring",
    },
    {
      name: "Cairo",
      country: "Egypt",
      language: "Arabic",
      climate: "Desert",
      currency: "Egyptian Pound",
      rating: 4.5,
      imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/03/9b/2f/5b/cairo.jpg?w=1100&h=1100&s=1",
      bestTimeToVisit: "October-April",
    },
    {
      name: "Bangkok",
      country: "Thailand",
      language: "Thai",
      climate: "Tropical",
      currency: "Baht",
      rating: 4.6,
      imageUrl: "https://media.istockphoto.com/id/2149112736/es/foto/wat-arun-temple-at-sunset-bangkok-in-thailand.jpg?s=612x612&w=0&k=20&c=eLshM5ZzAXx8ZBYzsu6zhfJEmEHdn0G1-dCGAbTJQ6Q=",
      bestTimeToVisit: "November-February",
    },
    {
      name: "Barcelona",
      country: "Spain",
      language: "Spanish",
      climate: "Mediterranean",
      currency: "Euro",
      rating: 4.7,
      imageUrl: "https://images.unsplash.com/photo-1583422409516-2895a77efded?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFyY2Vsb25hfGVufDB8fDB8fHww",
      bestTimeToVisit: "Spring",
    },
    {
      name: "Moscow",
      country: "Russia",
      language: "Russian",
      climate: "Continental",
      currency: "Ruble",
      rating: 4.5,
      imageUrl: "https://images.squarespace-cdn.com/content/v1/57b9b98a29687f1ef5c622df/1531674195865-U20BB2Y7Z25BR84RXRJR/0.jpg",
      bestTimeToVisit: "Summer",
    },
    {
      name: "Cape Town",
      country: "South Africa",
      language: "English",
      climate: "Mediterranean",
      currency: "Rand",
      rating: 4.7,
      imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/10/2e/1e/cape-town.jpg?w=1200&h=700&s=1",
      bestTimeToVisit: "November-March",
    },
    {
      name: "Istanbul",
      country: "Turkey",
      language: "Turkish",
      climate: "Mediterranean",
      currency: "Turkish Lira",
      rating: 4.8,
      imageUrl: "https://assets.micontenthub.com/traveloffers/travel-tips/the-exterior-of-the-6th-century-byzantine-eastern-roman-hagia-sophia-istanbul_AwpCNMYXQ.jpg",
      bestTimeToVisit: "Spring",
    },
    {
      name: "Singapore",
      country: "Singapore",
      language: "English",
      climate: "Tropical",
      currency: "Singapore Dollar",
      rating: 4.9,
      imageUrl: "https://a.travel-assets.com/findyours-php/viewfinder/images/res70/542000/542607-singapore.jpg",
      bestTimeToVisit: "February-April",
    }
  ];

  


try {

  CityModel.insertMany(cityData).then(()=> { console.log("Se agrego satisfactoriamente"); process.exit()})
  
} catch (error) {
  console.log(error)
}
