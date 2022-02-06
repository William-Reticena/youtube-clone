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
  background: #181818;
  box-sizing: border-box;
  // display: flex;
  // flex-wrap: wrap;
  height: 100%;
  padding: 8px;
`;

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  // height: 300px;
  justify-content: space-between;
  margin: 0 16px;
`;
