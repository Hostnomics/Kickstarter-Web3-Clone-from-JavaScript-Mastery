// import React from 'react' 
//(53:38) - import useState (import { useState } from 'react')
import React, { useState } from 'react'; 
// (53:45) - imports
import { Link, useNavigate } from 'react-router-dom';
import { logo, sun } from '../assets';
import { navlinks } from '../constants';


//(55:53) - create Icon (Basic react functional component)
//************Icon has an instant return so use parens instead of brackets!! "const Icon = () => ()" NOT {} like ususal */
// accept props set up the Icon Component in the Sidebar return statement:
// (-57:44) className background grey if active
// (-58:43) - completed className on parent div
// (-59:24) - completed {isActive} logic inside outer div
const Icon = ( {styles, name, imgUrl, isActive, disabled, handleClick} ) => (
                                                                      
    <div className={`w-[48px] h-[48px] rounded-[10px] 
      ${isActive && isActive === name && 'bg-[#2c2f32]'} flex justify-center items-center
      ${!disabled && 'cursor-pointer'}
      ${styles}` }
      onClick={handleClick} > 
      
        {!isActive ? (  
          <img src={imgUrl} alt="fund_logo" className="w-1/2 h-1/2" />
        ) : (
          <img src={imgUrl} alt="fund_logo" className={`w-1/2 h-1/2 ${isActive !== name && 'grayscale'}`} />
        )}

    </div>
)

const Sidebar = () => {

//(54:25) - useNavigate hook:
  const navigate = useNavigate();
//(54:40) - set isActive default state to dashboard:
  const [isActive, setIsActive] = useState('dashboard')

  // (55:34) - Added Link Component
  return (
    <div className="flex justify-between-items-center flex-col sticky top-5 h-[93vh]">
        <Link to="/">
            <Icon styles="w-[52px] h-[52px] bg-[#2c2f32]" imgUrl={logo} />
        </Link>
    {/* (1:00:23) - Build rest of sidebar */}
        <div className="flex-1 flex flex-col justify-between items-center bg-[#1c1c24] rounded-[20px] w-[76px] py-4 mt-12">
      {/* (1:00:54) - map over all the links with instant return "()" */}
      {/* (1:01:28) - since we are mapping over the icon, we need to give it a key, then spread all link properties with {...link} */}
          <div className="flex flex-col justify-center items-center gap-3">
              {navlinks.map((link) => (            
                <Icon 
                  key={link.name}
                  {...link}
                  isActive={isActive}
                  handleClick={() => {
                    if(!link.disabled) {
                      setIsActive(link.name); 
                      navigate(link.link); 
                    }
                  }}
                />
              ))}

          </div>
          <Icon styles="bg-[#1c1c24] shadow-secondary" imgUrl={sun} />
        </div>
    </div>
  )
}

export default Sidebar