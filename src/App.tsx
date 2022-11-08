
import {notify} from "./utils/notif"
import modal from "./utils/modal"
function App() {

 
 
  return (
    <div>
      <button onClick={()=>modal('add')}>click</button>
      <button onClick={()=>notify('add',true)}>click</button>
    </div>
  );
}

export default App;
