import styled, { keyframes } from "styled-components";

export const Header = styled.header`
  display: flex;
  position: relative;
  left: 0;
  width: 100%;
  height: 65px;
  min-width: 500px;
  align-items: center;
  justify-content: center;
  &&::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    box-shadow: 6px 9px 11px -2px rgba(0, 0, 0, 0.45);
    background-color: rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(5px);
    border-radius: 5px;
  }
`;

export const HeaderTitle = styled.a`
  display: flex;
  position: relative;
  width: auto;
  height: auto;
  font-size: 50px;
  font-weight: bold;
`;

const gradientBG = keyframes`
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
`;

export const BackgroundContainer = styled.div`
  position: relative;
  width: auto;
  height: auto;
  min-width: 100vw;
  min-height: 100vh;
  background: radial-gradient(
    circle at 75% 0%,
    rgba(58, 99, 255, 1),
    rgba(48, 149, 253, 1) 61%,
    rgba(42, 179, 252, 1) 97%
  );
  background-size: 1000% 1000%;
  animation: ${gradientBG} 10s ease infinite;
  color: white;
`;

export const MailContainer = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: auto;
  min-height: calc(100vh - 65px);
`;

const MenuOpen = keyframes`
    0% {
        width: 0px;
    }
    100% {
        width: 300px;
    }
`;

const MenuClose = keyframes`
    0% {
        width: 300px;
    }
    100% {
        width: 0px;
    }
`;

const MenuOpen_1 = keyframes`
    0% {
        transform: translateY(-25%) rotate(0deg);
        top: 25%;
    }
    25% {
        transform: translateY(-30%) rotate(105deg);
        top: 30%;
    }
    50% {
        transform: translateY(-35%) rotate(205deg);
        top: 35%;
    }
    75% {
        transform: translateY(-40%) rotate(305deg);
        top: 40%;
    }
    100% {
        transform: translateY(-50%) rotate(405deg);
        top: 50%;
    }

`;

const MenuOpen_2 = keyframes`
    0% {
        transform: translateY(-75%) rotate(0);
        top: 75%;
    }
    25% {
        transform: translateY(-70%) rotate(-105deg);
        top: 70%;
    }
    50% {
        transform: translateY(-65%) rotate(-205deg);
        top: 65%;
    }
    75% {
        transform: translateY(-60%) rotate(-305deg);
        top: 60%;
    }
    100% {
        transform: translateY(-50%) rotate(-405deg);
        top: 50%;
    }
`;

const MenuClose_1 = keyframes`
    0% {
        transform: translateY(-50%) rotate(-45deg);
        top: 50%;
    }
    100% {
        transform: rotate(0deg) translateY(-25%);
        top: 25%;
    }
`;

const MenuClose_2 = keyframes`
    0% {
        transform: translateY(-50%) rotate(-45deg);
        top: 50%;
    }
    100% {
        transform: translateY(-75%) rotate(0deg);
        top: 75%;
    }
`;

const move_forever = keyframes`
    0% {
        transform: translate3d(-90px,0,0);
    }
    100% {
        transform: translate3d(85px,0,0);
    }
