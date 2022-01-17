import * as React from "react";
import { ethers } from "ethers";
import styled from "styled-components";

export default function App() {

  const wave = () => {
    
  }
  
  return (
    <MainContainer>
      <DataContainer>
        <Header>
        👋 Hey there!
        </Header>
        <Bio>
        Yo this is your boy James and here is my app...
        </Bio>
        <WaveButton onClick={wave}>
          Wave at Me
        </WaveButton>
      </DataContainer>
    </MainContainer>
  );
}

const MainContainer = styled.div`
	display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 64px;
`;

const DataContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	max-width: 600px;
`;

const Header = styled.div`
	text-align: center;
	font-size: 32px;
	font-weight: 600;
`;

const Bio = styled.div`
	text-align: center;
	color: gray;
	margin-top: 16px;
`;

const WaveButton = styled.button`
	cursor: pointer;
	margin-top: 16px;
	padding: 8px;
	border: 0;
	border-radius: 5px;
`;
