import { Toaster } from "react-hot-toast";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthContextProvider from "./context/LoginContext";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import Gallery from "./pages/Gallery";
import PrivateRouter from "./Router/PrivateRouter";
import Detail from "./pages/Detail";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <Toaster position="right-top" />
        <Navbar />
        <Routes>
          <Route path="/firebase-authentication" element={<Gallery />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/detail/:id" element={<PrivateRouter />}>
            <Route path="" element={<Detail />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </AuthContextProvider>
  );
}

export default App;
