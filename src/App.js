import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import myDesign from "./style.module.css";
import { useState } from "react";
import Footer from "./components/Footer";
import Content from "./components/Content";
function App() {
  const [db, setDB] = useState([]);
  return (
    <div className="App">
      <Footer posts={{db,setDB}} />
      {db.map(e=><Content details={e} set={setDB} key={e.id} db={db}/>)}
    </div>
  );
}

export default App;