`;

export const StyledSideMenu = styled("div")<{ isOpen: boolean }>`
  position: fixed;
  display: flex;
  z-index: 9999;
  left: 0;
  width: ${(props) => (props.isOpen ? "100%" : "0")};
  height: 100%;
  &&::after {
    content: "";
    position: fixed;
    display: ${(props) => (props.isOpen ? "flex" : "none")};
    z-index: -1;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
  }
  && > div[class="sideMenuButton"] {
    position: absolute;
    top: 0;
    left: 0;
    width: auto;
    height: auto;
    & > input {
      display: none;
      & + label[data-load="true"][data-open="true"] span:nth-child(1) {
        animation: ${MenuOpen_1} 0.3s linear forwards;
      }
      & + label[data-load="true"][data-open="true"] span:nth-child(2) {
        display: none;
      }
      & + label[data-load="true"][data-open="true"] span:nth-child(3) {
        animation: ${MenuOpen_2} 0.3s linear forwards;
      }
      & + label[data-load="true"][data-open="false"] span:nth-child(1) {
        animation: ${MenuClose_1} 0.1s linear forwards;
      }
      & + label[data-load="true"][data-open="false"] span:nth-child(3) {
        animation: ${MenuClose_2} 0.1s linear forwards;
      }
    }
    & > label {
      position: fixed;
      width: ${(props) => (props.isOpen ? "100%" : "10vmin")};
      height: ${(props) => (props.isOpen ? "100%" : "5%")};
      & > div {
        position: fixed;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 10vmin;
        height: 5%;
        cursor: pointer;
        & > span {
          position: absolute;
          display: block;
          width: 50%;
          height: 10%;
          background: #ffffff;
        }
        & > span:nth-child(1) {
          top: 25%;
          transform: translateY(-25%);
        }
        & > span:nth-child(2) {
          top: 50%;
          transform: translateY(-50%);
        }
        & > span:nth-child(3) {
          top: 75%;
          transform: translateY(-75%);
        }
      }
    }
  }
  && > div[class="sideMenuBodyclose"] {
    display: none !important;
  }
  && > div[class="sideMenuBody"] {
    position: absolute;
    top: 65px;
    left: 0;
    width: 0;
    height: 95%;
    background-color: ghostwhite;
    overflow-y: auto;
    & > div[class="sideMenuTitle"] {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      min-height: 100px;
      background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
      background-size: 1000% 100%;
      backdrop-filter: blur(5px);
      background-clip: text;
      -webkit-background-clip: text;
      color: transparent;
      font-size: ${(props) => (props.isOpen ? "50px" : "0")};
      font-weight: bold;
      animation: ${gradientBG} 10s ease infinite;
    }
    & > div[class="sideMenuContents"] {
      position: relative;
      display: flex;
      flex-flow: column;
      width: 100%;
      min-height: 200px;
      background-color: transparent;
      overflow: hidden;
      & > div[class*="sideMenuContent_"] {
        position: relative;
        display: flex;
        flex-flow: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        min-height: 50px;
        cursor: pointer;
        color: black;
        & > div[class="bl_sideMenuContentName"] {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 50px;
        }
        &:hover > div[class="bl_sideMenuContentName"] {
          & > h2 {
            & > span {
              background: linear-gradient(
                -45deg,
                #ee7752,
                #e73c7e,
                #23a6d5,
                #23d5ab,
                #ee7752,
                #e73c7e,
                #23a6d5,
                #23d5ab
              );
              background-size: 1000% 400%;
              backdrop-filter: blur(5px);
              background-clip: text;
              -webkit-background-clip: text;
              color: transparent;
              font-size: 20px;
              font-weight: bold;
              animation: ${gradientBG} 5s linear infinite;
            }
          }
        }
        & > input {
          display: none;
          & + label {
            position: absolute;
            z-index: 1;
            width: 100%;
            height: 100%;
            cursor: pointer;
          }
          & ~ div[class="bl_sideMenuList"] {
            display: none;
          }
          &:checked ~ div[class="bl_sideMenuList"] {
            position: relative;
            display: flex;
            flex-flow: column;
            z-index: 2;
            width: 100%;
            white-space: nowrap;
            & > h3 {
              position: relative;
              display: flex;
              align-items: center;
              max-width: 100%;
              height: 30px;
              padding-left: 20%;
              overflow: hidden;
              &:hover {
                color: white;
                background: gray;
              }
              & > svg {
                margin-right: 10px;
              }
            }
          }
          & ~ div[class="bl_sideMenuContentName"] {
            & > span[class="el_sideMenuListExtend"] {
              position: absolute;
              left: 20%;
            }
          }
          &:checked ~ div[class="bl_sideMenuContentName"] {
            & > span[class="el_sideMenuListExtend"] {
              transform: rotate(90deg);
            }
          }
        }
      }
      & > div[class*="sideMenuContent_"][data-selected="true"] {
        background: linear-gradient(
          60deg,
          rgba(84, 58, 183, 1) 0%,
          rgba(0, 172, 193, 1) 100%
        );
        font-size: 20px;
        & > div[class="bl_sideMenuContentName"] {
          & > h2 {
            & > span {
              color: white;
            }
          }
        }
      }
    }
    & > div[class="sideMenuWave"] {
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 10%;
      & > svg[class="waves"] {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 30px;
        & > g[class="parallax"] {
          & > use {
            animation: ${move_forever} 25s cubic-bezier(0.55, 0.5, 0.45, 0.5)
              infinite;
          }
          & > use:nth-child(1) {
            fill: rgba(0, 175, 255, 0.6);
            animation-delay: -2s;
            animation-duration: 7s;
          }
          & > use:nth-child(2) {
            fill: rgba(0, 175, 255, 0.4);
            animation-delay: -3s;
            animation-duration: 10s;
          }
          & > use:nth-child(3) {
            fill: rgba(0, 175, 255, 0.3);
            animation-delay: -4s;
            animation-duration: 13s;
          }
          & > use:nth-child(4) {
            fill: rgba(0, 175, 255, 0.9);
            animation-delay: -5s;
            animation-duration: 20s;
          }
        }
      }
    }
  }
  && > div[class="sideMenuBody"][data-load="true"][data-open="true"] {
    animation: ${MenuOpen} 0.2s linear forwards;
  }
  && > div[class="sideMenuBody"][data-load="true"][data-open="false"] {
    animation: ${MenuClose} 0.2s linear forwards;
  }
`;
