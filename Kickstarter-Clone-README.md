# Kickstarter Clone from [JavaScript Mastery's YouTube Tutorial.](https://www.youtube.com/watch?v=BDCT6TYLYdI&t)

## Commands

1. Install the thirdweb project files:

   > npx create thirdweb@latest --contract

2. Install dotenv (9:22):

   > npm instal dotenv

3. Add React Router Dom:

   > npm install react-router-dom

4. Deploy Solidity Contract:

   > npm run deploy

5. Create frontend app, from within the `/client` directory: `(34:35)`

   > npx thirdweb create --app

6. Install TailwindCSS. See the [Tail wind docs for vite](https://tailwindcss.com/docs/guides/vite)

   > npm install -D tailwindcss postcss autoprefixer

   > npx tailwindcss init -p

7. Run a local dev server: _(CTRL/CMD Click the link provided)_

   > npm run dev

---

---

## Road Map

1. Solidity contract `CrowdFunding.sol` `(~9:30 to 26:21)`

2. Deploy contract:

   - `(26:28)` - open `hardhat.config.js` _(skip to `29:30` past metamask tutorial)_
     - He uses Goerli from Alchemy (goerlifaucet.com)
   - `(29:37)` - get private key from MetaMask.
     - click on 3 dots `(...)`
     - click on `Account Details`
     - click on `Export private key`
   - copy and paste private key into `.env` file `(-30:15)`
   - Search for RPC endpoint:
     - Polygon [Network Endpoints](https://wiki.polygon.technology/docs/operate/network-rpc-endpoints/)
     - Alchemy blog [on RPC endpoints](https://www.alchemy.com/overviews/private-rpc-endpoint)
     - Thirdweb has their own [RPC endpoints](https://thirdweb.com/dashboard/rpc)
       - _For Mumbai: `mumbai.rpc.thirdweb.com`_
   - `(30:30)` Set default network in `hardhat.config.js`

   - **Added mumbai test network:**

```js
module.exports = {
  networks: {
    hardhat: {},
    mumbai: {
      url: "https://rpc-mumbai.matic.today",
      accounts: [`0x${process.env.PRIVATE_KEY}`],
    },
  },
};
```

- `(31:46)` - Run the deploy script provided by thirdweb in our `package.json` from within the `/web3` directory:

  > `"deploy": "npx thirdweb@latest deploy",`

  > npm run deploy

  - runs _npx thirdweb@latest deploy_
    - creates the `cache` and `artifacts` folder for us. Also uploads contract data to thirdweb's dashboard and provides us with a link to view our project when we connect our metamask wallet:
      - [https://thirdweb.com/contracts/deploy/QmUnFE6muPDPkDGNiWfGB6gxnBbueGSkQaFSjoKNm9Bu41](https://thirdweb.com/contracts/deploy/QmUnFE6muPDPkDGNiWfGB6gxnBbueGSkQaFSjoKNm9Bu41)

---

3.  Create frontend app, from within the `/client` directory: `(34:35)`

    > npx thirdweb create --app

    - project name: `./` to create it in the current repository
      - **UPDATE:** which blockchain? Select **EVM**, _Solana was the other option._
    - framework: Select **vite** (_other options were `Next.js`, `Create React App`, `React Native(mobile)`, `Node.js` and `Express`_)
    - language: Select **JavaScript** (_other option was TypeScript_).

4.  Add React Router Dom:

    > npm install react-router-dom

    - `"react-router-dom": "^6.10.0"`

5.  Run a local dev server: _(CTRL/CMD Click the link provided)_

    > npm run dev

    - (_This will run vite for us, per our `client/package.json` script: `"dev": "vite",`_)

6.  Install TailwindCSS. See the [Tail wind docs for vite](https://tailwindcss.com/docs/guides/vite)

    > npm install -D tailwindcss postcss autoprefixer

    > npx tailwindcss init -p

    - creates a `tailwind.config.js` file `(40:57)`

      - copy and paste the **content part** from the Tailwind CSS Vite Docs [https://tailwindcss.com/docs/guides/vite](https://tailwindcss.com/docs/guides/vite)

```js

//content part in tailwind.config.js
        content: [
            "./index.html",
            "./src/**/*.{js,ts,jsx,tsx}",
        ],

//content directives in client/src/index.css
        @tailwind base;
        @tailwind components;
        @tailwind utilities;

```

- d

  - d

---

## Road Map

1.

2.

3. Set up frontend
   - **index.js** => **main.jsx** - import files we need.
     - CTRL click on `{Chainid.Mumbai}` to jump into the `chain.d.ts` **utility** to see the chain ids **ThirdWeb** gives us out of the box:

```js
        import { ChainInfo } from "../schema";
        /**
         * @public
         */
        export declare enum ChainId {
            Mainnet = 1,
            Goerli = 5,
            Polygon = 137,
            Mumbai = 80001,
            Localhost = 1337,
            Hardhat = 31337,
            Fantom = 250,
            FantomTestnet = 4002,
            Avalanche = 43114,
            AvalancheFujiTestnet = 43113,
            Optimism = 10,
            OptimismGoerli = 420,
            Arbitrum = 42161,
            ArbitrumGoerli = 421613,
            BinanceSmartChainMainnet = 56,
            BinanceSmartChainTestnet = 97
        }

```

4. Change js files (main, App, etc) to use `.jsx` extensions to get the pages to display on our local server. (change index.js to main.jsx)

5. Created **index.css**. `(-41:49)`

6. Added assets folder

7. Added src/constants/index.js `(42:41)`

8. `(42:57)` - Created `src/context` directory for our **React context API** which will allow us to use the ThirdWeb logic from within our entire application.

9. `(43:23)` - Created `utils/index.js`

   - (43:27) - Utility Functions - functions we use often across our app

10. `(44:15)` - start building out `App.jsx`

    - 45:45 - tailwind docs search https://tailwindcss.com/docs/installation

    - (47:40) - fix vite - tailwind connection

      - (47:55) in **tailwind.config.js** add theme setting
        - test if tailwind working in App.js (48:14):
          - `<p className="font-xl font-bold">TEST</p>` (not responding)
        - (48:48) - **Solution** - import the `index.css` file in **main.jsx**.
          - `import './index.css';`

    - (49:20) - Set up Routes and Route. First Route to Home Component

11. (49:50) - Build Components (Navbar, Sidebar) and Pages (Home, Profile, CampaignDetails, CreateCampaign)

    - `(49:56)` - Build `pages/Home.jsx` and (Profile.jsx, CampaignDetails.jsx and CreateCampaign.jsx)

      - `(50:34)` - we **export the components from the pages directory** via an **index.js** file in `/pages`
      - create an export statement in **index.js** for each component:
        > `export {default as Home} from '.Home';`
        - import pages into `src/App.js`
          > `import { CampaignDetails, CreateCampaign, Home, Profile } from './pages';`

    - `(~52 min)` - create Navbar.jsx and Sidebar.jsx in the `/components` directory and export with `components/index.js`

    - `(53:26)` - Build **components/Sidebar.jsx**
      -

---

d

**NFT Taxes** to keep in mind:

![TurboTax Note on NFT taxes](https://i.imgur.com/jV4jyRD.png)
