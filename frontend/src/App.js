
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Displayticket from './components/Displayticket';
import Addticket from './components/Addticket';
import Updateticket from './components/Updateticket'
import Home from './components/Home';
import Menu from './components/Manu';
import Allticket from './components/Allticket';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Addworrent from './components/Addworrent';
import Displayworrent from './components/Displayworrent';
import Allworrent from './components/Allworrent';
import Main from './components/Main';

function App() {
  return (
    <div><Navbar></Navbar>
      <Router>
        <Routes>

        <Route path="/home" element={<Home />} />
        <Route path="/addticket" element={<Addticket />} />
          <Route path="/add" element={<Displayticket />} />
          <Route path="/update" element={<Updateticket/>}/>
          <Route path="/menu" element={<Menu/>} />
          <Route path="/all" element={<Allticket/>} />
          <Route path="/addworrent" element={<Addworrent/>}/>
          <Route path="/displayworrent" element={<Displayworrent/>}/>
          <Route path="/allworrent" element={<Allworrent/>}/>

          <Route path="/" element={<Main />} />



        </Routes>
      </Router><Footer></Footer>
    </div>
  );
}

export default App;