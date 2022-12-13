import { useState } from "react";
import React from "react";
import Questions from "./main/question";
import {Route, Routes} from 'react-router-dom'
import Start from "./main/start";
import Result from "./main/result";

const Main = (props) => {
    return(
        <Routes>

           <Route path="/game" element={<Questions {...props}/>}/>
           <Route path="/" element={<Start {...props}/>}/>
           <Route path="/result" element={<Result {...props}/>}/>

        </Routes>
    )
}
export default Main;
