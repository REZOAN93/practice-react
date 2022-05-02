import './App.css';
import User from './components/User/User';
import data from '../src/fakeData/data.json'
import { useEffect } from 'react';
import React, { useState } from 'react';
import Header from './components/Header/Header';
import Cart from './components/Cart/Cart';

function App() {
  const firstfifteen = data.slice(0, 45)
  const [user, setusers] = useState(firstfifteen);
  const [cart,setcart]=useState([]);

  const handleaddUser=(props)=>{
    const newCart=[...cart,props];
    setcart(newCart)
  }
  return (
    <div className="App">
      <Header></Header>
      <div className='app-Body'>
        <div className='user-list'>
          {
            user.map(ur => <User user={ur} key={ur.id} handleaddUser={handleaddUser}></User>)
          }
        </div>

        <div className='app-summery'>
          <Cart cart={cart}></Cart>
        </div>
      </div>

    </div>
  );
}

export default App;
