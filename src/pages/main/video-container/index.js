import styled from "styled-components";
import { Avatar, Typograph } from '../../../ui/components';

export const VideoContainer = ({ src }) => (
  <VideoContainerWrapper>
    <VideoThumb src={src} />

    <Container>
      <Avatar height='35px' />

      <VideoInfo>
        <Typograph variant='h2'>Título do vídeo</Typograph>
        <Typograph variant='h6'>Nome do canal</Typograph>
      </VideoInfo>
    </Container>
  </VideoContainerWrapper>
);

const VideoContainerWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: fit-content;
`;

const VideoThumb = styled.img.attrs(props => ({
  alt: '',
  src: props.src
}))`
  height: 150px;
  width: 270px;
`;

const Container = styled.div`
  align-items: center;
  display: flex;
`;

const VideoInfo = styled.div``;
