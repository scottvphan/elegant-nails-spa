import styled from "styled-components";

const PricingHeader = styled.h2`
  color: #000;
  font-family: Jost;
  font-size: 5rem;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 75% */
`;
const FancyFont = styled.h5`
  color: #f9b698;
  text-align: center;
  font-family: Euphoria Script;
  font-size: 4rem;
  font-style: normal;
  font-weight: 400;
`;
const ServiceHeadingContainer = styled.div`
  display: grid;
  text-align: center;
  gap: 1rem;
`;
const ServiceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem;
  box-sizing: border-box;
  border-bottom:1px dotted black;
  align-items: center;
`;
const ServiceLayoutContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;
const ServiceName = styled.p`
  font-size: 1rem;
  text-transform: uppercase;
`;
const ServicePrice = styled.h6`
  font-size: 1rem;
  color: #f9b698;
`;

interface DataPropsType {
  name: string,
  options: {
    price: number
  }[]
}

export const ServicesComponent = (data: DataPropsType) => {
  console.log(data)

  return (
    <>
        <ServiceContainer>
          <ServiceName>{data.name}</ServiceName>
          <ServicePrice>${data.options[0].price}</ServicePrice>
        </ServiceContainer>
    </>
  );
};
