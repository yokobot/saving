import type { NextPage } from "next";
import React, { useState, useContext, useEffect } from "react";
import { Header, MailContainer, HeaderTitle } from "../../styles/globals";
import {
  Container,
  MainBlock,
  Background,
  MainContentBlock,
  ResultTitleBlock,
  ResultScoreBlock,
  ResultScoreUnitBlock,
  ResultContentBlock,
  Reward,
  ResultSubContentBlock,
  ResultSubContentImgBlock,
  ResultSubContentBalloon,
  Modal,
  ModalBody,
  ModalBodyTextarea,
  ModalBodyTextareaTitle,
  ModalBodyTextareaBody,
} from "../../styles/survey";
import CountUp from "react-countup";
import {
  Section1,
  Section2,
  Section3,
  Section4,
  Section5,
  Section6,
  Section7,
  Context,
} from "../../components/survey";
import { SlideMenu, SideMenuContext } from "../../components/slidemenu";
import { useReward } from "react-rewards";

type Props = {
  sectionNum: number;
};

let cnt = 0;

const SurveyContent = (Props: Props) => {
  const [isOpen, setOpen] = useState(false);
  const { reward, isAnimating } = useReward("rewardId", "confetti", {
    spread: 90,
    elementCount: 150,
  });
  let openClass = "";
  if (isOpen) {
    openClass = "open";
  }

  let sectionNum = Props.sectionNum;
  let b1,
    b2,
    b3,
    b4,
    b5,
    b6,
    b7 = "";
  if (sectionNum === 1) {
    b1 = "view";
  } else if (sectionNum === 2) {
    b2 = "view";
  } else if (sectionNum === 3) {
    b3 = "view";
  } else if (sectionNum === 4) {
    b4 = "view";
  } else if (sectionNum === 5) {
    b5 = "view";
  } else if (sectionNum === 6) {
    b6 = "view";
  } else if (sectionNum === 7) {
    b7 = "view";
  }

  useEffect(() => {
    if (cnt == 0 && sectionNum > 7) {
      setTimeout(reward, 3000);
      cnt++;
    }
  });

  if (sectionNum <= 7) {
    return (
      <MainContentBlock>
        <MainBlock className={b1}>
          <Section1 />
        </MainBlock>
        <MainBlock className={b2}>
          <Section2 />
        </MainBlock>
        <MainBlock className={b3}>
          <Section3 />
        </MainBlock>
        <MainBlock className={b4}>
          <Section4 />
        </MainBlock>
        <MainBlock className={b5}>
          <Section5 />
        </MainBlock>
        <MainBlock className={b6}>
          <Section6 />
        </MainBlock>
        <MainBlock className={b7}>
          <Section7 />
        </MainBlock>
      </MainContentBlock>
    );
  }

  return (
    <>
      <ResultTitleBlock>
        <span>あなたの節電スコアは...</span>
      </ResultTitleBlock>
      <ResultScoreBlock>
        <Reward id="rewardId" />
        <CountUp end={7500} duration={2.5} />
        <ResultScoreUnitBlock>HTT-P</ResultScoreUnitBlock>
      </ResultScoreBlock>
      <ResultContentBlock>
        <ResultSubContentBlock>
          <ResultSubContentImgBlock src="/saving_chan.png" />
          <ResultSubContentBalloon
            onClick={() => {
              setOpen(!isOpen);
            }}
          >
            AIからの節電に関するアドバイスを表示する
          </ResultSubContentBalloon>
        </ResultSubContentBlock>
      </ResultContentBlock>
      <Modal
        className={openClass}
        onClick={() => {
          setOpen(!isOpen);
        }}
      >
        <ModalBody className={openClass + "_anime"}>
          <ModalBodyTextarea className={openClass + "_anime"}>
            <ModalBodyTextareaTitle>
              <p>とてもHTTを意識した行動ができています🎉</p>
            </ModalBodyTextareaTitle>
            <ModalBodyTextareaBody>
              <p>
                あなたのプロフィールと似た人の平均スコアは6584HTT-Pでした。
                <br />
                <br />
                類似ユーザーで冷房を28度以上に設定している人の電気代は平均7500円でした。
                <br />
                <br />
                あなたも冷房を28度以上に設定した場合は電気代をおよそ950円削減できる可能性があります。
              </p>
            </ModalBodyTextareaBody>
          </ModalBodyTextarea>
        </ModalBody>
      </Modal>
    </>
  );
};

const HeroPost = () => {
  const { sectionNum } = useContext(Context);

  return (
    <Background>
      <SurveyContent sectionNum={sectionNum} />
    </Background>
  );
};

const Survey: NextPage = () => {
  const [sectionNum, setSectionNum] = useState(1);
  const [isOpen, setOpen] = useState(false);
  const value = {
    sectionNum,
    setSectionNum,
  };
  return (
    <>
      <SideMenuContext.Provider value={{ isOpen, setOpen }}>
        <SlideMenu />
      </SideMenuContext.Provider>
      <Header>
        <HeaderTitle href="/">Saving</HeaderTitle>
      </Header>
      <MailContainer>
        <Container>
          <Context.Provider value={value}>
            <HeroPost />
          </Context.Provider>
        </Container>
      </MailContainer>
    </>
  );
};

export default Survey;
