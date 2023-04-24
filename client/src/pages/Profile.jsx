// (49:57) setup
// (2:11:40) - setup import statements
import React, { useState, useEffect } from 'react' 

//bring in our useStateContext from `context/index.jsx`
import { useStateContext } from '../context'

// (2:19:27) import new DisplayCampaigns in components directory: 
import { DisplayCampaigns } from '../components'

const Profile = () => {

//(2:11:53) - set state
  const [isLoading, setIsLoading] = useState(false)
//we put campaigns in state b/c we will have to fetch them from the smart contract: 
  const [campaigns, setCampaigns] = useState([])

//get some data from our context and go back to `context/index.jsx` and create function getCampaigns (-2:12:26)
  const { address, contract, getUserCampaigns } = useStateContext()



// (2:14:21) - create fetchCampaigns
  const fetchCampaigns = async () => {
    setIsLoading(true)
    const data = await getUserCampaigns()
    setCampaigns(data)
    setIsLoading(false)
  } //(-2:15:05)

// (2:13:41) - call getCampaigns function with useEffect hook: "useEffect(() => {}, [])"
    // if(contract) await getCampaigns() // can't call await getCampaigns() here  // (2:15:08)
  useEffect(() => {
    if(contract) fetchCampaigns(); 
  }, [address, contract]);

  return (
    // <div>Home Component</div>
    // (2:19:55) - Use <DisplayCampaigns /> tag like a forEach loop. (use in Home and Profile.jsx page)
    <DisplayCampaigns 
      title="All Campaigns"
      isLoading={isLoading}
      campaigns={campaigns}
    />
  )
}

export default Profile