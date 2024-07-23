import React, { useContext, useEffect, useState } from 'react'
import './Home.css'
import { Coincontext } from '../../context/Coincontext'
import { Link } from 'react-router-dom'
const Home = () => {
 const {allcoin,currency}=useContext(Coincontext);
 const[display,setdisplay]=useState([]);
 const[input,setinput]=useState('');

const inputhandler=(e)=>{
    setinput(e.target.value);
    if(e.target.value===''){
      setdisplay(allcoin);
    }
}

const searchhandler=async (e)=>{
  e.preventDefault();
  const coins= await allcoin.filter((item)=>{
      return item.name.toLowerCase().includes(input.toLowerCase())
  })
  setdisplay(coins);
}


 useEffect(()=>{
    setdisplay(allcoin);
 },[allcoin])
  return (
    <div className='Home'>
        <div className="he">
            <h1>LARGEST<br/>MARKET FOR CRYPTO</h1>
            <p>welcome to crypto world</p>
             <form onSubmit={searchhandler}>
                <input onChange={inputhandler} list='coinlist'value={input} type="text" placeholder='search here.. ' required/>
                        <datalist id='coinlist'>
                           {allcoin.map((item,index)=>(<option key={index} value={item.name}></option>))}
                        </datalist>



                <button type="submit">Search</button>
             </form>




        </div>
      <div className="table">
        <div className="table-layout">
          <p>#</p>
          <p>Coins</p>
          <p>Price</p>
          <p style={{textAlign:"center"}}>24hr Change</p>
         <p style={{textAlign:"right"}}>Marketcap</p>
        </div>
        {
          display.slice(0,10).map((item,index)=>(
             <Link to={`/coin/${item.id}`} className='table-layout' key={index}>
              <p>{item.market_cap_rank}</p>
              <div>
                <img src={item.image} alt="" />
                <p>{item.name +"-"+item.symbol}</p>
              </div>
              <p>{currency.symbol} {item.current_price}</p>
              <p className={item.price_change_percentage_24h>0? "green":"red"}>{Math.floor(item.price_change_percentage_24h*100)/100}</p>
               <p style={{textAlign:'right'}}>{currency.symbol} {item.market_cap.toLocaleString()}</p>
              </Link>
          ))
                    
        }
      </div>
    </div>
  )
}

export default Home
