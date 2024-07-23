import React, { useContext, useEffect, useState } from 'react'
import './Coin.css'
import { useParams } from 'react-router-dom'
import { Coincontext } from '../../context/Coincontext';
const Coin = () => {

  const {coinId}= useParams();
  const [coinData,setcoinData]=useState();
  const{currency} =useContext(Coincontext);
  const fethcoinData=async ()=>{
    const options = {method: 'GET', headers: {accept: 'application/json'}};

fetch(`https://api.coingecko.com/api/v3/coins/${coinId}`, options)
  .then(response => response.json())
  .then(response => setcoinData(response))
  .catch(err => console.error(err));
  }


    useEffect(()=>{
        fethcoinData();
    },[currency])

     if(coinData){
      return (
        <div>
          <div className='coin'>
            <div className="coin-name">
              <img src={coinData.image.large} alt="" />
              <p><b>{coinData.name} ({coinData.symbol.toUpperCase()})</b></p>
            </div>
          </div>
        </div>
      )
    }else{
      return <div className='spinner'>
        <div className="spin">

        </div>
      </div>
    }

  
}

export default Coin
