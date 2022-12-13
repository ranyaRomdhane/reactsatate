import { useState } from "react";
import CardL from "./CardL";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';




function App() {
  const [show, setshow] = useState(false);
const [person, setperson] = useState([
    {
      FullName : "Levi Ackerman",
      Bio: "lit leader of the soldiers  of the Special Operations Squad within the Survey Corps and is widely known as humanity's strongest soldier",
    }
  ]);


  return (
    <div> 
<br/>

<button className="bot" onClick={() => setshow(!show)}>
  click here to show something</button>


  <br/>
  <br/>
  <br/>


{show?(
  <div>
  {person.map((el)=>< CardL el={el}/>)}
 
  </div>
):null}
  
      


    </div>
  );
}

export default App;
