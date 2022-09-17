import type { NextPage } from "next";
import React, { useState, createContext, useContext, useRef } from "react";
import internal from "stream";
import { Header, MailContainer } from "../styles/globals";
import {
  Container,
  MainBlock,
  Background,
  MainContentBlock,
  MainTextBlock,
  MainSelectBlock,
  SubSelectBlock,
  SubSelectTextBlock,
  SubSelectInputBlock,
  SubSelectInputText,
  SubSelectInputRadio,
  SubmitBlock,
  SubmitButton,
} from "../styles/survey";
import CountUp from "react-countup";

type Props = {
  title: string;
};

export const Context = createContext(
  {} as {
    sectionNum: number;
    setSectionNum: React.Dispatch<React.SetStateAction<number>>;
  }
);

export const Section1 = () => {
  const { sectionNum, setSectionNum } = useContext(Context);
  return (
    <>
      <MainTextBlock>あなたのプロフィールを教えてください</MainTextBlock>
      <MainSelectBlock>
        <SubSelectBlock>
          <SubSelectTextBlock>性別</SubSelectTextBlock>
          <SubSelectInputBlock>
            <SubSelectInputRadio>
              <input type="radio" name="fruits" />
              <span>女性</span>
            </SubSelectInputRadio>
            <SubSelectInputRadio>
              <input type="radio" name="fruits" />
              <span>男性</span>
            </SubSelectInputRadio>
          </SubSelectInputBlock>
        </SubSelectBlock>
        <SubSelectBlock>
          <SubSelectTextBlock>生年月日</SubSelectTextBlock>
          <SubSelectInputBlock>
            <SubSelectInputText type="text"  placeholder="1990/1/1"/>
          </SubSelectInputBlock>
        </SubSelectBlock>
        <SubSelectBlock>
          <SubSelectTextBlock>お住まいのエリア</SubSelectTextBlock>
          <SubSelectInputBlock>
            <SubSelectInputText type="text" placeholder="江東区"/>
          </SubSelectInputBlock>
        </SubSelectBlock>
      </MainSelectBlock>
      <SubmitBlock>
        <SubmitButton onClick={() => setSectionNum(sectionNum + 1)}>
          Next
        </SubmitButton>
      </SubmitBlock>
    </>
  );
};

export const Section2 = () => {
  const { sectionNum, setSectionNum } = useContext(Context);
  return (
    <>
      <MainTextBlock>
        あなたのライフスタイルについて教えてください
      </MainTextBlock>
      <MainSelectBlock>
        <SubSelectBlock>
          <SubSelectTextBlock>お住まいの家族構成</SubSelectTextBlock>
          <SubSelectInputBlock>
            <SubSelectInputText type="text" /><span>人</span>
          </SubSelectInputBlock>
        </SubSelectBlock>
        <SubSelectBlock>
          <SubSelectTextBlock>職業</SubSelectTextBlock>
          <SubSelectInputBlock>
            <SubSelectInputText type="text" />
          </SubSelectInputBlock>
        </SubSelectBlock>
      </MainSelectBlock>
      <SubmitBlock>
        <SubmitButton onClick={() => setSectionNum(sectionNum + 1)}>
          Next
        </SubmitButton>
      </SubmitBlock>
    </>
  );
};

export const Section3 = () => {
  const { sectionNum, setSectionNum } = useContext(Context);
  return (
    <>
      <MainTextBlock>月々の電気代について教えてください</MainTextBlock>
      <MainSelectBlock>
        <SubSelectBlock>
          <SubSelectTextBlock>電気代</SubSelectTextBlock>
          <SubSelectInputBlock>
            <SubSelectInputText type="text" />
          </SubSelectInputBlock>
        </SubSelectBlock>
      </MainSelectBlock>
      <SubmitBlock>
        <SubmitButton onClick={() => setSectionNum(sectionNum + 1)}>
          Next
        </SubmitButton>
      </SubmitBlock>
    </>
  );
};

export const Section4 = () => {
  const { sectionNum, setSectionNum } = useContext(Context);
  return (
    <>
      <MainTextBlock>
        いつものエアコン設定温度について教えてください
      </MainTextBlock>
      <MainSelectBlock>
        <SubSelectBlock>
          <SubSelectTextBlock>暖房の設定温度</SubSelectTextBlock>
          <SubSelectInputBlock>
            <SubSelectInputRadio>
                <input type="radio" name="Section4-1" />
                <span>20度以下</span>
              </SubSelectInputRadio>
              <SubSelectInputRadio>
                <input type="radio" name="Section4-1" />
                <span>21度以上</span>
              </SubSelectInputRadio>
          </SubSelectInputBlock>
        </SubSelectBlock>
        <SubSelectBlock>
          <SubSelectTextBlock>冷房の設定温度</SubSelectTextBlock>
          <SubSelectInputBlock>
            <SubSelectInputRadio>
                <input type="radio" name="Section4-2" />
                <span>27度以下</span>
              </SubSelectInputRadio>
              <SubSelectInputRadio>
                <input type="radio" name="Section4-2" />
                <span>28度以上</span>
              </SubSelectInputRadio>
          </SubSelectInputBlock>
        </SubSelectBlock>
      </MainSelectBlock>
      <SubmitBlock>
        <SubmitButton onClick={() => setSectionNum(sectionNum + 1)}>
          Next
        </SubmitButton>
      </SubmitBlock>
    </>
  );
};

