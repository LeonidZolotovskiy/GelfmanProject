import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
} from "react-native";
import styled from "styled-components";
import Footer from "./Footer";
import StatusBarBlack from "./StatusBar";

const General = () => {
  return (
    <Container>
      <StatusBarBlack />
      <List contentContainerStyle={{ paddingBottom: 20 }}>
        <LineMain>
          <ArrowImage source={require("./assets/arrowLeft.png")} />
          <GeneralImage source={require("./assets/General.png")} />
        </LineMain>
        <RowContainer>
          <Space />
          <GeneraImage source={require("./assets/GeneraImage.png")} />
        </RowContainer>
        <Line>
          <LineText>Battery,%</LineText>
          <LineTextLight>19</LineTextLight>
        </Line>
        <Line>
          <LineText>Hours with lamps</LineText>
          <LineTextLight>419</LineTextLight>
        </Line>
        <Line>
          <LineText>Hours standby</LineText>
          <LineTextLight>343</LineTextLight>
        </Line>
        <Line>
          <LineText>Current Time</LineText>
          <LineTextLight>23</LineTextLight>
        </Line>
        <Line>
          <LineText>Off/on switches</LineText>
          <LineTextLight>3343</LineTextLight>
        </Line>
        <Line>
          <LineText>Indication flah time</LineText>
          <LineTextLight>243</LineTextLight>
        </Line>
      </List>
      <Footer />
    </Container>
  );
};

const Container = styled(View)`
  flex: 1;
  background-color: black;
`;

const List = styled(ScrollView)`
  flex: 1;
`;

const LineMain = styled(View)`
  height: 100px;
  flex-direction: row;
  align-items: center;
  padding: 22px;
`;

const ArrowImage = styled(Image)`
  width: 6px;
  height: 12px;
  margin-top: 15px;
`;

const GeneralImage = styled(Image)`
  width: 182px;
  height: 22px;
  resize-mode: contain;
  margin-left: 20px;
  margin-bottom: 24px;
  margin-top: 40px;
`;

const RowContainer = styled(View)`
  flex-direction: row;
  align-items: center;
  width: 100%;
`;

const Space = styled(View)`
  margin: 42px;
`;

const GeneraImage = styled(Image)`
  flex: 1;
  width: 229px;
  height: 284px;
  resize-mode: contain;
  margin-bottom: 24px;
  margin-right:70px;
`;

const Line = styled(View)`
  height: 100px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  border-bottom-width: 1px;
  border-bottom-color: #303030;
  border-bottom-style: solid;
`;

const LineText = styled(Text)`
  color: white;
  font-size: 15px;
  font-style: normal;
  height: 22px;
`;

const LineTextLight = styled(LineText)`
  color: rgba(255, 255, 255, 0.5);
`;

export default General;
