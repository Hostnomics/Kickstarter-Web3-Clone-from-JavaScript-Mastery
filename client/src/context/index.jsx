// created at (1:54:05):

// (1:54:29) set up imports
import React, { useContext, createContext } from 'react'

//import the utility functions we need from ThirdWeb: 
import { useAddress, useContract, useMetamask, useContractWrite } from '@thirdweb-dev/react'

//import ethers: 
import { ethers } from 'ethers'

//create our context: 
const StateContext = createContext(); 

// (1:55:19) - CREATE AND EXPORT OUR CONTEXT PROVIDER: 
// export const StateProvider = ({ children }) => {}  
export const StateContextProvider = ({ children }) => {  //regular react functional component
        const { contract } = useContract("0x27dbc014EB54a6Ba0b1F69F04A97D666E10d22b0"); //Get contract address from our provider (ThirdWeb hosted dashboard) (1:56:01)

        // (1:56:25): const mutateAsync: and set to createCampaign to which we set equal to 
        // useContractWrite() and pass the contract and specify the name of the write function
        const { mutateAsync: createCampaign } = useContractWrite(contract, 'createCampaign');


        //(1:56:56) - Now get the address of our smart wallet: 
        const address = useAddress();

        // set connection for user's smart wallet:
        const connect = useMetamask();

        // (1:57:26) - write `publishCampaign` function which will take the form we originally console logged in `/components/CreateCampaign`
        const publishCampaign = async (form) => {
            //(1:59:18) - wrap our data variable in a try-catch block:

                try {
                        const data = await createCampaign([
                        // (1:58:38) - order matters. See order set in our `web3/contracts/CrowdFunding.sol`
                            address, //owner
                            form.title, // title
                            form.description, // description
                            form.target,
                            // See (1:58:48) - format date with getTime() which gives us number of seconds passed since 1970
                            // form.deadline, 
                            new Date(form.deadline).getTime(), 
                            // form.amountCollected,
                            form.image
                        ])

                        //if success: 
                        console.log("contract call success", data)

                } catch (error) {
                        console.log("contract call failure", error)
                }
        } //end of publishCampaign fn

// (2:12:39) - create getCampaigns function to be called from pages/Home.jsx 
        const getCampaigns = async () => {
            const campagins = await contract.call('getCampaigns')

            console.log(`log before parsing:`, campagins)

            // (2:15:50) - parse through our campaigns and instantly return "()" an object "campagins.map(() => ({}))"
                                    //campaign array object, i = index of our campaign
            const parsedCampaigns = campagins.map((campaign, i) => ({
               owner: campaign.owner,
               title: campaign.title,
               description: campaign.description,
               target: ethers.utils.formatEther(campaign.target.toString()),
               deadline: campaign.deadline.toNumber(),
               amountCollected: ethers.utils.formatEther(campaign.amountCollected.toString()),
               image: campaign.image,
               pId: i
            }))

            console.log('log parsed Campaigns:', parsedCampaigns)

            return parsedCampaigns

        } //end of getCampaigns function



    // (2:00:18) - return  to pass it from the context to our CreateCampaign component page
    // this StateContextProvider has to return something, so return a StateContext.Provider (-2:00:15)
        return (
            // StateContext.Provider takes a value, which is everything you want to share across all of your components.
            // (2:09:06) - forgot to add connect function.
            // createCampaign //but here createCampaign is the name of the contract call, so we need to refer to our publishCampign function:
                    // (2:00:53) - So, rename publishCampaign AS createCampaign like this: `createCampaign: publishCampaign`
                    // (2:13:26) - add newly created getCampaigns function to StateContext values
            <StateContext.Provider
                value={{ 
                    address,
                    contract,             
                    connect,                 
                    createCampaign: publishCampaign,
                    getCampaigns               
                     }}
            >
                {/* (2:01:01) - render {children} b/t StateContext.Provider  */}
                {children}
            </StateContext.Provider>
        )
        
} //end of export StateContextProvider




// (2:01:10) - IN ORDER TO USE StateContext.Provider, 
    // (1) EXPORT CUSTOM HOOK: 
    // (2) Wrap ENTIRE APPLICATION in useStateContext / StateContextProvider in main.jsx
    export const useStateContext = () => useContext(StateContext)
