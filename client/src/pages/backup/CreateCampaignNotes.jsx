 // (1:30:22) - Add import statements
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

// (1:31:12) - import Ethers.js - utility library that will allow us to inteact with our smart contract on the blockchain.
import { ethers } from 'ethers'

import { money } from '../assets'
import { CustomButton, FormField } from '../components'

// (1:31:40) - import the 'checkIfImage' utility from our '/utils/index.js' checkIfImage() function. 
import { checkIfImage } from '../utils'

// (2:03:14) - import our `useStateContext` we created in `/context/index.jsx`:
import { useStateContext } from '../context'


const CreateCampaign = () => {
  //(1:31:46) - initialize our useNavigate() hook call
  const navigate = useNavigate(); 

  // (1:31:58) - initialize our states
  // useState snippet called isLoading
  const [isLoading, setIsLoading] = useState(false)

// (2:03:17) - set createCampaign from imported useStateContext
  const { createCampaign } = useStateContext()

//(1:32:18) - form useState hook, initialized to an object
  const [form, setForm] = useState({
    name: '',
    title: '',
    description: '',
    target: '',
    deadline: '',
    image: ''
  })




// (1:48:43) - Add handleFormFieldChange to keep track of our form values
  // takes keypress event as param
  const handleFormFieldChange = (fieldName, e) => {
    // (1) first spread out the entire form '...form' and 
    // (2) then only change the special type of the field that changed, which we pass in as param 'fieldName'
    // (3) target is stored in e.target.value
    setForm({ ...form, [fieldName]: e.target.value}) 
  }



// (1:35:28) - create custom handleSubmit (regular) function for our form below, 
// (2:03:55) - make `handleSubmit` async since smart contract calls do take time.
  // const handleSubmit = (e) => {
  const handleSubmit = async (e) => {

        // (1:51:10) - prevent default page reload (don't want page to reload with react)
        e.preventDefault(); 

        // (2:05:36) - Validate URL input with `checkIfImage` function in `constants/index.js`:
        checkIfImage(form.image, async (exists) => {
            if(exists){
                  setIsLoading(true)
                  // (2:04:05) - spread the form and change target from human readable to wei:
                  // await CreateCampaign({...form, target: ethers.utils.parseUnits(form.target, 18)})
                  await createCampaign({ ...form, target: ethers.utils.parseUnits(form.target, 18)})
                  setIsLoading(false)

                  //navigate to home route to see it on the dashboard:  (-2:05:54)
                  navigate('/')
            } else {
              alert("Provide valid image URL")
              //reset image URL field to blank, but preserve the state of all other inputs in our form:
              setForm({ ...form, image: '' })
            }
        })
            

      // (2:02:54) -  call a function (pass form to `context/index.js/StateContextProvider`)
        console.log('checking all submitted form fields:', form); //check  console that all the fields are present (1:52:50)


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
                    // handleChange={() => {}} - (1:49:50) - use handleFormFieldChange passing in 'name' for fieldName b/c that's what we called it in the state
                    handleChange={(e) => handleFormFieldChange('name', e)}
                  />
                  <FormField 
                    labelName="Campaign Title *"
                    placeholder="Write a title"
                    inputType="text"
                    value={form.title}
                    // handleChange={() => {}} (1:50:02)- handleFormFieldChange here takes 'title' for param fieldName
                    handleChange={(e) => handleFormFieldChange('title', e)}
                  />
              </div>
        {/* (1:43:35) - Add textarea input outside the Name and Title div  */}
                  <FormField 
                    labelName="Story *"
                    placeholder="Write your story"
                    // inputType="text"
                    isTextArea
                    value={form.description}
                    // handleChange={() => {}} (1:50:10) - handleFormFieldChange here takes 'description' for param fieldName
                    handleChange={(e) => handleFormFieldChange('description', e)}
                  />             


        {/* Ad - call to action (-1:46:15) */}
              <div className="w-full flex justify-start items-center p-4 bg-[#8c6dfd] h-[120px] rounded-[10px]">
                <img src={money} alt="money bag" className="w-[40px] h-[40px] object-contain" />
                <h4 className="font-epilogue font-bold text-[25px] text-white ml-[20px]">You will get 100% of the raised amount</h4>
              </div>

         {/* (1:46:31) - Copy div with name and title inputs and use for ETH Goal amount and End Date */}
              <div className="flex flex-wrap gap-[40px]">
                    <FormField 
                      labelName="Goal *"
                      placeholder="MATIC 0.50"
                      inputType="text"
                      value={form.target}
                      // handleChange={() => {}} (1:50:20) - 'target' param
                      handleChange={(e) => handleFormFieldChange('target', e)}
                    />

                    <FormField 
                      labelName="End Date *"
                      placeholder="End Date"
                      inputType="date"
                      value={form.deadline}
                      // handleChange={() => {}}
                      handleChange={(e) => handleFormFieldChange('deadline', e)}
                    />
              </div>


                    <FormField 
                      labelName="Campaign image *"
                      placeholder="Place image URL of your campaign here"
                      inputType="url"
                      value={form.image}
                      // handleChange={() => {}}
                      handleChange={(e) => handleFormFieldChange('image', e)}
                    />

          {/* (1:47:28) - Add a Submit Button with our existing CustomButton component */}
                  <div className="flex justify-center items-center mt-[40px]">                
                      <CustomButton 
                          btnType="submit"
                          title="Submit new Rx campaign"
                          styles="bg-[#1dc071]"
                      />
                  </div>

              
          </form>
    </div>
  )
} // end of CreateCampaign

export default CreateCampaign