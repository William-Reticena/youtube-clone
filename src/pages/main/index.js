import React from "react";
import {
  Grid,
  Header,
  MainContent,
  NavBar,
  Row
} from '../../ui-components';
import { VideoIcon } from '../../icons';

const Main = () => (
  <Grid direction='column'>
    <Row>
      <Header>
        <VideoIcon />
        cabeça
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
