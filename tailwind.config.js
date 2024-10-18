/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: "#000000", // Preto escuro
          secondary: "#0a0a23", // Azul muito escuro
          card: "#2e2e2e", // Fundo dos cards
          silver: "#C0C0C0",
        },
        text: {
          primary: "#ffffff", // Branco
          secondary: "#b0b0b0", // Cinza claro
          highlight: "#00c8ff", // Azul claro ou ciano (links, destaques)
        },
        button: {
          DEFAULT: "#1a73e8", // Azul escuro
          hover: "#3f9bff", // Azul claro (hover)
          text: "#ffffff", // Texto dos botões
        },
        border: {
          card: "#00c8ff", // Bordas dos cards (ciano)
        },
        banner: {
          highlight: "#007bff", // Azul vibrante
          shadow: "#3a3a3a", // Sombras e bordas suaves
        },
        star: "#d3d3d3", // Estrelas suaves
      },
    },
  },
  plugins: [],
};
