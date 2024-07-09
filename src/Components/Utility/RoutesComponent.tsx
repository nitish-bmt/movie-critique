import { BrowserRouter, Route, Routes } from "react-router-dom";

import { useNavigate } from "react-router-dom";

import Catalogue from "../../Pages/Catalogue";
// import Login from "../../Pages/Login";
import Register from "../../Pages/Register";
import Movie from "../../Pages/Movie";
import Login from "../../Pages/Login";

import Comments from "../Comments";
import Navbar from "../Common/Navbar";
// import {NavigateComponent}
// export let handleNavigate: (uri: string)=>void;

// Added routing
const RoutesComponent: React.FC = ()=>{
    // const navigate = useNavigate();

    // handleNavigate = (uri:string)=>{
    //     navigate(uri);
    // }

    return(
        // <MainContext.Provider value={{ users, setUsers, admin, setAdmin }}>
        <>
            <BrowserRouter>
            <Navbar/>
                {/* <NavigationComponent /> */}
                <Routes>
                    <Route path="/" element={<Catalogue />} />
                    <Route path="/comments" element={<Comments/>} />
                    <Route path="/login" element={<Login/>} />
                    <Route path="/register" element={<Register/>} />
                    <Route path="/movie/:id" element={<Movie/>} />
                </Routes>
            </BrowserRouter>
        </>
        // </MainContext.Provider>
    );
};

export default RoutesComponent;