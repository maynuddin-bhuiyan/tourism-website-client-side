import './App.css';
import { BrowserRouter as Router,  } from 'react-router-dom/cjs/react-router-dom.min';
import { Route, Switch } from 'react-router-dom';
import Header from './Page/Shared/Header/Header';
import Footer from './Page/Shared/Footer/Footer';
import Home from './Page/Home/Home/Home';
import ManageOrders from './Page/ManageOrders/ManageOrders';
import AddTourism from './Page/AddTourism/AddTourism';
import NotFound from './Page/NotFound/NotFound';
import ReviewItem from './Page/Home/ReviewItem/ReviewItem';
import AuthProvider from './Context/AuthProvider';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
    <Header></Header>
        <Switch>
        
        <Route exact path='/'>
          <Home></Home>
          </Route>

          <Route path='/Home'>
          <Home></Home>
          </Route>
          <Route path='/ManageOrders'>
          <ManageOrders></ManageOrders>
          </Route>
         

          <Route path='/Tourism'>
          <AddTourism></AddTourism>
          </Route>
          
         

          <Route path='/Manage/:id'>
          <ReviewItem></ReviewItem>
          </Route>

          <Route exact path='*'>
          <NotFound></NotFound>
          </Route>
          
          
        </Switch>
        <Footer></Footer>

      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
