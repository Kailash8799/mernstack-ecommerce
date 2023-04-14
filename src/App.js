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
import Womens from './compotents/Womens';
import Checkout from './compotents/Checkout';
import UserProfile from './compotents/UserProfile';
import Orderdetail from './compotents/Orderdetail';
import Myorder from './compotents/Myorder';
import LoadingBar from 'react-top-loading-bar'

function App() {
  const history = useHistory()
  const [loggedin, setloggedin] = useState(false)
  const [progress, setProgress] = useState(0)
  useEffect(() => {
    setProgress(30)
    if(localStorage.getItem("logintoken")){
      setloggedin(true)
    }
    setProgress(70)
    setProgress(100)
  }, [history])
  return (
    <>
       <LoadingBar
        color='#f11946'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <Navbar loginp={loggedin}/>
      <Switch>
        <Route exact path='/' render={() => <Home setProgress={setProgress}/>} />
        <Route exact path='/login' render={()=><Login setProgress={setProgress}/>}/>
        <Route exact path='/about' render={()=><About setProgress={setProgress}/>}/>
        <Route exact path='/contact' render={()=><Contact setProgress={setProgress}/>}/>
        <Route exact path='/userprofile' render={()=><UserProfile setProgress={setProgress}/>}/>
        <Route exact path='/signup' render={()=><Signup setProgress={setProgress}/>}/>
        <Route exact path='/forgot' render={()=><Forgot setProgress={setProgress}/>}/>
        <Route exact path='/mens' render={()=><Mens setProgress={setProgress}/>}/>
        <Route exact path='/womens' render={()=><Womens setProgress={setProgress}/>}/>
        <Route exact path='/checkout' render={()=><Checkout setProgress={setProgress}/>}/>
        <Route exact path='/myorders' render={()=><Myorder setProgress={setProgress}/>}/>
        <Route exact path='/orderdetails/:oid' render={()=><Orderdetail setProgress={setProgress}/>}/>
        <Route exact path='/product/:slug' render={()=><Product setProgress={setProgress}/>}/>
        <Redirect to="/" />
      </Switch>
    </>
  );
}

export default App;
