import {BrowserRouter as Router, Route} from 'react-router-dom';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';


import Navbar from './components/navbar.component';
import MusicList from './components/list-music.component';
import EditMusic from './components/edit-music.component';
import CreateMusic from './components/create-music.component';

function App() {
  return (
    <Router>
       <Navbar/>
       <br/>
      <Route path="/" exact component={MusicList} />
      <Route path="/edit/:id" component={EditMusic} />
      <Route path="/create" component={CreateMusic} />
    </Router>
  );
}

export default App;