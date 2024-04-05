import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";
import { GoogleReviewsCard } from "./GoogleReviewsCard";
import {v4 as uuidv4} from 'uuid'
interface AuthorAttribution {
  displayName: string;
  uri: string;
  photoUri: string;
}

interface Text {
  text: string;
  languageCode: string;
}

interface Review {
  name: string;
  relativePublishTimeDescription: string;
  rating: number;
  text: Text;
  originalText: Text;
  authorAttribution: AuthorAttribution;
  publishTime: string;
}

interface GoogleReviewsProps {}

const ReviewsContainer = styled.div`
  display:grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap:1rem;
  padding:1rem;
  @media screen and (max-width:768px) {
    grid-template-columns: 1fr;
  }
`
const ReviewContainer = styled.div`
  
`
const ReviewHeading = styled.h1`
  text-align: center;
`

export const GoogleReviews: React.FC<GoogleReviewsProps> = () => {
  const [googleReviews, setGoogleReviews] = useState<Review[]>([]);
  const [mappedReviews, setMappedReviews] = useState<JSX.Element[] | null>(
    null
  );

  useEffect(() => {
    const fetchGoogleReviews = async () => {
      try {
        const storedReviews = sessionStorage.getItem("googleReviews");

        if (storedReviews) {
          setGoogleReviews(JSON.parse(storedReviews));
        } else {
          const response = await axios.get(
            "https://elegant-nails-spa-aqgh.onrender.com/google-reviews"
          );
          let reviews: Review[] = response.data.reviews || [];

          // Sort reviews by publishTime
          reviews.sort(
            (a, b) =>
              new Date(b.publishTime).getTime() -
              new Date(a.publishTime).getTime()
          );

          // Keep only the most recent 3 reviews
          reviews = reviews.slice(0, 3);
          sessionStorage.setItem("googleReviews", JSON.stringify(reviews));

          setGoogleReviews(reviews);
        }
      } catch (error) {
        console.error("Error fetching Google Reviews:", error);
      }
    };

    fetchGoogleReviews();
  }, []);

  useEffect(() => {
    if (googleReviews) {
      const reviews = googleReviews.map((review: Review ) => (
        <GoogleReviewsCard key={uuidv4()} {...review} />
      ));
      setMappedReviews(reviews);
    }
  }, [googleReviews]);

  return (
    <ReviewContainer>
      <ReviewHeading>Our customer reviews</ReviewHeading>
      <ReviewsContainer>
        {mappedReviews}
      </ReviewsContainer>
    </ReviewContainer>
  );
};
