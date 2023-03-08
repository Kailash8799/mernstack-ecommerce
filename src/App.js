import './App.css';
import {Redirect,Route,Switch } from 'react-router-dom';
import Login from './compotents/Login';
import Product from './compotents/Product';
import Signup from './compotents/Signup';
import Forgot from './compotents/Forgot';
import Home from './compotents/Home';
import Navbar from './compotents/Navbar';
import About from './compotents/About';
import Contact from './compotents/Contact';
import { useEffect,useState } from 'react';
import { useHistory } from 'react-router-dom';
import Mens from './compotents/Mens';

function App() {
  const history = useHistory()
  const [loggedin, setloggedin] = useState(false)
  useEffect(() => {
    if(localStorage.getItem("logintoken")){
      setloggedin(true)
    }
  }, [history])
  return (
    <>
      <Navbar loginp={loggedin}/>
      <Switch>
        <Route exact path='/' render={() => <Home/>} />
        <Route exact path='/login' render={()=><Login/>}/>
        <Route exact path='/about' render={()=><About/>}/>
        <Route exact path='/contact' render={()=><Contact/>}/>
        <Route exact path='/signup' render={()=><Signup/>}/>
        <Route exact path='/forgot' render={()=><Forgot/>}/>
        <Route exact path='/mens' render={()=><Mens/>}/>
        <Route exact path='/product/:slug' render={()=><Product/>}/>
        <Redirect to="/" />
      </Switch>
    </>
  );
}

export default App;
