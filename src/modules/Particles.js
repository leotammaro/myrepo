import React from "react";
import Particles from "react-tsparticles";

function ParticlesBackGround() {
  return (
    <Particles
      id="tsparticles"
      options={{
        background: {
          color: {
            value: "#000",
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "bubble",
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 150,
              duration: 2,
              opacity: 0,
              size: 0,
              color: "#000",
            },
            repulse: {
              distance: 100,
              duration: 5,
            },
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          links: {
            distance: 900,
            enable: false,

            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outMode: "out",
            random: true,
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 3600,
            },
            value: 450,
          },
          opacity: {
            value: 0.6,
          },
          shape: {
            type: "circle",
          },
          size: {
            random: true,
            value: 3,
          },
        },
        detectRetina: true,
      }}
    />
  );
}

export default ParticlesBackGround;
