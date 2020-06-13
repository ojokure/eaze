import styled from "styled-components";
import devices from "../Utils/devices";

export const StyledMarketplace = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  /* width: 100%; */
  margin-top: 5rem;

  @media ${devices.tablet} {
    margin-top: 1rem;
    margin-bottom: 50px;
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
  /* @media ${devices.mobile} {
    margin-top: 1rem;
    margin-bottom: 50px;
  } */
`;
