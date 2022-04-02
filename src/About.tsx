import React from "react";
import { Helmet } from "react-helmet-async";
function About() {
  return (
    <>
      <Helmet>
        <title>Hello World</title>
        <meta name="description" content="AboutPage" />
      </Helmet>
      <div>About</div>
    </>
  );
}

export default About;
