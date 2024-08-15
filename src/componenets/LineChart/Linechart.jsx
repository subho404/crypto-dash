import React, { useEffect, useState } from 'react'
import Chart from 'react-google-charts'

const Linechart = ({historydata}) => {
   
    const [data,setdata]=useState([["Date","Prices"]]);
    useEffect(()=>{
       let datacopy=[["Date","Prices"]];
       if(historydata.prices){
        historydata.prices.map((item)=>{
            datacopy.push([`${new Date(item[0]).toLocaleDateString().slice(0,-5)}`,item[1]])
        })
            setdata(datacopy)

       }
    },[historydata])

  return (
   <Chart 
   
   chartType='LineChart'
   data={data}
   height="100%"
   legendToggle
   />
  )
}

export default Linechart
