
import './App.css';
// import Footer from './components/footer';
import Index from './components';
import Gallery from './components/gallery';
import { Route, Routes } from 'react-router-dom';
import About from './components/about';
import ContactDetails from './components/Dashboard/contactdetails';
import Accomodation  from './components/accomodation';
import Contact from './components/contact';
import Blog from './components/blog';
import Blogsingle from './components/blogsingle';
import Signup from './components/signup';
import Signupdetails from './components/Dashboard/signupdetails';

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path='/' element={<Index/>}/>
      <Route path='/gallery' element={<Gallery/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/accomodation' element={<Accomodation/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/blog' element={<Blog/>}/>
      <Route path='/blogone' element={<Blogsingle/>}/>
      <Route path='/signup' element={<Signup/>}/>
















{/* Dashboard */}
<Route path='/contactdetails' element={<ContactDetails/>}/>
<Route path='/signupdetails' element={<Signupdetails/>}/>


    </Routes>
    </div>
  );
}

export default App;
