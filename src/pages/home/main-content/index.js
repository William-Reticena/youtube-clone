import styled from "styled-components";
import { VideoContainer } from '../video-container';

 export const MainContent = ({ src }) => (
  <MainContentWrapper>
    <Content>
      {[1,2,3,4,5,6,7,8,].map(item => (
        <VideoContainer src={src} />
      ))}
    </Content>
  </MainContentWrapper>
 );

const MainContentWrapper = styled.main`
  // align-content: center;
  background: #181818;
  box-sizing: border-box;
  // display: flex;
  // flex-wrap: wrap;
  // justify-content: center;
  height: 100%;
  padding: 8px;
`;

const Content = styled.div`
  align-items: center;
  // box-sizing: border-box;
  display: flex;
  flex-grow: 1;
  flex-wrap: wrap;
  // height: 300px;
  // justify-content: center;
  // justify-items: center;
  margin: 0 16px;
`;
