import { createContext, useEffect, useState } from "react";

export const Coincontext =createContext();

export const CoincontextProvider = (props) => {

    const[allcoin,setallcoin]=useState([]);
    const[currency,setcurrency]=useState({
        name:"usd",
        symbol:"$"
    });


    const fetchallcoin=async ()=>{
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              'x-cg-demo-api-key': 'CG-bYuE9Yi7CADtzFfVnYg1nGFg	'
            }
          };
          
          fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}`, options)
            .then(response => response.json())
            .then(response => setallcoin(response))
            .catch(err => console.error(err));
    }

    useEffect(()=>{
          fetchallcoin();
    },[currency])

    const contextvalue={
          allcoin,currency,setcurrency
    }


    return(
      <Coincontext.Provider value={contextvalue} 
      
      
      
      {...props} />



    )
}

export default CoincontextProvider