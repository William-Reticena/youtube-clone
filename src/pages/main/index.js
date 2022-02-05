import React from "react";
import { Link } from "react-router-dom";
import { Header } from './header';
import { MainContent } from "./main-content";
import { NavBar } from "./nav-bar";
import { VideoContainer } from "./video-container";
import {
  Avatar,
  Grid,
  Row,
  Typograph,
} from '../../ui/components';
import { VideoIcon } from '../../ui/icons';

import lobo from '../../images/lobo-colorido.jpg'

const Main = () => (
  <Grid direction='column'>
    <Row>
      <Header />
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
              <Avatar size='30px' />
              Lives do Alanzoka
            </Link>

            <Link to='#'>
              <Avatar size='30px' />
              Voices Makers
            </Link>

            <Link to='#'>
              <Avatar size='30px' />
              Brian Kibler
            </Link>
          </NavBar>
        </Row>

        <Row fullwidth>
          <MainContent>
            {[1,2,3,4,5,6,].map(item => (
              <VideoContainer src={lobo} />
            ))}
          </MainContent>
        </Row>
      </Grid>
    </Row>
  </Grid>
);

export default Main;
