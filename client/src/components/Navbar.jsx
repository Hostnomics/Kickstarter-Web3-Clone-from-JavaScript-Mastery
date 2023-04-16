// (1:03:57) - import statements:
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

//custom component built on in `components/CustomButton.js` (1:04:21)
import { CustomButton } from './' //Navbar also in /components so link is just './'
import { logo, menu, search, thirdweb } from '../assets'
import { navlinks } from '../constants'
import { ConnectWallet } from '@thirdweb-dev/react'


const Navbar = () => {
  // initialize our navigate function (1:05:20)
  const navigate = useNavigate()
  // set isActive state to initialize w/ dashboard
  const [isActive, setIsActive] = useState('dashboard')
  // (1:05:38) - toggleDrawer state - set to false
  const [toggleDrawer, setToggleDrawer] = useState(false)

  //(1:11:02) - Temporarily hardcode address for button title
  const address = '0x38x..3838'

  return (
    // set className at (1:06:10 -1:06:58)
    <div className="flex md:flex-row flex-col-reverse justify-between mb-[35px] gap-6">
   
      {/* Search box - set inner div className (1:06:58). Make rounded (1:09:55) "rounded-[100px]" */}
          <div className="lg:flex-1 flex flex-row max-w-[458px] py-2 pl-4 pr-2 h-[52px] bg-[#1c1c24] 
          rounded-[100px]">

              {/* (1:08:58) - Add input field for navbar search */}
              <input type="text" placeholder="Search for campaigns" className="flex w-full font-epilogue font-normal text-[14px]
              placeholder:text-[#4b5264] text-white bg-transparent outline-none" />

                  {/* (1:07:48) set wrapper for search bar */}
                  <div className="w-[72px] h-full rounded-[20px] bg-[#4acd8d] flex justify-center items-center cursor-pointer">
                      <img src={search} alt="search" className="w-[15px] h-[15px] object-contain" />
                  </div>

          </div>

 
      {/* Search Button - float right - (1:10:11) */}
          <div className="sm:flex hidden flex-row justify-end gap-4">
              {/* (1:10:38) - render Custom Button Component. Title dyanmic. Displays address if connected. */}
              {/* (1:12:55) - Nothing renders to UI, b/c we are just sending props. Now receive and display these props in the CustomButton.jsx Component */}
              <CustomButton 
                  btnType="button"
                  title={address ? 'Send Your Prescription' : 'Connect Your Wallet'}
                  styles={address ? 'bg-[#1dc071]' : 'bg-[#8c6dfd]'}
                  handleClick={() => {
                    if(address) navigate('create-campaign')
                    else 'ConnectWallet()' //replace later with connect wallet function (-1:12:45)
                  }}
              />


      {/* Static Profile Image (Upper Right Corner) - (1:14:45) - Add Link, not self-closing */}
              <Link to="/profile">
                  <div className="w-[52px] h-[52px] rounded-full bg-[#2c2f32] flex justify-center items-center cursor-pointer">
                      <img src={thirdweb} alt="user" className="w-[60%] h-[60%] object-contain" />
                  </div>
              </Link>


          </div>


      {/* (1:17:38) - Small Screen Navigation */}
          <div className="sm:hidden flex justify-between items-center relative">

              {/*image container div*/}
                  <div className="w-[40px] h-[40px] rounded-[10px] bg-[#2c2f32] flex justify-center items-center cursor-pointer">
                      <img src={thirdweb} alt="user" className="w-[30%] h-[30%] object-contain" />
                  </div>

          {/* (1:18:47)- mobile menu (three lines) button, opens menu on click/tap */}
          {/* (1:26:30) - use callback function to handle previous state of toggleDrawer with prev, common react best practice */}
                  <img 
                    src={menu}
                    alt="menu"
                    className="w-[34px] h-[px] object-contain cursor-pointer"
                    // onClick={() => setToggleDrawer(!toggleDrawer)}
                    onClick={() => setToggleDrawer((prev) => !prev)}
                  />

                {/* (1:19:36) - Mobile Menu, shows when icon above clicked/tapped */}
                  <div className={`absolute top-[60px] right-0 left-0 bg-[#1c1c24] z-10 shawdow-secondary py-4 
                  ${!toggleDrawer ? '-translate-y-[100vh]' : 'translate-y-0'} transition-all duration-700`}>

                        <ul className="mb-4">
                          {/* (1:21:03) - map over our navlinks with an instant return "()" instead of "{}" */}
                              {navlinks.map((link) => (
                                  <li
                                    key={link.name}
                                    className={`flex p-4 ${isActive === link.name && 'bg-[#3a3a43]'}`}
                                    onClick={() => {
                                      setIsActive(link.name);
                                      setToggleDrawer(false);
                                      navigate(link.link);
                                    }}
                                  >
                                      <img 
                                        src={link.imgUrl}
                                        alt={link.name}
                                        className={`w-[24px] h-[24px] object-contain ${isActive === link.name ? 'grayscale-0' : 'grayscale'}`}
                                      />
                                      <p className={`ml-[20px] font-epilogue font-semibold text-[14px] 
                                                    ${isActive === link.name ? 'text-[#1dc071]' : 'text-[#808191]'}`}>
                                          {link.name}
                                      </p>
                                  </li>
                              ))}
                        </ul>

                    {/* (1:25:20) - Mobile Create customButton */}
                        <div className="flex mx-4">
                              <CustomButton 
                                  btnType="button"
                                  title={address ? 'Send Your Prescription' : 'Connect Your Wallet'}
                                  styles={address ? 'bg-[#1dc071]' : 'bg-[#8c6dfd]'}
                                  handleClick={() => {
                                    if(address) navigate('create-campaign')
                                    else 'ConnectWallet()' //replace later with connect wallet function (-1:12:45)
                                  }}
                              />
                        </div>

                  </div>

          </div>

    </div>
  )
}

export default Navbar