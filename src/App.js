  import "bootstrap/dist/css/bootstrap.min.css"
  import './App.css'
  import FullName from './Component/profile/FullName'
  import Profiladd from './Component/profile/profiladd'
  import ProfilPhoto from './Component/profile/profilephoto'
  import Footer from './Component/Footer/footer'
  import Navigation from './Component/Navbar/navbar'

  function App() {
    return (
     
     <div className="App ">
       <div>
       <Navigation/>
      
       </div>
      <div  > 
      <ProfilPhoto/>
      
      </div>
      <FullName />
        <br />
       <Profiladd/>
      
      <Footer/>
      </div>
    );
  }

export default App;
