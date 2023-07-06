# 3D_portfolio
 
npm create vite@latest ./ -- --template react
a. project name
b. react / vanilla / vue .... etc -> choose option
c. typescript + sw / TS / JSX / JSX + sw -> choose option
==> new files downloaded for vite + react

<!-- install other dependencies -->
npm install -D tailwindcss
npx tailwindcss init
npm install --legacy-peer-deps @react-three/fiber @react-three/drei maath react-tilt react-vertical-timeline-component @emailjs/browser framer-motion react-router-dom
<!-- react-tilt uses older version therefore we'll add --legacy-peer-deps -->
npm install --legacy-peer-deps -D  postcss autoprefixer
<!-- add this above coz tailwind wasn't working -->
npx tailwindcss init -p
<!-- install three for 3d computer -->
npm install --legacy-peer-deps three
npm i sweetalert2@6.6.1

<!-- setup and run -->
npm install
npm run dev