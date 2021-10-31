import './App.css';
import { BrowserRouter as Router, } from 'react-router-dom/cjs/react-router-dom.min';
import { Route, Switch } from 'react-router-dom';
import Header from './Page/Shared/Header/Header';
import Footer from './Page/Shared/Footer/Footer';
import Home from './Page/Home/Home/Home';
import ManageOrders from './Page/ManageOrders/ManageOrders';
import AddTourism from './Page/AddTourism/AddTourism';
import NotFound from './Page/NotFound/NotFound';
import ReviewItem from './Page/Home/ReviewItem/ReviewItem';
import AuthProvider from './Context/AuthProvider';
import PrivateRouter from './Page/PrivateRouter/PrivateRouter';
import Login from './Page/Login/Login';



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


            <Route path='/login'>
              <Login></Login>
            </Route>


            <PrivateRouter path='/Manage/:id'>
              <ReviewItem></ReviewItem>
            </PrivateRouter>

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
