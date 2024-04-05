import styled from "styled-components";
import { Link } from "react-router-dom";

const ReviewsContainer = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  text-align: center;
  border: 1px solid #00000018;
  border-radius: 0.5rem;
  padding: 1rem;
  gap: 0.5rem;
`;
const ReviewsLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const UserImg = styled.img`
  margin: 0 auto;
  height: 64px;
`;

const UserName = styled.h3``;

const ReviewText = styled.p``;

const ReviewDate = styled.h6``;

const StarContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Star = styled.span`
  color: #ffc107; /* Yellow color for stars */
  margin: 0 2px;
`;

export const GoogleReviewsCard = (review: any) => {
  const { authorAttribution, text, relativePublishTimeDescription, rating } =
    review;

  // Function to generate stars based on the rating
  const generateStars = (rating: number) => {
    const stars = [];

    for (let i = 1; i <= 5; i++) {
      stars.push(
        <Star key={i}>&#9733;{/* Unicode character for a solid star */}</Star>
      );
    }

    // Highlight stars up to the rating
    for (let i = 1; i <= rating; i++) {
      stars[i - 1] = (
        <Star key={i} style={{ color: "#f8d517" }}>
          &#9733;
        </Star>
      );
    }

    return stars;
  };

  return (
    <ReviewsLink to={authorAttribution.uri} target="_blank">
      <ReviewsContainer>
        <UserImg src={authorAttribution.photoUri} alt="User Avatar" />
        <UserName>{authorAttribution.displayName}</UserName>
        {/* Display stars based on the rating */}
        <StarContainer>{generateStars(rating)}</StarContainer>
        <ReviewText>{text.text}</ReviewText>
        <ReviewDate>{relativePublishTimeDescription}</ReviewDate>
      </ReviewsContainer>
    </ReviewsLink>
  );
};
