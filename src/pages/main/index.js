import React from "react";
import {
  Avatar,
  Button,
  Grid,
  Header,
  Input,
  MainContent,
  NavBar,
  Row,
  Typograph
} from '../../ui-components';
import { VideoIcon } from '../../icons';

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
          <NavBar>barra lateral</NavBar>
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
