// server.ts
import express, { Request, Response } from "express";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;
const apiKey = process.env.GOOGLE_API_KEY;
const placeId = process.env.GOOGLE_PLACE_ID;

app.use(express.json());

app.get("/google-reviews", async (req: Request, res: Response) => {
  if (!apiKey || !placeId) {
    return res.status(500).json({ error: "API key or place ID not provided." });
  }

  const placeDetailsUrl = `https://places.googleapis.com/v1/places/ChIJj61dQgK6j4AR4GeTYWZsKWw?fields=reviews&key=AIzaSyBBW2F1HMcu3yJ1wG2sHo4eRoelcb2jlVY`;
  try {
    const placeDetailsResponse = await axios.get(placeDetailsUrl);
    const reviews = placeDetailsResponse.data.reviews ? placeDetailsResponse.data.reviews || [] : [];

    res.json({ reviews });
  } catch (error) {
    console.error("Error fetching Google Reviews:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
