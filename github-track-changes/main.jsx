import React from 'react';
import ReactDom from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react';

//(39:25) - import App.js
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')); 

// (38:10)- render ThirdWebProvider as a wrapper for our <App /> component:
// (38:42) - wrap our <App /> component in Router tags as well:
root.render(
    <ThirdwebProvider desiredChainId={ChainId.Mumbai}>
        <Router>
            <App />
        </Router>
    </ThirdwebProvider>
)