import React, { useState, useEffect, useNavigate } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AddItemForm from './components/AddItemForm';
import OrderSummary from './components/orderSummary';
import { Router, Switch, Route, Link, NavLink } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { history } from "./helpers/history";
import axios from 'axios';


const App = () => {
  const [categories, setCategories] = useState([]);
  const shoppingList = useSelector((state) => state.itemsSlice.shoppingList);
  // const history = createBrowserHistory();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/categories');
        setCategories(response.data[0]);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div style={{ textAlign: 'center' }}>
      <Switch>
        <Route path={"/orderSummary"} >
          <OrderSummary />
        </Route>
        <Route path="/">
          <AddItemForm categories={categories} />
        </Route>
      </Switch>
    </div>

  );
};

export default App;