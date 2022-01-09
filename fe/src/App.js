import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

// Deklarasi pages 
import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard"
import GenerateLaporan from "./pages/Laporan"

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/login" component={Login} />
        <Route path="/laporan" component={GenerateLaporan} />
      </Switch>
    </Router>
  );
}