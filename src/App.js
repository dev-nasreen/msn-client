import { createContext, useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';
import Home from './Components/Home/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";

import AvailableHotels from './Components/AvaialableHotels/AvailableHotels';
import HotelDetails from './Components/HotelDetails/HotelDetails';

export const searchContext = createContext();
function App() {
  const [search, setSearch] = useState('');
  return (
    <searchContext.Provider value={[search, setSearch]}>
       <Router>
         <Switch>
          <Route path="/searchLocation">
            <AvailableHotels></AvailableHotels>
          </Route>
         <Route path="/hotelDetails/:id">
            <HotelDetails></HotelDetails>
         </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        </Router>
    

    </searchContext.Provider> 
  );
}

export default App;
