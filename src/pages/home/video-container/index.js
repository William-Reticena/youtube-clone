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
          <Typograph variant='h6'>Nome do canal</Typograph>
        </VideoInfo>
    </VideoItems>
      </Container>
  </VideoContainerWrapper>
);

const VideoContainerWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  // height: fit-content;
  // justify-content: center;
  margin-bottom: 64px;
`;

const VideoItems = styled.div`
  display: inline-block;
`;

const VideoThumb = styled.img.attrs(props => ({
  alt: '',
  src: props.src
}))`
  height: 150px;
  width: 250px;
`;

const Container = styled.div`
  align-items: center;
  display: flex;
  // justify-content: space-evenly;
  // flex-grow: 1;
`;

const VideoInfo = styled.div`
  display: flex;
  flex-direction: column;
  flew-wrap: wrap;
  // justify-content: space-between;
`;
