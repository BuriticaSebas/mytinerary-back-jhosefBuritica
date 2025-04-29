import "dotenv/config.js";
import "../../configBD/connectDb.js";
import CommentsModel from "../Comments.js";

const commentsData = [
  {
    description: "¡Este itinerario es increíble! Lo disfruté muchísimo.",
    user: "681001b9d4ae4179d16c8a2e",
    itinerary: "681004b77be1bfc8a7e93504",
  },
  {
    description: "Muy bien organizado, las recomendaciones fueron perfectas.",
    user: "681001b9d4ae4179d16c8a2e",
    itinerary: "681004b77be1bfc8a7e93504",
  },
  {
    description: "La experiencia fue única, volvería a hacerlo sin duda.",

    user: "681001b9d4ae4179d16c8a2e",
    itinerary: "681004b77be1bfc8a7e93504",
  },
  {
    description: "Excelente guía y muy buenos lugares visitados.",
    user: "681001b9d4ae4179d16c8a2e",
    itinerary: "681004b77be1bfc8a7e93504",
  },
  {
    description: "Recomendado al 100%, cumplió todas mis expectativas.",
    user: "681001b9d4ae4179d16c8a2e",
    itinerary: "681004b77be1bfc8a7e93504",
  },
];

try {
  CommentsModel.insertMany(commentsData).then(() => {
    console.log("Se agrego satisfactoriamente");
    process.exit();
  });
} catch (error) {
  console.log(error);
}
