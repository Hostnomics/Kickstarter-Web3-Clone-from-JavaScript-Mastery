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
      - `(-1:02:28)` - completed the mapping over each link of the sidebar
        - the `navlinks` is defined as a json object in our `/constants/index.js`
          - `export const navlinks = [{...}]`

```js
//redacted example:
export const navlinks = [
  {
    name: "campaign",
    imgUrl: createCampaign,
    link: "/create-campaign",
  },
  {
    name: "payment",
    imgUrl: payment,
    link: "/",
    disabled: true,
  },
];
```

12. `(1:03:48)` - Build Navbar

    - `(1:12:30)` - if/else statement in react

```js
                  handleClick={() => {
                    if(address) navigate('create-campaign')
                    else 'ConnectWallet()' //replace later with connect wallet function (-1:12:45)
                  }}
```

- `(1:18:45 - 1:20:40)` Conditional logic - show/hide mobile menu:

```js
{
  /* (1:18:47)- mobile menu (three lines) button, opens menu on click/tap */
}
<img
  src={menu}
  alt="menu"
  className="w-[34px] h-[px] object-contain cursor-pointer"
  onClick={() => setToggleDrawer(!toggleDrawer)}
/>;

{
  /* (1:19:36) - Mobile Menu, shows when icon above clicked/tapped. Transition 700ms */
}
<div
  className={`absolute top-[60px] right-0 left-0 bg-[#1c1c24] z-10 shawdow-secondary py-4 
                  ${
                    !toggleDrawer ? "-translate-y-[100vh]" : "translate-y-0"
                  } transition-all duration-700`}
></div>;
```

- `(1:26:30) - (-1:27:14)` - update onClick setTogggleDrawer to use callback function. React best practices:

```js
{
  /* (1:26:30) - use callback function to handle previous state of toggleDrawer with prev, common react best practice */
}
<img
  src={menu}
  alt="menu"
  className="w-[34px] h-[px] object-contain cursor-pointer"
  // onClick={() => setToggleDrawer(!toggleDrawer)}
  onClick={() => setToggleDrawer((prev) => !prev)}
/>;
```

- completed Navbar and Sidebar.jsx components at `(1:27:51)`

13. Build out CreateCampaign page component so we can then build out the Home Component which displays all of our campains `(1:27:54)`

    - `(1:28:40)` Add Route to Profile, CreateCampaign and CampaignDetails.
      - CampaignDetails takes an id, like in laravel:
        - `<Route path="/campaign-details/:id" element={ <CampaignDetails /> } />`

```js
<Routes>
  {/* (49:20) Added Routes and Home Route  */}
  <Route path="/" element={<Home />} />
  {/* (1:28:40) Added Other Routes  */}
  <Route path="/profile" element={<Profile />} />
  <Route path="/create-campaign" element={<CreateCampaign />} />
  {/* (1:28:40) Campaign Details uses ':id'  */}
  <Route path="/campaign-details/:id" element={<CampaignDetails />} />
</Routes>
```

- `(1:30:20)` - Start building out `pages/CreateCampaign.jsx`

## Import Ethers into our frontend (1:31:14)

- `(1:31:12)` - [**IMPORT ETHERS at (1:31:22)**](https://youtu.be/BDCT6TYLYdI?t=5472) -

  - `import { ethers } from 'ethers`

  - `(1:31:40)` - import the 'checkIfImage' utility from our '/utils/index.js' `checkIfImage` function.
  - `(1:32:18)` - **form, setForm useState hook**, initialized to an object.
  - `(1:35:16)` - Start building out our form on `src/pages/CreateCampaign.jsx`.
    - Set onSubmit to our custom handleSubmit function:
      - `<form onSubmit={handleSubmit}>`
  - `(1:35:50)` - tailwind css settings so each input appears one after the other:
    - `<form onSubmit={handleSubmit} className="w-full mt-[65px] flex flex-col gap-[30px]">`
  - `(1:36:15)` - Create 1/2 width inputs for name and campaign title

- `(1:36:39)` - Create FormField component
  - `<FormField />`
  - `(1:37:25)` - Set the **props** we want to pass to `components/FormField.jsx` in `CreateCampaign.jsx`
    - set the props for the first two form fields, name and campaign title:
    - For now, set the handleChange to be an empty call back function `handleChange={() => {}}`

```js
{
  /* (1:35:16) - Start form. Set onSubmit to our custom handleSubmit function above */
}
<form
  onSubmit={handleSubmit}
  className="w-full mt-[65px] flex flex-col gap-[30px]"
>
  {/* (1:36:15) - Create 1/2 width inputs for name and campaign title */}
  <div className="flex flex-wrap gap-[40px]">
    {/* (1:36:39) - create form field component. (1:37:26) - set the props. Set up handleChange as empty call back function at first "handleChange={() => {}}" */}
    <FormField
      labelName="Your Name *"
      placeholder="John Doe"
      inputType="text"
      value={form.name}
      handleChange={() => {}}
    />
    <FormField
      labelName="Campaign Title *"
      placeholder="Write a title"
      inputType="text"
      value={form.title}
      handleChange={() => {}}
    />
  </div>
</form>;
```

- `(1:39:00) to (1:43:06)` - Create `components/FormField.jsx`

- CreateCampaign

  - 1:47:56 - create Submit button using our existing CustomButton component
  - `(1:48:27)` - Keep track of our form values with `handleFormFieldChange()` function
  - `(1:49:38)` - Use/call our `handleFormFieldChange(fieldName, e)`

    - `(1:51:10)` - Complete the `handleSubmit()` function logic for our form.
      - prevent default page reload: `e.preventDefault();`

- `(1:51:51)` - MAKE SURE TO **pass the event** to `handleSubmit = (e) => {}`

```js
const handleSubmit = (e) => {
  // (1:51:10) - prevent default page reload (don't want page to reload with react)
  e.preventDefault();

  console.log(form); //check  console that all the fields are present (1:52:50)
};

// The form's onSubmit only has to call the function, no param required
<form
  onSubmit={handleSubmit}
  className="w-full mt-[65px] flex flex-col gap-[30px]"
></form>;
```

- `(1:53:35)` Console Log form field input:

![React Form Field Data](https://imgur.com/HAK49mD.png)

## Pass Form Data To Our Smart Contract `(1:53:53)`

14. Use one single file to contain all of our smart contract interactions:
    - Create **context/index.jsx**:
    - import utilites we need from `@thirdweb-dev/react`
    - import ethers
    - `(1:55:19)` - CREATE AND EXPORT OUR CONTEXT PROVIDER:
      - **FORMAT**: `export const StateProvider = ({ children }) => {}`
      - **IMPLEMENTED:** `export const StateContextProvider = ({ children }) => {}`

### Two different ways to call [**WRITE FUNCTIONS**](https://thirdweb.com/mumbai/0x75D37883ae821720cC6fb09619Eb76CCBCA65Cf4/explorer) hosted on Alchemy `(1:56:06)`

- We have two WRITE functions in our contract:
  - `createCampaign`
  - `donateToCampaign`

1. first, use **mutateAsync** as follows:

```js
// (1:56:25): const mutateAsync: and set to createCampaign to which we set equal to
// useContractWrite() and pass the contract and specify the name of the write function
const { mutateAsync: createCampaign } = useContractWrite(
  contract,
  "createCampaign"
);
```

2. (1:56:45) - the other way is just to call the contract.call() and then pass everything you need.

### Publish Function (1:57:26)

- Integrated Files: **export StateContentProvider** talks to **CreateCampaign()** _handleSubmit()_

  - `context/index.jsx` -
  - `/main.jsx` - wrap App with`<StateContextProvider>` tags at `(2:01:51)`
  - `components/CreateCampaign.jsx` - build out **handleSubmit()** so we can access <StateContext.Provider value={{ address, contract, createCampaign: publishCampaign }}> at `(2:02:46)`.

  - `(2:02:54)` - pass form to `context/index.js/StateContextProvider`

- Updates to `CreateCampaign.jsx`:

1. `(2:03:14)` - import our `useStateContext` we created in `/context/index.jsx`:

   - `import { useStateContext } from '../context'`

2. `(2:03:17)` - set createCampaign from imported useStateContext
   - `const { CreateCampaign } = useStateContext()`

---

### As an aside, find NFT free transfer option

**NFT Taxes** to keep in mind:

![TurboTax Note on NFT taxes](https://i.imgur.com/jV4jyRD.png)
