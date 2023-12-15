import styled from "styled-components";
import jsonData from "../../data.json";
import { ServicesComponent } from "../components/ServicesComponent";

const ServicesContainer = styled.div`
  @media screen and (min-width: 1024px) {
    gap: 1rem;
    padding: 2rem 6rem;
  }
`;
const PricingHeader = styled.h2`
  color: #000;
  font-family: Jost;
  font-size: 4rem;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; 
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
  display: flex;
  text-align: center;
  align-items: center;
  flex-direction: column;
  height: 15rem;
  padding: 2rem;
  justify-content: space-around;
`;
const ServiceLayoutContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
`;

export const Services = () => {
  console.log(jsonData);

  const mappedServices = jsonData.services.map((data: any) => {
    return <ServicesComponent {...data} />;
  });

  return (
    <ServicesContainer>
      <ServiceHeadingContainer>
        <FancyFont>PricingServices</FancyFont>
        <PricingHeader>Services</PricingHeader>
      </ServiceHeadingContainer>
      <ServiceLayoutContainer>{mappedServices}</ServiceLayoutContainer>
    </ServicesContainer>
  );
};
