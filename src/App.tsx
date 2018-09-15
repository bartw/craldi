import React from "react";
import resetCss from "./resetCss";
import Page from "./Page";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import Equipment from "./equipment";
import Exercises from "./exercises";

resetCss();

const App = () => (
  <Page>
    <Header />
    <Main>
      <Equipment />
      <Exercises />
    </Main>
    <Footer />
  </Page>
);

export default App;
