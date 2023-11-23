const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
			extend: {
				
		},
	},
	plugins: [
		require('daisyui'),
		require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("tailwind-bootstrap-grid")({
      generateContainer: false,
      gridGutterWidth: "2rem",
      gridGutters: {
        1: "0.25rem",
        2: "0.5rem",
        3: "1rem",
        4: "1.5rem",
        5: "3rem",
      },
    }),
	],
	daisyui: {
    themes: [
      {
        "catppuccin-latte": {
          primary: "#1e66f5", // blue
          secondary: "#ea76cb", // pink
          accent: "#179299", // teal
          neutral: "#dce0e8", // crust
          "base-100": "#eff1f5", // base
          info: "#209fb5", // sapphire
          success: "#40a02b", // green
          warning: "#df8e1d", // yellow
          error: "#d20f39", // red
        },
        "catppuccin-macchiato": {
          primary: "#8aadf4", // blue
          secondary: "#f5bde6", // pink
          accent: "#8bd5ca", // teal
          neutral: "#181926", // crust
          "base-100": "#24273a", // base
          info: "#7dc4e4", // sapphire
          success: "#a6da95", // green
          warning: "#eed49f", // yellow
          error: "#ed8796", // red
        },
      },
		],
		darkTheme: "catppuccin-macchiato",
  },
};
