import { createContext } from "react";
import Component1 from "./components/Component1";
const firstname=createContext()
const lastname=createContext()

function App() {
   
  return (
    <div className="App">
      <firstname.Provider value={'Aayush'}>
        <lastname.Provider value={'Patel'}>
      <Component1/>
      </lastname.Provider>
      </firstname.Provider>
    </div>
  );
}

export default App;
export {firstname,lastname};
