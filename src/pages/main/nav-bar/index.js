import styled from "styled-components";
import { Link } from "react-router-dom";
import { Avatar, Typograph } from '../../../ui/components';
import { CompassOutlined, HomeIcon, VideoIcon } from '../../../ui/icons';

export const NavBar = () => (
  <NavBarWrapper>
    <Link to='#'>
      <Paper>
        <IconContainer>
          <HomeIcon />
        </IconContainer>

        <Typograph variant='h4'>
          Início
        </Typograph>
      </Paper>
    </Link>

    <Link to='#'>
      <Paper>
        <IconContainer>
          <CompassOutlined />
        </IconContainer>

        <Typograph variant='h4'>
          Explorar
        </Typograph>
      </Paper>
    </Link>

    <Link to='#'>
      <Paper>
        <IconContainer>
          <VideoIcon height='40px' width='50px' />
        </IconContainer>
        <Typograph variant='h4'>
          Inscrições
        </Typograph>
      </Paper>
    </Link>

    <hr />

    <Link to='#'>
      <Paper>
        <IconContainer>
          <VideoIcon height='40px' width='50px' />
        </IconContainer>

        <Typograph variant='h4'>
          Biblioteca
        </Typograph>
      </Paper>
    </Link>

    <Link to='#'>
      <Paper>
        <IconContainer>
          <VideoIcon height='40px' width='50px' />
        </IconContainer>

        <Typograph variant='h4'>
          Histórico
        </Typograph>
      </Paper>
    </Link>

    <Link to='#'>
      <Paper>
        <IconContainer>
          <VideoIcon height='40px' width='50px' />
        </IconContainer>

        <Typograph variant='h4'>
          Seus vídeos
        </Typograph>
      </Paper>
    </Link>

    <Link to='#'>
      <Paper>
        <IconContainer>
          <VideoIcon height='40px' width='50px' />
        </IconContainer>

        <Typograph variant='h4'>
          Assistir mais tarde
        </Typograph>
      </Paper>
    </Link>

    <Link to='#'>
      <Paper>
        <IconContainer>
          <VideoIcon height='40px' width='50px' />
        </IconContainer>

        <Typograph variant='h4'>
          Vídeos marcados como gostei
        </Typograph>
      </Paper>
    </Link>

    <hr />

    <Typograph variant='h2'>INSCRIÇÕES</Typograph>

    <Link to='#'>
      <Avatar size='30px' />
      Lives do Alanzoka
    </Link>

    <Link to='#'>
      <Avatar size='30px' />
      Voice Makers
    </Link>

    <Link to='#'>
      <Avatar size='30px' />
      Brian Kibler
    </Link>
  </NavBarWrapper>
);

const NavBarWrapper = styled.nav`
  background: #202020;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 200px;
`;

const Paper = styled.div`
  align-items: center;
  display: flex;
  height: ${({ theme }) => theme.baseMeasure * 5}px;
  justify-content: center;
  padding: 0 24px;
`;

const IconContainer = styled.div`
  display: inline-block;
  margin: 0 24px 0 0;
`;
