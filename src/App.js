import { Route, Routes, useNavigate } from "react-router-dom";
import Landing from "./pages/Landing";
import ContentDetail from "./component/card/contentDetail";
import ContentDetailB from "./component/card/contentDetailB";
import ContentDetailC from "./component/card/contentDetailC";
import Home from './pages/home'
import HomeB from './pages/homeB'
import HomeC from './pages/homeC'
import { API, setAuthToken } from './config/api'
import React, { useEffect, useContext } from "react";
import { UserContext } from "../src/contex/userContext";


function App() {

  const navigate = useNavigate();
  const [state, dispatch] = useContext(UserContext);

  useEffect(() => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    } else {
      navigate('/')
    }
  
  }, [state]);
  
  const checkUser = async () => {
    try {
      const response = await API.get("/checkAuth");

      if (response.status === 404) {
        return dispatch({
          type: "failed",
        });
      }

      let payload = response.data.data.user;
      payload.token = localStorage.token;

      // Send data to useContext
      dispatch({
        type: "success",
        payload,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    checkUser();
  }, []);
  return (
    <Routes>
      <Route exact path="/" element={<Landing />} />
      <Route exact path="/home" element={<Home />} />
      <Route exact path="/homeB" element={<HomeB />} />
      <Route exact path="/homeC" element={<HomeC />} />
      <Route exact path="/detail" element={<ContentDetail />} />
      <Route exact path="/detailB" element={<ContentDetailB />} />
      <Route exact path="/detailC" element={<ContentDetailC />} />
      
    </Routes>
  );
}

export default App;
