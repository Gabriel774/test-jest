import { Route, Routes, NavLink } from "react-router-dom";
import "./App.css";
import Counter from "./views/Counter/Index";
import ZipcodeSearch from "./views/ZipcodeSearch";

function App() {
  return (
    <div className="App">
      <div id="nav-container">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
          style={{
            borderRight: 0,
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0,
          }}
        >
          Contador
        </NavLink>
        <NavLink
          to="/buscar-cep"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
          style={{
            borderLeft: 0,
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0,
          }}
        >
          Buscador de CEP
        </NavLink>
      </div>

      <Routes>
        <Route path="/" element={<Counter />} />
        <Route path="/buscar-cep" element={<ZipcodeSearch />} />
      </Routes>
    </div>
  );
}

export default App;
