import React, { useContext } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import arrow from '../../assets/arrow_icon.png'
import { Coincontext } from '../../context/Coincontext'
const Navbar = () => {
   const{setcurrency}=useContext(Coincontext)
   const currencyHandle =(event)=>{
      switch(event.target.value){
        case "usd":{
          setcurrency({name:"usd",Symbol:"$"})
          break;
        }
          case "eur":{
            setcurrency({name:"eur",Symbol:"€"})
            break;
          }
            case "inr":{
              setcurrency({name:"inr",Symbol:"₹"})
              break;
            }
            default:{
              setcurrency({name:"usd",Symbol:"$"})
              break;
            }
      }
   }

  return (
    <div className='navbar'>
        <img src={logo} className='logo' />
       <ul>
        <li>Home</li>   
        <li>About</li>
        <li>Pricing</li>
        <li>Blog</li>
       </ul>
        <div className="nav-right"></div>
          <select onChange={currencyHandle}>
            <option value="usd">USD</option>
            <option value="eur">EUR</option>
            <option value="inr">INR</option>
          </select>

          <button>SIgnup <img src={arrow}/></button>
    </div>
  )
}

export default Navbar
