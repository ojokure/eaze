import styled from "styled-components";
import devices from "../Utils/devices";

export const StyledFooterContainer = styled.div`
  width: 100%;
  background: #091524;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 45px;

  .footer {
    background: #091524;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding-bottom: 0.8rem;
    color: white;

    @media ${devices.tablet} {
      flex-direction: column;
      padding-bottom: 0.4rem;
    }

    @media ${devices.mobile} {
      flex-direction: column;
      padding-bottom: 0.4rem;
    }

    .footer-content {
      opacity: 0.8;

      @media ${devices.tablet} {
        padding: 0.5rem 0;
        text-align: center;
      }
      @media ${devices.mobile} {
        padding: 0.2rem 0;
        text-align: center;
      }
    }
  }

  .footer-icons {
    width: 10%;
    display: flex;
    justify-content: space-around;
    .fab {
      font-size: 1.5rem;
    }
  }

  .footer-tribute {
    text-align: center;
  }
`;
