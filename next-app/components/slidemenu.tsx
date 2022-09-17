import React, { useState, createContext, useContext, useRef } from "react";
import { StyledSideMenu } from "../styles/globals";

export const SideMenuContext = createContext(
  {} as {
    isOpen: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  }
);

export const SlideMenu = () => {
  const { isOpen, setOpen } = useContext(SideMenuContext);
  let closeClass = "";
  if (!isOpen) {
    closeClass = "close";
  }

  return (
    <StyledSideMenu isOpen={isOpen}>
      <div className="sideMenuButton">
        <input type="checkbox" id="sideMenuOpen" />
        <label
          htmlFor="sideMenuOpen"
          data-load={true}
          data-open={isOpen}
          onClick={() => setOpen(!isOpen)}
        >
          <div>
            <span />
            <span />
            <span />
          </div>
        </label>
      </div>
      <div
        className={`sideMenuBody${closeClass}`}
        data-load={true}
        data-open={isOpen}
      >
        <div className="sideMenuTitle">HELLO!</div>
        <div className="sideMenuContents">
          <div className="sideMenuContent_1">
            <div className="bl_sideMenuContentName">
              <h2>
                <span>
                  <a href="/survey">節電スコア診断</a>
                </span>
              </h2>
            </div>
          </div>
          <div className="sideMenuContent_2">
            <div className="bl_sideMenuContentName">
              <h2>
                <span>利用規約</span>
              </h2>
            </div>
          </div>
          <div className="sideMenuContent_3">
            <div className="bl_sideMenuContentName">
              <h2>
                <span>ヘルプ</span>
              </h2>
            </div>
          </div>
          <div className="sideMenuContent_4">
            <input type="checkbox" id="sideMenulink" />
            <label htmlFor="sideMenulink"></label>
            <div className="bl_sideMenuContentName">
              <span className="el_sideMenuListExtend"></span>
              <h2>
                <span>Link</span>
              </h2>
            </div>
            <div className="bl_sideMenuList">
              <h3>STOP</h3>
              <h3>DMM.COM</h3>
              <h3>TEST.com</h3>
              <h3>aaaa.com</h3>
            </div>
          </div>
        </div>
        <div className="sideMenuWave">
          <svg
            className="waves"
            xmlns="http://www.w3.org/2000/svg"
            xlinkHref="http://www.w3.org/1999/xlink"
            viewBox="0 24 150 28"
            preserveAspectRatio="none"
            shapeRendering="auto"
          >
            <defs>
              <path
                id="gentle-wave"
                d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
              />
            </defs>
            <g className="parallax">
              <use href="#gentle-wave" x="48" y="0" />
              <use xlinkHref="#gentle-wave" x="48" y="3" />
              <use xlinkHref="#gentle-wave" x="48" y="5" />
              <use xlinkHref="#gentle-wave" x="48" y="7" />
            </g>
          </svg>
        </div>
      </div>
    </StyledSideMenu>
  );
};
