import "dotenv/config.js";
import "../../configBD/connectDb.js";
import User from "../user.js";

const UserData = [
  {
    name: "Lucas",
    lastName: "Martínez",
    email: "lucas.martinez@example.com",
    password: "Password123!",
    urlPhoto: "https://randomuser.me/api/portraits/men/1.jpg",
    country: "Argentina",
  },
  {
    name: "Sophie",
    lastName: "Dubois",
    email: "sophie.dubois@example.com",
    password: "SecurePass456!",
    urlPhoto: "https://randomuser.me/api/portraits/women/2.jpg",
    country: "Francia",
  },
  {
    name: "Akira",
    lastName: "Yamamoto",
    email: "akira.yamamoto@example.com",
    password: "MySecret789!",
    urlPhoto: "https://randomuser.me/api/portraits/men/3.jpg",
    country: "Japón",
  },
  {
    name: "Emma",
    lastName: "Johnson",
    email: "emma.johnson@example.com",
    password: "SafePass321!",
    urlPhoto: "https://randomuser.me/api/portraits/women/4.jpg",
    country: "Estados Unidos",
  },
  {
    name: "Carlos",
    lastName: "Gómez",
    email: "carlos.gomez@example.com",
    password: "StrongPass654!",
    urlPhoto: "https://randomuser.me/api/portraits/men/5.jpg",
    country: "México",
  },
];

try {
  User.insertMany(UserData).then(() => {
    console.log("Se agrego satisfactoriamente");
    process.exit();
  });
} catch (error) {
  console.log(error);
}
