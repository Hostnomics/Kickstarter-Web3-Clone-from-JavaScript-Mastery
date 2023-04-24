// created(2:26:01)
import React from 'react'

// (2:27:38) - import statements
import { tagType, thirdweb } from '../assets'

import { daysLeft } from '../utils'



const FundCard = ({ owner, title, description, target, deadline, amountCollected, image, handleClick }) => {

// (2:27:16) - convert days left, currently in numeric form: 
    const remainingDays = daysLeft(deadline)

  return (
    <div className="sm:w-[288px] x-full rounded-[15px] bg-[#1c1c24] cursor-pointer" onClick={handleClick}>
        {/* (2:29:22) - img displays image passed in from props */}
                                                    {/* "object-cover" provides nice zoom in property on pic */}
        <img src={image} alt="fund" className="w-full h-[158px] rounded-[15px]" />

        <div className="flex flex-col p-4">
                <div className="flex flex-row items-center mb-[18px]">
                        <img src={tagType} alt="tag" className="w-[17px] h-[17px] object-contain"/>
                        <p className="ml-[12px] mt-[2px] font-epilogue font-medium text-[12px] text-[#808191]">Category</p>
                </div>


                <div className="block">
                    <h3 className="font-epilogue font-semibold text-[16px] text-white text-left leading-[26px] truncate">{title}</h3>
                    <p className="mt-[5px] font-epilogue font-normal text-[#808191] text-left leading-[18px] ">{description}</p>
                </div>


                <div className="flex justify-between flex-wrap mt-[15px] gap-2">
                    {/* (2:34:26) - one div for raised amount (left col) and other for days left (right col) */}
                        <div className="flex flex-col">
                            <h4 className="font-epilogue font-semibold text-[14px] text-[#b2b3bd] leading-[22px]">{amountCollected} MATIC</h4>
                            <p className="mt-[3px] font-epilogue font-normal text-[12px] leading-[18px] text-[#808191] sm:max-w-[120px] truncate">Raised of {target} MATIC</p>
                        </div>

                        <div className="flex flex-col">
                            <h4 className="font-epilogue font-semibold text-[14px] text-[#b2b3bd] leading-[22px]">{remainingDays}</h4>
                            <p className="mt-[3px] font-epilogue font-normal text-[12px] leading-[18px] text-[#808191] sm:max-w-[120px] truncate">Days Left</p>
                        </div>

                </div>
                

                {/* (2:36:37) - Add last div for Addy of campaign creator */}
                <div className="flex items-center mt-[20px] gap-[12px]">
                    <div className="w-[30px] h-[30px] rounded-full flex justify-center items-center bg-[#13131a]">
                        <img src={thirdweb} alt="user" className="w-1/2 h-1/2 object-contain"/>
                    </div>
                    <p className="flex-1 font-epilogue font-normal text-[12px] text-[#808191] truncate">by <span className="text-[#b2b3bd]">{owner}</span></p>

                </div>
        </div>
    </div>
  )
}
export default FundCard