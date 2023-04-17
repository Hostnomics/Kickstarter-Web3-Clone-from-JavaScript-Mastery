// (1:30:22) - Add import statements
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

// (1:31:12) - import Ethers.js - utility library that will allow us to inteact with our smart contract on the blockchain.
import { ethers } from 'ethers'

import { money } from '../assets'
import { CustomButton, FormField } from '../components'

// (1:31:40) - import the 'checkIfImage' utility from our '/utils/index.js' checkIfImage() function. 
import { checkIfImage } from '../utils'


const CreateCampaign = () => {
  //(1:31:46) - initialize our useNavigate() hook call
  const navigate = useNavigate(); 

  // (1:31:58) - initialize our states
  // useState snippet called isLoading
  const [isLoading, setIsLoading] = useState(false)
//(1:32:18) - form useState hook, initialized to an object
  const [form, setForm] = useState({
    name: '',
    title: '',
    description: '',
    target: '',
    deadline: '',
    image: ''
  })

// (1:35:28) - create custom handleSubmit (regular) function for our form below, 
  const handleSubmit = () => {
    // (1:XX:XX) - completed handleSubmit logic:

  }

  return (
    // (1:33:08) - set outter div
    <div className="bg-[#1c1c24] flex justify-center items-center flex-col rounded-[10px] sm:p-10 p-4">

{/* (1:33:40) if isLoading true, then ('&&') show 'Loading...' */} 
        {isLoading && 'Loading...'}
      {/* Header div (-1:35:16) */} 
          <div className="flex justify-center items-center p-[16px] sm:min-w-[380px] bg-[#3a3a43] rounded-[10px]">
              <h1 className="font-epilogue font-bold sm:text-[25px] text-[18px] leading-[38px] text-white">Fill a Prescription</h1>
          </div>

      {/* (1:35:16) - Start form. Set onSubmit to our custom handleSubmit function above */}
          <form onSubmit={handleSubmit} className="w-full mt-[65px] flex flex-col gap-[30px]">
          {/* (1:36:15) - Create 1/2 width inputs for name and campaign title */}
              <div className="flex flex-wrap gap-[40px]">
              {/* (1:36:39) - create form field component. (1:37:26) - set the props. Set up handleChange as empty call back function at first "handleChange={() => {}}" */}
                  <FormField 
                    labelName="Your Name *"
                    placeholder="John Doe"
                    inputType="text"
                    value={form.name}
                    handleChange={() => {}}
                  />
                  <FormField 
                    labelName="Campaign Title *"
                    placeholder="Write a title"
                    inputType="text"
                    value={form.title}
                    handleChange={() => {}}
                  />
              </div>

          </form>

    </div>
  )
}

export default CreateCampaign