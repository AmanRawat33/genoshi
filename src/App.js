import {BrowserRouter, Routes, Route} from "react-router-dom"
import Pricing from './pages/Pricing';
import Profile from './pages/Profile';
import NewGraph from './pages/NewGraph';
import HomePage from "./pages/HomePage";
import Header from "./components/Header"
import Account from "./pages/Account";
import GraphDetails from "./pages/GraphDetails"
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/pricing" element={<Pricing />}/>
        <Route path="/profile" element={<Profile />}/>
        <Route path="/new-graph" element={<NewGraph />}/>
        <Route path="/account-details" element={<Account />}/>
        <Route path="/graph-details" element={<GraphDetails />}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
