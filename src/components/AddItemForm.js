import React, { useRef, useState, useEffect } from 'react';
import '../App.css';
import { useDispatch, useSelector } from 'react-redux';
import {addItem} from '../features/itemsSlice';
import { useHistory } from "react-router-dom";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { BrowserRouter as Router, Routes, Route, Link, Switch, useNavigate } from 'react-router-dom';

    const AddItemForm = ({categories}) => {
        const totalitems = useSelector((state) => state.itemsSlice.totalitems);
        const shoppingList = useSelector((state) => state.itemsSlice.shoppingList);
        const categoryCount = useSelector((state) => state.itemsSlice.categoryCount);
        
        const [showSecondScreen, setShowSecondScreen] = useState(false);
        const history = useHistory();
        
        const dispatch = useDispatch();
        const [itemName, setItemName] = useState('');
        const [category, setCategory] = useState('');
      
        const handleAddItem = () => {
          if (itemName.trim() === '') {
            return;
          }
      
          dispatch(addItem({ name: itemName, category }));
          
          setItemName('');
          setCategory('');
        };
    
    return(
        <div>
          <h1 style={{color: 'gray'}}>רשימת קניות</h1>
           <h2 style={{color: 'gray'}}>
            סה''כ: {totalitems} מוצרים
         </h2>
         <TextField id="outlined-basic" variant="outlined" 
         type="text"
         placeholder="מוצר"
         value={itemName}
         onChange={(e) => setItemName(e.target.value)}/>
         <br/>
        <select style={{height: '40px', color: 'red', margin: '20px'}} value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="">בחר קטגוריה</option>
        {categories ? categories.map((category) => (
            <option value={category.id} key={category.id}> {category.name}</option>
          )): ' '}
      </select>
      <Button onClick={handleAddItem} style={{backgroundColor: "red", height: '40px'}} variant="contained">הוסף</Button>
      

          <div className="container">
            {categories ? categories.map((category) => (
            <div value={category.id} key={category.id} className={`category ${category.id == "1" ? "first" : category.id == "2" ? "second" : 
            category.id == "3" ? "third" :  category.id == "4" ? "forth" :  category.id == "5" ? "fifth": ""}`}> 
              {`${category.name} - ${categoryCount[parseInt(category.id)-1]} מוצרים`}
              </div>
          )): ' '}
        
          {shoppingList ? shoppingList.map((shop, index) => (
              <div key={index} className={`shop ${shop.category == "1" ? "first" : shop.category == "2" ? "second" : 
              shop.category == "3" ? "third" : shop.category == "4" ? "forth" : shop.category == "5" ? "fifth" : ""}`}> 
                  {shop.name} 
              </div>
            )): ' '}
             </div>
            <Link to={"/orderSummary"} style={{color: 'red'}} replace>סיים הזמנה</Link>
      </div>
           
       
       );
    };
    

export default AddItemForm;


