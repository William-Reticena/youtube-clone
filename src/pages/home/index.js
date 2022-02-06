import React from "react";
import { Header } from './header';
import { MainContent } from "./main-content";
import { Drawer } from "./drawer";
import { Grid, Row } from '../../ui/components';

import lobo from '../../images/lobo-colorido.jpg'

const Main = () => (
  <Grid direction='column'>
    <Row>
      <Header />
    </Row>

    <Row xs={{ height: '100%' }}>
      <Grid>
        <Row>
          <Drawer />
        </Row>

        <Row fullwidth>
          <MainContent src={lobo} />
        </Row>
      </Grid>
    </Row>
  </Grid>
);

export default Main;
