import React from "react";

import Typewriter from "typewriter-effect";

const Type = () => {
  return (
    <>
      <Typewriter
        options={{
          strings: ["A Front-End Developer", "A Problem Solver", "A Backend Developer", "A Full Stack Developer"],
          autoStart: true,
          loop: true,
          deleteSpeed: 50
        }}
      />
    </>
  );
};
export default Type;