import styled from "styled-components";
import { Link as RouterDomLink } from "react-router-dom";
import { Avatar, Typograph } from '../../../ui/components';
import {
  CompassOutlined,
  HistoryOutlined,
  HomeIconOutlined,
  LibraryOutlined,
  LikedVideos,
  SubscriptionsOutlined,
  WatchLaterOutlined,
  YourVideosOutlined
} from '../../../ui/icons';

export const Drawer = () => (
  <DrawerWrapper>
    <DrawerItems>
      <Link to='#'>
        <Paper>
          <IconContainer>
            <HomeIconOutlined />
          </IconContainer>

          <Typograph variant='h4'>Início</Typograph>
        </Paper>
      </Link>

      <Link to='#'>
        <Paper>
          <IconContainer>
            <CompassOutlined />
          </IconContainer>

          <Typograph variant='h4'>Explorar</Typograph>
        </Paper>
      </Link>

      <Link to='#'>
        <Paper>
          <IconContainer>
            <SubscriptionsOutlined />
          </IconContainer>
          <Typograph variant='h4'>Inscrições</Typograph>
        </Paper>
      </Link>

      <GuideItems>
        <Link to='#'>
          <Paper>
            <IconContainer>
              <LibraryOutlined />
            </IconContainer>

            <Typograph variant='h4'>Biblioteca</Typograph>
          </Paper>
        </Link>

        <Link to='#'>
          <Paper>
            <IconContainer>
              <HistoryOutlined/>
            </IconContainer>

            <Typograph variant='h4'>Histórico</Typograph>
          </Paper>
        </Link>

        <Link to='#'>
          <Paper>
            <IconContainer>
              <YourVideosOutlined />
            </IconContainer>

            <Typograph variant='h4'>Seus vídeos</Typograph>
          </Paper>
        </Link>

        <Link to='#'>
          <Paper>
            <IconContainer>
              <WatchLaterOutlined />
            </IconContainer>

            <Typograph variant='h4'>Assistir mais tarde</Typograph>
          </Paper>
        </Link>

        <Link to='#'>
          <Paper>
            <IconContainer>
              <LikedVideos />
            </IconContainer>

            <Typograph variant='h4'>Vídeos marcados como gostei</Typograph>
          </Paper>
        </Link>
      </GuideItems>
    </DrawerItems>


    <Typograph variant='h3'>INSCRIÇÕES</Typograph>

    {[1,2,3,4,5].map(() => (
      <Paper>
        <IconContainer>
          <Avatar size='30px' />
        </IconContainer>

        <Typograph variant='h4'>Lobão Caolho</Typograph>
      </Paper>
    ))}
  </DrawerWrapper>
);

const Link = styled(RouterDomLink)`
  text-decoration: none;
`;

const DrawerWrapper = styled.nav`
  background: #202020;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 240px;
`;

const DrawerItems = styled.div`
  padding: 0 16px 0 0;
`;

const GuideItems = styled.div`
  border-bottom: 1px solid #313131;
  border-top: 1px solid #313131;
  padding-top: 10px;
`;

const Paper = styled.div`
  align-items: center;
  display: flex;
  height: ${({ theme }) => theme.baseMeasure * 5}px;
  justify-content: center;
  padding: 0 24px;

  &:hover {
    background: #303030;
  }
`;

const IconContainer = styled.div`
  display: inline-block;
  margin: 0 24px 0 0;
`;
