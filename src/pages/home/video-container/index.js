import styled from "styled-components";
import { Avatar, Typograph } from '../../../ui/components';

export const VideoContainer = ({ src }) => (
  <VideoContainerWrapper>
    <VideoThumb src={src} />
      <Container>
        <Avatar size='35px' margin='12px 12px 0 0' />

        <VideoItems>
          <VideoInfo>
            <Typograph variant='h2'>Título do vídeo</Typograph>

            <ChannelViews>
              <Typograph variant='h6'>Nome do canal</Typograph>
              <Typograph variant='h6'>47 mil visualizações</Typograph>
            </ChannelViews>
          </VideoInfo>
        </VideoItems>
      </Container>
  </VideoContainerWrapper>
);

const VideoContainerWrapper = styled.div`
  // box-sizing: border-box;
  align-items: center;
  // display: flex;
  flex-direction: column;
  flex-grow: 1;
  // justify-self: center;
  // height: fit-content;
  // justify-content: center;
  margin: 0 0 32px;
`;

const VideoThumb = styled.img.attrs(props => ({
  alt: '',
  src: props.src
}))`
height: 150px;
width: 250px;
`;

const VideoItems = styled.div`
  // display: inline-block;
  // height: 56px;
`;

const Container = styled.div`
  // align-items: center;
  display: flex;
  // justify-content: space-evenly;
  // flex-grow: 1;
`;

const VideoInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  flew-wrap: wrap;
  margin: 12px 0 0;
  padding: 0 24px 0 0;
  // justify-content: space-between;
`;

const ChannelViews = styled.div`
  display: flex;
  flex-direction: column;
`;
