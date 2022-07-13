import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
    <div className='container-fluid'>
        <Navbar currentUser={user} logMeOut={logMeOut}/>
        <div className='container d-flex justify-content-center mt-5 pt-5'> {/* d-flex is a built in Bootstrap class to make your div a flex container. mt-4 stands for margin top 4 */}
          <Routes>
            
          </Routes>
          </div>
    </div>
    </>
  );
}

export default App;
