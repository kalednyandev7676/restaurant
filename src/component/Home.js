import React, { useState } from"react";
import"../styles/Home.scss";
 import menudata from"../json Api file/menu.json";
import Menu from "./Menu";


const Home=()=>
{
    const [menuData,setMenuData]=useState(menudata);
    const filteritem=(Argument)=>{
        let requiredlist=menudata.filter((curEle)=>{
                   return(curEle.categary===Argument)
               });
             setMenuData(requiredlist);
            };
 return(
        <>
            <div className="btn_head_list">
                <button onClick={()=>filteritem("Breakfast")}>breakfast</button>
                <button onClick={()=>filteritem("Lunch")}>lunch</button>
                <button onClick={()=>filteritem("dinner")}>dinner</button>
                <button onClick={()=>setMenuData(menudata)}>All-item</button>
            </div>
             <Menu menudata={menuData}/>
        </>
        )
}
export default Home;