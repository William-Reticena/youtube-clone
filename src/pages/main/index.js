import React from "react";
import { Grid, Header, MainContent, NavBar } from '../../ui-components';

const Main = () => (
  <Grid col={2}>
    <Header>cabeça</Header>

    <NavBar>barra lateral</NavBar>

    <MainContent>principal</MainContent>
  </Grid>
);

export default Main;
