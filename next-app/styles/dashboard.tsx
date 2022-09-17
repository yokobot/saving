import styled from "styled-components";

const Title = styled.h1``;

export const SubContainer = styled.div`
  display: block;
  position: relative;
  width: 50%;
  min-width: 500px;
  height: auto;
  padding: 0 50px;
`;

export const MainBlock = styled.div`
  display: block;
  position: relative;
  width: 100%;
  height: auto;
  min-height: 100px;
  margin: 20px 0;
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

export const MainBlockTitle = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: auto;
  padding: 10px;
  font-size: 1.5vmax;
  font-weight: bold;
  color: white;
`;

export const MainBlockScore = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: auto;
  padding: 30px;
  align-items: center;
  justify-content: center;
  font-size: 2vmax;
  font-weight: bold;
`;

export const GraphBlock = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  padding: 50px 0px;
`;
