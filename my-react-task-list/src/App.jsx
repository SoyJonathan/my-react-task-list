import { MainDiv } from "./components/MainDiv.jsx";
import { BrowserRouter ,Routes, Route, Link } from "react-router-dom";
import { HomePage } from "./components/HomePage.jsx"
import { AboutUsPage } from "./components/AboutUsPage.jsx"
import { TareasPage } from "./components/TareasPage.jsx"
import { FormContact } from "./components/Form.jsx";

function App() {
  
  return (
    <BrowserRouter>
    <div className="container mainTask d-block">
      <nav className="mt-3 mb-3">
        <Link to="/" className="mr-3">
          Home
          </Link>
        <Link to="/AboutUs" className="mr-3">
          AboutUs
          </Link>
          <Link to="/MainDiv" className="mr-3">
          Main
        </Link>
        <Link to="/Formulario">Contacto</Link>
      </nav>
      <Routes>
        <Route
          path="/"
          element={
            <HomePage />  
          }
        ></Route>
        <Route
          path="/aboutus"
          element={
              <AboutUsPage />
          }
          ></Route>
          <Route
          path="/MainDiv"
          element={
              <MainDiv />
          }
        ></Route>
        <Route
          path="/Tareas"
          element={
              <TareasPage />
          }
        ></Route>
        <Route
            path="/Formulario"
          element={
              <FormContact/>
          }
        ></Route>
      </Routes>
      </div>
      </BrowserRouter>
  );
}

export default App;