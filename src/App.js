import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Student from './components/Student';
import Home from './components/Home';
import Studentview from './components/Studentview';


function App() {
  return (
        <div className='App'>
             <BrowserRouter>
     <Home/>
    
      <Routes>     
        { <Route path='/Student' element={<Student data={{Admno:'',Sname:'',Gender:'',Dob:''}} method='post'/>}/> }
        {<Route path='/StudentView' element={<Studentview method='get'/>}/> }
        
        
      
            </Routes>


      
     
    </BrowserRouter>
    
 
        </div>
  );
}

export default App;
