import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MainPage from './components/MainPage/MainPage'
import News from './components/News/News'
import Chart from './components/Chart/Chart'
import Navbar from './components/NavBar/NavBar'
import Ask from './components/Ask/Ask'
import Qna from './components/Qna/Qna'


const App = () => (
  <Router>
    {/* <Route path="/" exact component={MainPage} /> */}
    <Navbar />
    {/* <Route path="/Appointments" exact component={Appointments} /> */}
    <Route path="/qna" exact component={Qna} />
    <Route path="/ask" exact component={Ask} />
    {/* <Route path="/service" exact component={Service} />
    <Route path="/profile" exact component={Profile} /> */}
    <Route path="/" exact component={Chart} />
    <Route path="/news" exact component={News} />
  </Router>
  // return (
  //   <div>
  //     <MainPage/>
  //   </div>
  // );
)

export default App;
