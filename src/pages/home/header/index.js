import styled from "styled-components";
import { Avatar, Button, IconButton, Input } from '../../../ui/components';
import {
  AppsIcon,
  MagnifyingGlass,
  MenuOutlined,
  Microphone,
  NotificationIcon,
  VideoIcon,
  YoutubeLogo
} from '../../../ui/icons';

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
        <MagnifyingGlass />
      </Button>

      <IconButton>
        <Microphone />
      </IconButton>
    </Container>

    <Container>
      <IconButton>
        <VideoIcon />
      </IconButton>

      <IconButton>
        <AppsIcon />
      </IconButton>

      <IconButton>
        <NotificationIcon />
      </IconButton>

      <Avatar size='32px' />
    </Container>
  </HeaderWrapper>
);

const HeaderWrapper = styled.header`
  align-items: center;
  background: #202020;
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
  padding: 14px 18px;
`;
