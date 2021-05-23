
import './App.scss';
import Welcome from './Components/welcome/Welcome';
import Services from './Components/services/Services';
import Contact from './Components/contactUs/Contact';
import Footer from './Components/footer/Footer';
import Registery from './Components/registration/Registery'
function App() {
  return (
    <div className="App">
     <div className="p-2 text-center shadow-sm fw-bolder text-danger fs-4">inpoly</div>
      <Welcome/>
      <Registery/>
      <Services/>
      <Contact/> 
      <Footer/>

    </div>
  );
}

export default App;
