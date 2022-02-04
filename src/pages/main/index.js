import React from "react";
import { Link } from "react-router-dom";
import {
  Avatar,
  Button,
  Grid,
  Header,
  Input,
  MainContent,
  NavBar,
  Row,
  Typograph,
} from '../../ui/components';
import { VideoIcon } from '../../ui/icons';

const Main = () => (
  <Grid direction='column'>
    <Row>
      <Header>
        <VideoIcon height='40px' width='50px' />

        <Input />

        <Button>
          <VideoIcon height='40px' width='50px' />
        </Button>
        {/* <Typograph variant='h1'>cabeça grande</Typograph> */}
        <VideoIcon height='40px' width='50px' />
        <VideoIcon height='40px' width='50px' />
        <VideoIcon height='40px' width='50px' />
        <VideoIcon height='40px' width='50px' />
        <Avatar />
      </Header>
    </Row>

    <Row xs={{ height: '100%' }}>
      <Grid>
        <Row xs={{ width: '180px' }}>
          <NavBar>
            <Link to='#'>
              <VideoIcon height='40px' width='50px' />
              Início
            </Link>

            <Link to='#'>
              <VideoIcon height='40px' width='50px' />
              Explorar
            </Link>

            <Link to='#'>
              <VideoIcon height='40px' width='50px' />
              Inscrições
            </Link>

            <hr />

            <Link to='#'>
              <VideoIcon height='40px' width='50px' />
              Biblioteca
            </Link>

            <Link to='#'>
              <VideoIcon height='40px' width='50px' />
              Histórico
            </Link>

            <Link to='#'>
              <VideoIcon height='40px' width='50px' />
              Seus vídeos
            </Link>

            <Link to='#'>
              <VideoIcon height='40px' width='50px' />
              Assistir mais tarde
            </Link>

            <Link to='#'>
              <VideoIcon height='40px' width='50px' />
              Vídeos marcados como gostei
            </Link>

            <hr />

            <Typograph variant='h2'>INSCRIÇÕES</Typograph>

            <Link to='#'>
              <Avatar height='30px' />
              Lives do Alanzoka
            </Link>

            <Link to='#'>
              <Avatar height='30px' />
              Voices Makers
            </Link>

            <Link to='#'>
              <Avatar height='30px' />
              Brian Kibler
            </Link>
          </NavBar>
        </Row>

        <Row fullwidth>
          <MainContent>
            principal
          </MainContent>
        </Row>
      </Grid>
    </Row>
  </Grid>
);

export default Main;
