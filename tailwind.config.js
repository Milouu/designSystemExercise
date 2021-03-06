const Color = require("color");

/**
 * Start generic project config
 */
const col = 120;
const baseDuration = 750;

/**
 * End generic project config
 */

module.exports = {
  prefix: "",
  important: false,
  separator: ":",
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px"
    },
    fontFamily: {
      main: [
        "Inter",
        "-apple-system",
        "BlinkMacSystemFont",
        "Segoe UI",
        "Helvetica",
        "Arial",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol"
      ],
      mono: [
        "SFMono-Regular",
        "Menlo",
        "Consolas",
        "Liberation Mono",
        "Courier",
        "monospace"
      ]
    },
    colors: {
      none: "transparent",
      transparent: "transparent",
      inherit: "inherit",
      white: {
        default: "#ffffff"
      },
      black: {
        default: "#3c3c3c"
      },
      grey: {
        "600": "#757575",
        default: "#e8e7e4",
        "200": "#f7f6f3"
      },
      blue: {
        default: "#37abda"
      }
    },
    fontSize: {
      "3xs": "0.5rem", //   8px
      "2xs": "0.625rem", // 10px
      xs: "0.75rem", //     12px
      s: "0.875rem", //     14px
      m: "1rem", //         16px
      l: "1.125rem", //     18px
      xl: "1.375rem", //    22px
      "2xl": "1.5rem", //   24px
      "3xl": "1.75rem", //  28px
      "4xl": "2rem", //     32px
      "5xl": "2.25rem", //  36px
      "6xl": "2.75rem", //  44px
      "7xl": "3.25rem", //  52px
      "8xl": "4rem", //     64px
      "9xl": "4.5rem", //   72px
      "10xl": "5rem" //     80px
    },
    opacity: {
      inherit: "inherit",
      "0": "0",
      "10": "0.1",
      "20": "0.2",
      "30": "0.3",
      "40": "0.4",
      "50": "0.5",
      "60": "0.6",
      "70": "0.7",
      "80": "0.8",
      "90": "0.9",
      "100": "0.99" // prevent extra paint
    },
    zIndex: () => {
      const zIndex = {
        auto: "auto",
        "0": 0
      };

      // Generate negative and positive classes for each
      [1000, 100, 50, 20, 10, 5, 4, 3, 2, 1].forEach(i => {
        zIndex[`${i}`] = i;
        zIndex[`-${i}`] = i * -1;
      });

      return zIndex;
    },
    // Access from transition-
    transitionProperty: {
      none: "none",
      all: "all",
      color: "color",
      bg: "background-color",
      colors: "background-color, border-color, color, fill, stroke",
      height: "height",
      width: "width",
      "width-height": "width, height",
      opacity: "opacity",
      transform: "transform",
      "opacity-transform": "opacity, transform"
    },
    // Access from duration-
    transitionDuration: {
      "1/8": `${Math.floor(baseDuration / 8)}ms`,
      "1/4": `${Math.floor(baseDuration / 4)}ms`,
      "1/2": `${Math.floor(baseDuration / 2)}ms`,
      "3/4": `${Math.floor((baseDuration / 4) * 3)}ms`,
      base: `${baseDuration}ms`,
      double: `${baseDuration * 2}ms`
    },
    // Access from ease-
    transitionTimingFunction: {
      base: "cubic-bezier(.54,.1,0,.99)",
      // Functions from https://easings.net
      "in-sine": "cubic-bezier(0.47, 0, 0.745, 0.715)",
      "in-quad": "cubic-bezier(0.55, 0.085, 0.68, 0.53)",
      "in-cubic": "cubic-bezier(0.55, 0.055, 0.675, 0.19)",
      "in-quart": "cubic-bezier(0.895, 0.03, 0.685, 0.22)",
      "in-quint": "cubic-bezier(0.755, 0.05, 0.855, 0.06)",
      "in-expo": "cubic-bezier(0.95, 0.05, 0.795, 0.035)",
      "in-circ": "cubic-bezier(0.6, 0.04, 0.98, 0.335)",
      "in-back": "cubic-bezier(0.6, -0.28, 0.735, 0.045)",
      "out-sine": "cubic-bezier(0.39, 0.575, 0.565, 1)",
      "out-quad": "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      "out-cubic": "cubic-bezier(0.215, 0.61, 0.355, 1)",
      "out-quart": "cubic-bezier(0.165, 0.84, 0.44, 1)",
      "out-quint": "cubic-bezier(0.23, 1, 0.32, 1)",
      "out-expo": "cubic-bezier(0.19, 1, 0.22, 1)",
      "out-circ": "cubic-bezier(0.075, 0.82, 0.165, 1)",
      "out-back": "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
      "in-out-sine": "cubic-bezier(0.445, 0.05, 0.55, 0.95)",
      "in-out-quad": "cubic-bezier(0.455, 0.03, 0.515, 0.955)",
      "in-out-cubic": "cubic-bezier(0.645, 0.045, 0.355, 1)",
      "in-out-quart": "cubic-bezier(0.77, 0, 0.175, 1)",
      "in-out-quint": "cubic-bezier(0.86, 0, 0.07, 1)",
      "in-out-expo": "cubic-bezier(1, 0, 0, 1)",
      "in-out-circ": "cubic-bezier(0.785, 0.135, 0.15, 0.86)",
      "in-out-back": "cubic-bezier(0.68, -0.55, 0.265, 1.55)"
    },
    extend: {
      spacing: () => {
        const spacing = {
          none: "none",
          inherit: "inherit",
          semicol: `${col * 0.5}px`, // 60px
          "-semicol": `${col * -0.5}px`, // -60px
          col: `${col}px`, // 120px
          "col-1": `${col}px`, // 120px
          "col-2": `${col * 2}px`, // 240px
          "col-3": `${col * 3}px`, // 360px
          "col-4": `${col * 4}px`, // 480px
          "col-5": `${col * 5}px`, // 600px
          "col-6": `${col * 6}px`, // 720px
          "col-7": `${col * 7}px`, // 840px
          "col-8": `${col * 8}px`, // 960px
          "col-9": `${col * 9}px`, // 1080px
          "col-10": `${col * 10}px`, // 1200px
          "col-11": `${col * 11}px`, // 1320px
          "col-12": `${col * 12}px` // 1440px
        };

        for (let i = 1; i <= 12; i++) {
          spacing[`-col-${i}`] = `${col * -i}px`;
        }

        for (let i = 1; i <= 20; i++) {
          spacing[`${i * 5}vw`] = `${i * 5}vw`;
          spacing[`${i * 5}vh`] = `${i * 5}vh`;
          spacing[`${i * 5}p`] = `${i * 5}%`;
        }

        return spacing;
      },
      inset: theme => theme("spacing"),
      minWidth: theme => ({ ...theme("spacing"), screen: "100vw" }),
      maxWidth: theme => ({ ...theme("spacing"), screen: "100vw" }),
      height: theme => ({ ...theme("width"), screen: "100vh" }),
      minHeight: theme => ({ ...theme("maxWidth"), screen: "100vh" }),
      maxHeight: theme => ({ ...theme("maxWidth"), screen: "100vh" }),
      lineHeight: {
        "0": 0
      }
    }
  },
  variants: {},
  corePlugins: {
    objectFit: false,
    objectPosition: false
  },
  plugins: [
    ({ addBase, addUtilities, theme }) => {
      addBase({
        strong: { fontWeight: theme("fontWeight.bold") }
      });

      const objectFitUtilities = {
        ".object-cover": {
          objectFit: "cover",
          fontFamily: '"object-fit: cover"' // eslint-disable-line
        },
        ".object-contain": {
          objectFit: "contain",
          fontFamily: '"object-fit: contain"' // eslint-disable-line
        }
      };
      addUtilities(objectFitUtilities, {
        variants: ["responsive"]
      });

      const flexUtilities = {
        ".flex-center": {
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }
      };
      addUtilities(flexUtilities, {
        variants: ["responsive"]
      });
    }
  ]
};
