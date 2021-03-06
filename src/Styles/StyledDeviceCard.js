import styled from "styled-components";
import devices from "../Utils/devices";

export const StyledDeviceCard = styled.div`
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 11rem;
  height: 17rem;
  padding: 1rem;
  margin: 0.5rem;
  margin-bottom: 3.5rem;
  color: white;
  text-align: center;
  background: #091524;
  font-family: "Source Sans Pro", sans-serif;
  box-shadow: 0px 1px 2px #12c0cb;

  @media ${devices.mobile} {
    margin-left: 35px;
    width: 11rem;
  }

  .condition {
    display: flex;
    justify-content: flex-end;
    width: 100%;
    font-family: "Source Sans Pro", sans-serif;
    padding-bottom: 0;
    margin-bottom: 0;
  }

  .mid-sec {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    font-family: "Source Sans Pro", sans-serif;
    .card-img {
      height: 5.5rem;
      margin-right: 55px;
    }

    .name {
      margin-top: 10px;
      font-family: "Source Sans Pro", sans-serif;
    }
    h3 {
      font-family: "Source Sans Pro", sans-serif;
      margin-top: 0;
    }

    p {
      font-family: "Source Sans Pro", sans-serif;
      margin-top: 0;
    }

    .unit-price {
      font-family: "Source Sans Pro", sans-serif;
    }
  }
  .buy-button {
    align-items: center;
    font-family: "Source Sans Pro", sans-serif;
  }

  :hover {
    box-shadow: 0 2px 4px #d3d3d3;
  }
`;

export const StyledButton = styled.button`
  padding: 0.6em;
  width: 90px;
  font-family: "Crimson Text", serif;
  font-size: 0.85rem;
  border-radius: 0.3em;
  margin-left: 10px;
  border: none;
  background: #007ee5;
  color: white;
  align-items: center;
`;
