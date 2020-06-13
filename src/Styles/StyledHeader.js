import styled from "styled-components";
import devices from "../Utils/devices";

export const StyledHeader = styled.div`
  background-color: #0b1a31;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  color: white;
  padding-bottom: 80px;
  margin: 0px 30px;

  @media ${devices.tablet} {
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    text-align: center;
  }
  @media ${devices.mobile} {
    flex-direction: column;
    justify-content: flex-start;
    text-align: center;
    margin-bottom: 20px;
  }

  .header-text {
    margin-top: 3px;
    @media ${devices.tablet} {
      flex-direction: column;

      margin-bottom: 40px;
    }
    @media ${devices.mobile} {
      flex-direction: column;
      margin-left: 0;
      margin-bottom: 30px;
    }
  }

  h1 {
    @media ${devices.tablet} {
      display: flex;
      justify-content: center;
      flex-direction: column;
    }
  }

  .header-img {
    width: 50%;
    margin-top: 28px;
    margin-right: 12px;
    padding-bottom: 0px;
    background-color: #0b1a31;
    @media ${devices.tablet} {
      width: 100%;
    }
    @media ${devices.mobile} {
      padding-right: 0;
    }
  }

  #search {
    padding: 0.8em;
    padding-left: 0px;
    border-radius: 0.3em;
    border: none;
    background: #f9f7ff;
    align-items: center;
    width: 300px;
    color: #6d6d6d;

    @media ${devices.tablet} {
      width: 80%;
    }
  }
`;

export const StyledHeaderButton = styled.button`
  padding: 0.8em;
  border-radius: 0.3em;
  margin-left: 10px;
  border: none;
  background: #007ee5;
  color: white;
  align-items: center;
  width: 80px;
`;
