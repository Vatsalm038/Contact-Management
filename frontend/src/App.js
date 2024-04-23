import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
} from "react-router-dom";
import Student from "./Student";
import CreateStudent from "./CreateStudent";
import UpdateStudent from "./UpdateStudent";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Student />} />
          <Route path="/create" exact element={<CreateStudent />} />
          <Route path="/update/:id" exact element={<UpdateStudent />} />
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
