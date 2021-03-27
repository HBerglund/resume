import { Typography } from "@material-ui/core";
import React from "react";
import Title from "./Title";

function IntroText() {
  return (
    <div>
      <Title title="About me" />
      <Typography>
        My name is Herman Berglund and I'm an aspiring Front End Developer with
        a Project Manager background in the same field. Currently, I am based in
        Gothenburg, studying at Medieinstitutet, and will graduate in May 2022.
        At Medieinstitutets Front End developer program, we study the
        fundamentals of HTML5, CSS3, Javascript, Typescript, and much more.
        Throughout the program, we build applications and websites using popular
        front-end technologies such as React, JQuery, Bootstrap etc. I'm really
        starting to enjoy coding and I can't wait to bring my new found skills
        out in the working life!
      </Typography>
    </div>
  );
}

export default IntroText;
