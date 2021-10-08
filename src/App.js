import './App.css';
import Navbar from './components/Navbar';
import Post from './components/views/Post';
import Profile from './components/views/Profile';

import { BrowserRouter, Route, Switch } from 'react-router-dom'


function App() {


  const Routing = () => {
    
    return (
      <Switch>
        <Route exact path="/post">
          <Post />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
      </Switch>
    )
  }

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routing />
      </BrowserRouter>
    </>
  );
}

export default App;
