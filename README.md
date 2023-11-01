# Preview

![preview.gif](./client/public/preview.gif)

# Dependencies

- three.js: 3D js library
- @react-three/fiber: react renderer for 3js library
- @react-three/drei: have useful add-ons for @react-three/fiber
- maath: useful math helpers for 3js
- valtio: react state management
- react-color: color picker
- framer-motion: have cool animations

# Usage

- This project utilizes image generation with OpenAI. In order for it to work, you need to create an `.env` file with api key of your own from [OpenAI](https://platform.openai.com/account/api-keys).
- **Warning**: you need to pay to get credits from OpenAI if you want the AI generation to work properly. If you don't want to, file upload is working just fine.
- To run the project, you need to run FE & BE at the same time:
  - FE:
    ```
    $ cd client/
    $ npm run dev
    ```
  - BE:
    ```
    $ cd server/
    $ npm start
    ```

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Credits

- [logo-tshirt.png](https://www.flaticon.com/free-icon/polo_5977832)
- [stylish-tshirt.png](https://www.flaticon.com/free-icon/hawaiian-shirt_4751408)
- [swatch.png](https://www.flaticon.com/free-icon/swatches_2954691)
- [ai.png](https://www.flaticon.com/free-icon/ai_2814666)
- [file.png](https://www.flaticon.com/free-icon/folder_10845935)
