
import './App.css'
import { Home } from './Components/Home';
import { Detalle } from './Components/Detalle';
import { useEffect, useReducer } from "react";
import {Alert} from './Utils/Alert';
import { ConsultarUsuarios } from './Services/ConsultarUsuarios';
import { BrowserRouter as Router, Routes, Route,Link } from 'react-router-dom';
import { UserContextProvider } from './Context/UserContext';

function App() {
  
  const initialState = {
    users: []
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "ADD_USER": 
        return { 
          ...state, 
          users: [...state.users, action.payload] 
        };
      case "GET_ALL_USER":{
        return {
          ...state,
          users: action.payload
        };
      }

                
      default:
         return state;
      }
    };
      
  const [state, dispatch] = useReducer(reducer,initialState);


    useEffect(() => {
      const fetchData = async () => {
        const usuarios = await ConsultarUsuarios();
        if (usuarios) {
          dispatch({ type: "GET_ALL_USER", payload: usuarios });
        } else {
          Alert("Error!", "No se pudieron obtener los usuarios", "error");
        }
      };
      fetchData();
    }, []);


  return (
    
    <>
    <Router>
       <UserContextProvider >
      <Routes>       
          <Route path="/" element={<Home />} />
          <Route path="/detalle/:id" element={<Detalle />} />        
      </Routes>    
      </UserContextProvider>   
    </Router>
    </>
  )
}

export default App
