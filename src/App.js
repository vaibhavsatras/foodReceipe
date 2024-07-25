import './App.css';
import {Outlet} from 'react-router-dom'
import Header from './Components/header';
import Footer from './Components/footer';

function App() {

  return (
    <>
        <Header/>
        <div className='min-h-screen'>
          <Outlet/>
        </div>
        <Footer/>
    </>
  );
}

export default App;
