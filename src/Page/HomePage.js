import React from "react";
import { useSelector } from "react-redux";

function HomePage(props){
    const hobbyList = useSelector(state => state.hobby.list)
    console.log(hobbyList)
    return(
        <div>
            <h1>Redux</h1>
        </div>
    )
}
export default HomePage