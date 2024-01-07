import styled from "styled-components";

const ServiceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem;
  box-sizing: border-box;
  border-bottom:1px dotted black;
  align-items: center;
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
