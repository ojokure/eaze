import styled from "styled-components";
import devices from "../Utils/devices";

export const StyledMarketplace = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 5rem;

  @media ${devices.tablet} {
    margin-top: 1rem;
    margin-bottom: 50px;
  }

  @media ${devices.mobile} {
    justify-content: center;
  }
`;

export const StyledDevices = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 70%;
  justify-content: space-between;
  color: white;
  margin-right: 1.5rem;

  @media ${devices.tablet} {
    justify-content: center;
    align-items: flex-start;
    text-align: center;
  }
  @media ${devices.mobile} {
    flex-direction: row;
  
  }
`;
