import styled, { keyframes } from "styled-components";

const Title = styled.h1``;

const MenuOpen = keyframes`
    0% {
        opacity: 0;
        transform: translateY(20px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
`;

export const Container = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: auto;
  min-width: 500px;
  min-height: calc(100vh - 65px);
  align-items: center;
  justify-content: center;
`;

export const MainBlock = styled.div`
  display: none;
  position: relative;
  width: 100%;
  height: 100%;
  min-width: 800px;
  margin: 20px 0;
  padding: 0 50px;
  &.view {
    display: block !important;
    animation: ${MenuOpen} 1s ease 1 normal backwards;
  }
`;

export const MainContentBlock = styled.div`
  position: relative;
  width: auto;
  height: auto;
  min-width: 100px;
  min-height: 100px;
  margin: 0;
  padding: 0 50px;
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

export const Background = styled.div`
  display: flex;
  flex-flow: column;
  position: relative;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

export const MainTextBlock = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 100px;
  padding: 0 50px;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: bold;
`;

export const MainSelectBlock = styled.div`
  display: flex;
  flex-flow: column;
  position: relative;
  width: 100%;
  height: auto;
`;

export const SubSelectBlock = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 100px;
`;

export const SubSelectTextBlock = styled.div`
  display: flex;
  position: relative;
  width: 50%;
  height: 100%;
  padding-left: 50px;
  align-items: center;
  justify-content: left;
  font-size: 20px;
  font-weight: bold;
`;

export const SubSelectInputBlock = styled.div`
  display: flex;
  position: relative;
  width: 50%;
  height: auto;
  align-items: center;
  justify-content: left;
  padding-left: 50px;
`;

export const SubSelectInputText = styled.input`
    position: relative;
    width: 80%;
    height: 50%;
    padding-left: 10px;
    font-size: 16px;
    border-radius: 3px;
    border: 2px solid #ddd;
    box-sizing: border-box;
    background-color: white;
    color: black;
    &&:focus {
        border: 2px solid #ff9900; 
        z-index: 10;
        outline: 0;
`;

export const SubSelectInputRadio = styled.label`
  position: relative;
  width: 100px;
  height: 50px;
  cursor: pointer;
  && + label {
    margin-left: 30px;
  }
  && > input {
    display: none;
  }
  && > span {
    display: flex;
    position: relative;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    background-color: blue;
    opacity: 0.5;
    border-radius: 10px;
  }
  && > input:checked + span {
    opacity: 1;
  }
`;

export const InputBlock = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 100%;
  margin: 20px 0;
  padding: 0 50px;
  background-color: blue;
  &.view {
    display: block !important;
  }
`;

export const CheckBoxBlock = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 100%;
  margin: 20px 0;
  padding: 0 50px;
  background-color: blue;
  &.view {
    display: block !important;
    animation: ${MenuOpen} 5s ease 1s 1 normal backwards;
  }
`;

export const SubmitBlock = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 150px;
  align-items: center;
  justify-content: center;
`;

export const SubmitButton = styled.button`
  display: flex;
  position: relative;
  width: 200px;
  height: 80px;
  align-items: center;
  justify-content: center;
  background-color: #ff3d00a1;
  border: 2px solid #ddd;
  border-radius: 10px;
  cursor: pointer;
  font-size: 20px;
  font-weight: bold;
  &&:hover {
    background-color: #ff3d00;
  }
`;

const result = keyframes`
    0% {
      font-size: 0px;
    }
    100% {
      font-size: clamp(50px, 10vmax, 10vmax);
    }
`;

const zoomInOut = keyframes`
  0% {
    font-size: clamp(50px, 10vmax, 10vmax);
  }
  50% {
    font-size: clamp(50px, 15vmax, 15vmax);
  }
  100% {
    font-size: clamp(50px, 10vmax, 10vmax);
  }
`;

export const ResultTitleBlock = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 200px;
  min-width: 500px;
  align-items: center;
  justify-content: center;
  font-size: clamp(20px, 5vmax, 5vmax);
  font-weight: bold;
  color: white;
`;

export const ResultScoreBlock = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: auto;
  min-width: 500px;
  align-items: center;
  justify-content: center;
  min-height: 300px;
  font-weight: bold;
  animation: ${result} 1s ease 1 normal forwards, ${zoomInOut} 0.3s ease 2.8s;
`;

export const ResultScoreUnitBlock = styled.span`
  display: flex;
  position: absolute;
  width: 20%;
  right: 100px;
  font-size: clamp(20px, 2vmax, 2vmax);
`;

export const ResultContentBlock = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: auto;
  min-width: 500px;
`;

export const ResultSubContentBlock = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: auto;
  min-height: 200px;
  justify-content: center;
`;

export const ResultSubContentImgBlock = styled.img`
  display: flex;
  position: relative;
  width: 10%;
  height: auto;
  min-height: 200px;
`;

export const ResultSubContentBalloon = styled.div`
  display: flex;
  position: relative;
  margin: 0 0 13em 40px;
  padding: 15px;
  background: rgb(175 0 255);
  border-radius: 30px;
  cursor: pointer;
  &&::before {
    content: "";
    position: absolute;
    left: -40px;
    width: 13px;
    height: 12px;
    bottom: 0;
    background: rgb(175 0 255);
    border-radius: 50%;
  }
  &&::after {
    content: "";
    position: absolute;
    left: -24px;
    width: 20px;
    height: 18px;
    bottom: 3px;
    background: rgb(175 0 255);
    border-radius: 50%;
  }
`;

export const Reward = styled.span`
  position: absolute;
  width: 0;
  height: 0;
`;

const modalOpen = keyframes`
  0% {
    width: 0;
    height: 0;
  }
  50% {
    width: 10%;
    height: 50%;
  }
  100% {
    width: 50%;
    height: 50%;
  }
`;

export const Modal = styled.div`
  display: none;
  &.open {
    display: flex;
    position: fixed;
    width: 100%;
    height: calc(100% - 65px);
    z-index: 10;
    align-items: center;
    justify-content: center;
    background: #ffffff9e;
  }
`;

export const ModalBody = styled.div`
  display: none;
  &.open_anime {
    display: flex;
    position: relative;
    width: 50%;
    height: 50%;
    z-index: 1;
    background: #ffffff;
    animation: ${modalOpen} 1s ease 1 normal forwards;
  }
`;

const textOpacity = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const ModalBodyTextarea = styled.div`
  display: none;
  overflow: hidden;
  color: gray;
  &.open_anime {
    display: flex;
    flex-flow: column;
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 1;
    background: #ffffff;
    align-items: center;
    justify-content: center;
    opacity: 0;
    animation: ${textOpacity} 1s ease 1s 1 normal forwards;
  }
`;

export const ModalBodyTextareaTitle = styled.div`
  display: flex;
  width: 100%;
  height: 30%;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  font-size: 20px;
  font-weight: bold;
`;

export const ModalBodyTextareaBody = styled.div`
  display: flex;
  width: 100%;
  height: 70%;
  justify-content: center;
  overflow: hidden;
  font-size: 20px;
`;
