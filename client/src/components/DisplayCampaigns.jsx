//created (2:19:14)
import React from 'react'

// (2:20:32) - import statements - click on card, go to CampaignDetails view with useNavigate
import { useNavigate } from 'react-router-dom'

import { loader } from '../assets'

const DisplayCampaigns = ({ title, isLoading, campaigns }) => {
  
    const navigate = useNavigate()

// (2:25:12) - create custom handleNavigate function for our <FundCard /> below
    const handleNavigate = (campaign) => {
        navigate(`/campaign-details/${campaign.id}`, { state: campaign })
    }

    return (
    <div>
        <h1 className="font-epilogue font-semibold text-[18px] text-white text-left">{title} ({campaigns.length})</h1>

        <div className="flex flex-wrap mt-[20px] gap-[26px]">
            {/* (2:22:38) - if isLoading THEN "&&()" show image */}
                {isLoading && (
                    <img src={loader} alt="loader" className="w-[100px] h-[100px] object-contain" />
                )}

            {/* (2:23:11) - check if NO campaigns, then "&&()" */}
                {!isLoading && campaigns.length === 0 && (
                    <p className="font-epilogue font-semibold text-[14px] leading-[30px] text-[#818183]">
                        You have not created any campaigns yet.
                    </p>
                )}

            {/* (2:24:11) - Loop through campaigns and show them as card (check !isLoading && exists) */}

                {!isLoading && campaigns.length > 0 && campaigns.map((campaign) => <FundCard 
                    key={campaign.id}
                    {...campaign}
                    handleClick={() => handleNavigate(campaign)}
                />)}

        </div>
    </div>
  )
}
export default DisplayCampaigns