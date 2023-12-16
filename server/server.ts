// server.ts
import express, { Request, Response } from "express";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 4000;
const googleApiKey = process.env.GOOGLE_API_KEY;
const placeId = process.env.GOOGLE_PLACE_ID;

app.use(express.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, ..."); // Add other headers as needed
  next();
});
app.use(cors());
app.use(bodyParser.json());
app.get("/google-reviews", async (req: Request, res: Response) => {
  if (!googleApiKey || !placeId) {
    return res.status(500).json({ error: "API key or place ID not provided." });
  }

  const placeDetailsUrl = `https://places.googleapis.com/v1/places/${placeId}?fields=reviews&key=${googleApiKey}`;
  try {
    const placeDetailsResponse = await axios.get(placeDetailsUrl);
    const reviews = placeDetailsResponse.data.reviews
      ? placeDetailsResponse.data.reviews || []
      : [];
    res.json({ reviews });
  } catch (error) {
    console.error("Error fetching Google Reviews:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
