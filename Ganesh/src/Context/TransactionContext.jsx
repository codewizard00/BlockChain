import React,{useEffect,useState} from 'react'
import {ethers} from 'ethers';

import { ContractAbi,contractAddress } from '../Utils/constants';

export const TransactionsContext = React.createContext();

const {ethereum} = window;
 
const getEthereumContract=()=>{
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const transactionsContract = new ethers.Contract(contractAddress,ContractAbi,signer)
    console.log({provider,signer,transactionsContract})
}

export const TransactionsProvider =({children})=>{
    const [currentAccount ,SetCurrentAccount]=useState('');
    const [formData,setFormData] = useState({addressTo:'',amount:'',keyword:'',message:''})
    const [isLoading,setIsLoading] = useState(false);
    const [transactionCount,setTransactionCount] = useState(localStorage.getItem('transactionCount'))

    const handleChange=(e,name)=>{
        setFormData((prevState)=>({...prevState,[name]:e.target.value}))
    }

    const CheckifWalletIsConnected =async()=>{
        try{
            if(!ethereum){
                return alert("Please Install Metamask")
            }
            const accounts = await ethereum.request({method:"eth_accounts"});
            if(accounts.length){
                SetCurrentAccount(accounts[0]);
                console.log(accounts)
            }
            else{
                console.log("Not found")
            }
        }
        catch(error){
            console.log(error);
            throw new Error('No ethereum object is s')
        }
    }

    const connectWallet= async()=>{
        try{
            if(!ethereum){
                 return alert('Please install Metamask')
                }
            const accounts = await ethereum.request({method:"eth_requestAccounts"});
            SetCurrentAccount(accounts[0]);
            console.log(currentAccount)

        }
        catch(error){
            console.log(error);
            throw new Error('No ethereum object is present')
        }
    }

    const sendTransaction = async()=>{
        try{
            if(!ethereum) return alert('Please install metamask')
            const {addressTo,amount,keyword,message} = formData;
            const transactionContract=getEthereumContract();
            const parsedAmount = ethers.utils.parseEther(amount)
            await ethereum.request({
                method:"eth_sendTransaction",
                params:[{
                    from: currentAccount,
                    to:addressTo,
                    gas:'0x5208',
                    value:parsedAmount._hex,
                }]
            })

            const transactionHash = await transactionContract.addToBlockChain(addressTo,parsedAmount,message,keyword);
            setIsLoading(true);
            console.log(`Loading - ${transactionHash.hash}`)
            await transactionHash.wait();
            setIsLoading(false);
            console.log(`Success - ${transactionHash.hash}`)
            const transactionCount = await transactionsContract.getTransactionContract();
            setTransactionCount(transactionCount.toNumber());
        }  
        catch(error){
            console.log(formData)
            console.log(error);
            throw new Error("No ethreum object")
        }

    }

    useEffect(()=>{
        CheckifWalletIsConnected();
    },[])

    return (
        <TransactionsContext.Provider value={{connectWallet,currentAccount,formData,handleChange,sendTransaction,setFormData}} >
            {children}
        </TransactionsContext.Provider>
    )
}