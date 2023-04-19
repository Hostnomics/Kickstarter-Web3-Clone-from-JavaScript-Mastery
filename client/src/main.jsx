import React from 'react'; 
// import ReactDom from 'react-dom/client'; case sensitive
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react';

//(39:25) - import App.js
import App from './App';

//(48:52) - import css
import './index.css';

// (2:01:39) - import StateContextProvider from `/context/index.js`
import { StateContextProvider } from './context';


const root = ReactDOM.createRoot(document.getElementById('root')); 

// (38:10)- render ThirdWebProvider as a wrapper for our <App /> component:
// (38:42) - wrap our <App /> component in Router tags as well:
root.render(
    <ThirdwebProvider desiredChainId={ChainId.Mumbai}>
        <Router>
{/* (2:01:51) - wrap App with <StateContextProvider> from `context/index.js` */}
            <StateContextProvider>
                <App />
            </StateContextProvider>
        </Router>
    </ThirdwebProvider>
)