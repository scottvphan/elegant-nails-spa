import styled from "styled-components"

const ReviewsContainer = styled.div`
  display:grid;
  align-items: center;
  justify-content: center;
  text-align: center;
  border:1px solid #00000018;
  border-radius: 0.5rem;
  padding:1rem;
`
const UserImg = styled.img`
  margin:0 auto;
  height:64px;
`
const UserName = styled.h3`
  
`
const ReviewText = styled.p`
  
`
const ReviewDate = styled.h6`
  
`
export const GoogleReviewsCard = (reviews:any) => {
  console.log(reviews)
  return(
    <ReviewsContainer>
      <UserImg src={reviews.authorAttribution.photoUri} />
      <UserName>{reviews.authorAttribution.displayName}</UserName>
      <ReviewText>{reviews.text.text}</ReviewText>
      <ReviewDate>{reviews.relativePublishTimeDescription}</ReviewDate>
    </ReviewsContainer>
  )
}