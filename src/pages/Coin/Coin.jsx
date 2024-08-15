import React, { useContext, useEffect, useState } from 'react'
import './Coin.css'
import { useParams } from 'react-router-dom'
import { Coincontext } from '../../context/Coincontext';
import Linechart from '../../componenets/LineChart/Linechart';
const Coin = () => {

  const {coinId}= useParams();
  const [coinData,setcoinData]=useState();
  const[historydata,sethistorydata]=useState();
  const{currency} =useContext(Coincontext);
  const fethcoinData=async ()=>{
    const options = {method: 'GET', headers: {accept: 'application/json'}};

fetch(`https://api.coingecko.com/api/v3/coins/${coinId}`, options)
  .then(response => response.json())
  .then(response => setcoinData(response))
  .catch(err => console.error(err));
  }

  const fethhistoricaldata= async()=>{
    const options = {method: 'GET', headers: {accept: 'application/json'}};

fetch(`https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=${currency.name}&days=10`, options)
  .then(response => response.json())
  .then(response => sethistorydata(response))
  .catch(err => console.error(err));
  }


    useEffect(()=>{
        fethcoinData();
        fethhistoricaldata();
    },[currency])

     if(coinData,historydata){
      return (
        <div>
          <div className='coin'>
            <div className="coin-name">
              <img src={coinData.image.large} alt="" />
              <p><b>{coinData.name} ({coinData.symbol.toUpperCase()})</b></p>
            </div>
          </div>
          <div className="coin-chart">
            <Linechart historydata={historydata}/>
          </div>
          <div className="coinInfo">
            <ul>
              <li>Market Rank</li>
              <li>{coinData.market_cap_rank}</li>
            </ul>
            <ul>
              <li>Market Cap</li>
              <li>{currency.symbol}{coinData.market_data.market_cap[currency.name]}</li>
            </ul>
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
