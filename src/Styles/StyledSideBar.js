import styled from "styled-components";
import devices from "../Utils/devices";

export const StyledSideBar = styled.div`
  width: 16rem;
  height: auto;
  padding-right: 1.5rem;
  margin-left: 2rem;
  margin-right: 0.5rem;
  color: white;
  text-align: center;
  background: #091524;
  margin-top: 0.5rem;
  position: -webkit-sticky;
  position: sticky;
  top: 10px;
  box-shadow: 0px 1px 2px #12c0cb;
  font-family: "Source Sans Pro", sans-serif;

  &:hover {
    box-shadow: 0 2px 4px #d3d3d3;
  }

  @media ${devices.tablet} {
    margin-left: 1.6rem;
    margin-right: 1.6rem;
  }

  @media ${devices.mobile} {
    display: none;
  }

  .side-bar-menu {
    font-family: "Source Sans Pro", sans-serif;
    padding: 10px;

    .all {
      font-family: "Source Sans Pro", sans-serif;
    }

    .bar-menu {
      font-family: "Source Sans Pro", sans-serif;
      padding: 7px;

      :hover {
        text-decoration: underline;
      }
    }
  }
  .title-bar {
    margin-top: 10px;
    text-decoration: underline;
    font-family: "Source Sans Pro", sans-serif;
    font-weight: bolder;
  }

  #search1 {
    padding: 0.65em;
    border-radius: 0.3em;
    border: none;
    background: #f9f7ff;
    align-items: center;
    width: 100px;
    color: #6d6d6d;
  }
  #search2 {
    padding: 0.65em;
    border-radius: 0.3em;
    border: none;
    background: #f9f7ff;
    align-items: center;
    width: 100px;
    color: #6d6d6d;
  }
`;
