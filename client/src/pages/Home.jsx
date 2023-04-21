// (49:57) setup
// (2:11:40) - setup import statements
import React, { useState, useEffect } from 'react' 

//bring in our useStateContext from `context/index.jsx`
import { useStateContext } from '../context'

const Home = () => {

//(2:11:53) - set state
  const [isLoading, setIsLoading] = useState(false)
//we put campaigns in state b/c we will have to fetch them from the smart contract: 
  const [campaigns, setCampaigns] = useState([])

//get some data from our context and go back to `context/index.jsx` and create function getCampaigns (-2:12:26)
  const { address, contract, getCampaigns } = useStateContext()

  return (
    <div>Home Component</div>
  )
}

export default Home