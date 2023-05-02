import React from 'react'

//(44:21) import routes
import { Route, Routes } from 'react-router-dom';

//(51:17) - import Component Pages from /pages directory via the /pages/index.js export statements
import { CampaignDetails, CreateCampaign, Home, Profile } from './pages';

//(52:30) import Sidebar and Navbar Components from /components
import { Sidebar, Navbar } from './components';

const App = () => {
  return (
    <div className="relative sm:-8 p-4 bg-[#13131a] min-h-screen flex flex-row">
      <div className="sm:flex hidden mr-10 relative">
        <Sidebar />
      </div>

      {/* <p className="font-xl font-bold">TEST</p> */}

      <div className="flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5">
        <Navbar />

        <Routes>
    {/* (49:20) Added Routes and Home Route   */}
          <Route path="/" element={ <Home /> } />
    {/* (1:28:40) Added Other Routes  */}
          <Route path="/profile" element={ <Profile /> } />
          <Route path="/create-campaign" element={ <CreateCampaign /> } />
    {/* (1:28:40) Campaign Details uses ':id'  */}
          <Route path="/campaign-details/:id" element={ <CampaignDetails /> } />
        </Routes>
      </div>
    </div>
  )
}

export default App