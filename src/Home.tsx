import React from "react";
import { Helmet } from "react-helmet-async";
function Home() {
  return (
    <>
      <Helmet>
        <title>Hello World</title>
        <meta name="description" content="HomePage" />
      </Helmet>
      <div>Home</div>
    </>
  );
}

export default Home;