export const Section5 = () => {
  const { sectionNum, setSectionNum } = useContext(Context);
  return (
    <>
      <MainTextBlock>冷蔵庫の詰め込み具合を教えてください</MainTextBlock>
      <MainSelectBlock>
        <SubSelectBlock>
          <SubSelectTextBlock>詰め込み度</SubSelectTextBlock>
          <SubSelectInputBlock>
            <SubSelectInputRadio>
              <input type="radio" name="Section5-1" />
              <span>スカスカ</span>
            </SubSelectInputRadio>
            <SubSelectInputRadio>
              <input type="radio" name="Section5-1" />
              <span>普通</span>
            </SubSelectInputRadio>
            <SubSelectInputRadio>
              <input type="radio" name="Section5-1" />
              <span>パンパン</span>
            </SubSelectInputRadio>
          </SubSelectInputBlock>
        </SubSelectBlock>
      </MainSelectBlock>
      <SubmitBlock>
        <SubmitButton onClick={() => setSectionNum(sectionNum + 1)}>
          Next
        </SubmitButton>
      </SubmitBlock>
    </>
  );
};

export const Section6 = () => {
  const { sectionNum, setSectionNum } = useContext(Context);
  return (
    <>
      <MainTextBlock>
        EV・太陽光発電の導入状況について教えてください
      </MainTextBlock>
      <MainSelectBlock>
        <SubSelectBlock>
          <SubSelectTextBlock>EVを持っている</SubSelectTextBlock>
          <SubSelectInputBlock>
            <SubSelectInputRadio>
              <input type="radio" name="Section6-1" />
              <span>YES</span>
            </SubSelectInputRadio>
            <SubSelectInputRadio>
              <input type="radio" name="Section6-1" />
              <span>NO</span>
            </SubSelectInputRadio>
          </SubSelectInputBlock>
        </SubSelectBlock>
        <SubSelectBlock>
          <SubSelectTextBlock>自宅で太陽光発電している</SubSelectTextBlock>
          <SubSelectInputBlock>
            <SubSelectInputRadio>
              <input type="radio" name="Section6-2" />
              <span>YES</span>
            </SubSelectInputRadio>
            <SubSelectInputRadio>
              <input type="radio" name="Section6-2" />
              <span>NO</span>
            </SubSelectInputRadio>
          </SubSelectInputBlock>
        </SubSelectBlock>
      </MainSelectBlock>
      <SubmitBlock>
        <SubmitButton onClick={() => setSectionNum(sectionNum + 1)}>
          Next
        </SubmitButton>
      </SubmitBlock>
    </>
  );
};

export const Section7 = () => {
  const { sectionNum, setSectionNum } = useContext(Context);
  return (
    <>
      <MainTextBlock>その他家電の節電状況について教えてください</MainTextBlock>
      <MainSelectBlock>
        <SubSelectBlock>
          <SubSelectTextBlock>炊飯器の長時間保温はOFF</SubSelectTextBlock>
          <SubSelectInputBlock>
            <SubSelectInputRadio>
              <input type="radio" name="Section7-1" />
              <span>YES</span>
            </SubSelectInputRadio>
            <SubSelectInputRadio>
              <input type="radio" name="Section7-1" />
              <span>NO</span>
            </SubSelectInputRadio>
          </SubSelectInputBlock>
        </SubSelectBlock>
        <SubSelectBlock>
          <SubSelectTextBlock>電気ポットの長時間保温はOFF</SubSelectTextBlock>
          <SubSelectInputBlock>
            <SubSelectInputRadio>
              <input type="radio" name="Section7-2" />
              <span>YES</span>
            </SubSelectInputRadio>
            <SubSelectInputRadio>
              <input type="radio" name="Section7-2" />
              <span>NO</span>
            </SubSelectInputRadio>
          </SubSelectInputBlock>
        </SubSelectBlock>
        <SubSelectBlock>
          <SubSelectTextBlock>冬以外は温水設定はOFF</SubSelectTextBlock>
          <SubSelectInputBlock>
            <SubSelectInputRadio>
              <input type="radio" name="Section7-3" />
              <span>YES</span>
            </SubSelectInputRadio>
            <SubSelectInputRadio>
              <input type="radio" name="Section7-3" />
              <span>NO</span>
            </SubSelectInputRadio>
          </SubSelectInputBlock>
        </SubSelectBlock>
      </MainSelectBlock>
      <SubmitBlock>
        <SubmitButton onClick={() => setSectionNum(sectionNum + 1)}>
          Next
        </SubmitButton>
      </SubmitBlock>
    </>
  );
};
