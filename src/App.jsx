import { Route, Routes } from "react-router-dom";
import Admin from "./components/admin/layouts/Admin";
import HomeScreen from "./pages/home/HomeScreen";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";


function App() {
  return (
    <>
      <div>
        <ToastContainer />
        <Routes>
          <Route path="/admin/*" element={<Admin />} />
          <Route path="/*" element={<HomeScreen />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
