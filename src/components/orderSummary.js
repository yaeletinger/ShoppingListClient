import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Switch } from 'react-router-dom';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useDispatch, useSelector } from 'react-redux';


const OrderSummary = () => {
  const [orderSummary, setOrderSummary] = useState({
    name: '',
    address: '',
    email: '',
  });

  const shoppingList = useSelector((state) => state.itemsSlice.shoppingList);

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("");
  };
  
  return (

    <div>
      <div>
        <h1 style={{ color: 'gray' }}>סיכום הזמנה</h1>
        <div>
        
          <ul>
          {shoppingList ? shoppingList.map((shop, index) => (
               <li key={index} style={{width: '150px'}}>
                <div key={index} className={`shop ${shop.category == "1" ? "first" : shop.category == "2" ? "second" : 
                shop.category == "3" ? "third" : shop.category == "4" ? "forth" : shop.category == "5" ? "fifth" : ""}`}> 
                    {shop.name} 
                </div>

               </li> 
              )): ' '}
          </ul>

        </div>
        <br/><br/>
        
        <form id="orderForm" onSubmit={handleSubmit}>
          <TextField type="text" variant="outlined" placeholder="שם פרטי ומשפחה" required />
          <TextField type="text" variant="outlined" placeholder="כתובת מלאה" required />
          <TextField type="email" variant="outlined" placeholder="מייל" required /><br />
          <Button type="submit" style={{ backgroundColor: "red", height: '40px', alignSelf: 'flex-end', margin: '20px' }}
            variant="contained">השלם הזמנה</Button>

        </form>
      </div>
    </div>

  )
};


export default OrderSummary;

