import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Homepage from "./components/homepage/Homepage";
import Documents from "./components/documents/Documents";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <BrowserRouter>
      <Sidebar></Sidebar>
      <Routes>
        <Route path="/homepage" element={<Homepage/>}> </Route>
        <Route path="/documents" element={<Documents/>}> </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
