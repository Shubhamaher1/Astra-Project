import logo from './logo.svg';
import './App.css';
import Absent from './Absent';
import "./Absent.css";
import Marks from './Marks';
import "./Marks.css";
import Fees from './Fees';
import PTA from './PTA';
import "./PTA.css";
import "./Responsive.css"


function App() {
  return (
   <div className='body'>
    
     <div className='body-name'>
    <div className='header'>
    <h2 className='h2'> Announcement</h2>
     <button className='massageCount' id='massageCount'>3</button>
     <hr className='hrzantal' id='hrzantal'></hr>
    </div>
     <p>Today
     <Absent/>
     <Marks/>
     </p>
     <p>
       yestarday
       <Fees/>
       <PTA/>
       <script src='./Function.js'></script>
     </p>
     </div>
     
   </div>
  );
}

export default App;
