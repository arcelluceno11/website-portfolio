import { useCallback, useEffect, useMemo, useState } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";

const ParticlesBG = (props) => {
  const [particlesContainer, setParticlesContainer] = useState();

  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    setParticlesContainer(container);
  }, []);

  useEffect(() => {
    if (particlesContainer && particlesContainer.currentTheme !== props.theme) {
      particlesContainer.loadTheme(props.theme);
    }
  }, [props.theme, particlesContainer]);
  

  return useMemo(
    () => (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: "#FCFCFC",
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: false,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#26547C",
          },
          links: {
            color: "#26547C",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            directions: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 2,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 5 },
          },
        },
        themes: [
          {
            name: "light",
            default: {
              value: true,
              mode: "light",
            },
            options: {
              background: {
                color: "#FCFCFC",
              },
              particles: {
                color: {
                  value: "#26547C",
                },
                links: {
                  color: "#26547C",
                }
              }
            },
          },
          {
            name: "dark",
            default: {
              value: true,
              mode: "dark",
            },
            options: {
              background: {
                color: "#26547C",
              },
              particles: {
                color: {
                  value: "#FCFCFC",
                },
                links: {
                  color: "#FCFCFC",
                }
              }
            },
          },
        ],
        detectRetina: true,
      }}
    />
  ));
};

export default ParticlesBG;
