// import React from 'react' 
//(53:38) - import useState (import { useState } from 'react')
import React, { useState } from 'react'; 
// (53:45) - imports
import { Link, useNavigate } from 'react-router-dom';
import { logo, sun } from '../assets';
import { navlinks } from '../constants';


//(55:53) - create Icon (Basic react functional component)
// accept props set up the Icon Component in the Sidebar return statement:
const Icon = ( {styles, name, imgUrl, isActive, disabled, handleClick} ) => {
                                                                      // (-57:44) className background grey if active
    <div className={`w-[48px] h-[48px] rounded-[10px] 
      ${isActive && isActive === name && 'bg-[#2c2f32]'} flex justify-center items-center
      ${!disabled && 'cursor-pointer'}
      ${styles}` }> {/* (-58:15) */}
      
      {/* (58:43) */}
      {!isActive ? (
      
        <img src={imgUrl} alt="fund_logo" className="w-1/2 h-1/2" />
      ) : (
        <img src={imgUrl} alt="fund_logo" className={`w-1/2 h-1/2 ${isActive !== name && 'grayscale'}`} />
      )}
      {/* (-59:24) */}

    </div>
}

const Sidebar = () => {

//(54:25) - useNavigate hook:
  const navigate = useNavigate();
//(54:40) - set isActive default state to dashboard:
  const [isActive, setIsActive] = useState('dashboard')

  return (
    <div className="flex justify-between-items-center flex-col sticky top-5 h-[93vh]">
      {/* (55:34): Add Link Component  */}
        <Link to="/">
            <Icon styles="w-[52px] h-[52px] bg-[#2c2f32]" imgUrl={logo} />
        </Link>
    </div>
  )
}

export default Sidebar