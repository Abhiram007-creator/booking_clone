import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Homep from "./pages/home/Homep";
import List from "./pages/list/List";
import Hotel from "./pages/hotel/Hotel";
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homep/>}/>
      <Route path="/hotels" element={<List/>}/>
      <Route path="/hotels/:id" element={<Hotel/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
