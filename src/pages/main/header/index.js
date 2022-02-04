import styled from "styled-components";
import { Avatar, Button, IconButton, Input } from '../../../ui/components';
import { MenuOutlined, VideoIcon, YoutubeLogo } from '../../../ui/icons';

export const Header = () => (
  <HeaderWrapper>
    <Container>
      <IconButton>
        <MenuOutlined />
      </IconButton>

      <LogoContainer>
        <YoutubeLogo />
      </LogoContainer>
    </Container>

    <Container>
      <Input />
      <Button>
        <VideoIcon height='40px' width='50px' />
      </Button>
      {/* <Typograph variant='h1'>cabeça grande</Typograph> */}
      <VideoIcon height='40px' width='50px' />
    </Container>

    <Container>
      <VideoIcon height='40px' width='50px' />
      <VideoIcon height='40px' width='50px' />
      <VideoIcon height='40px' width='50px' />
      <Avatar />
    </Container>
  </HeaderWrapper>
);

const HeaderWrapper = styled.header`
  align-items: center;
  background: ${({ theme }) => theme.pallete.dark.primary};
  display: flex;
  height: ${({ theme }) => theme.baseMeasure * 7}px;
  justify-content: space-between;
  padding: 0 ${({ theme }) => theme.baseMeasure * 2}px;
`;

const Container = styled.div`
  align-items: center;
  display: flex;
`;

const LogoContainer = styled.div`
  // height: 56px;
  padding: 14px 18px;
`;
