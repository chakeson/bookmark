import React, { useEffect, useState } from 'react';
import bookmarksDataLeft from "../../data/dataleft"
import bookmarksDataRight from "../../data/dataright"
import link from "../../data/link.png"

function DropDownNav({text}) {
    const [isSearchResult, setIsSearchResult] = useState([]);

    const searchFunc = (object, key) => {
        key = key.toLowerCase();
        var svar = [];
        const recursiveSearch = (obj,k) => {
            for (var nycklar in obj) {
                var stepper = obj[nycklar]
                if (stepper.children !== "") {
                    recursiveSearch( stepper.children , key )
                }
                if ((stepper.title.toLowerCase().includes(k) || stepper.title.toLowerCase().includes(k)) && (stepper.url!=="")) {
                    svar.push({"id":stepper.id, "title":stepper.title, "url":stepper.url, "icon":stepper.img})
                }
            } 
            return
        }
        recursiveSearch(object,key);
        return svar;
    }
    useEffect(()=>{
        let left = searchFunc(bookmarksDataLeft, text);
        let right = searchFunc(bookmarksDataRight, text);

        if (left.length===0 && right.length===0) {
            left = [{"id":"nolink", "title":"No results.", "url":"", "icon":""}]
        }
        
        setIsSearchResult([...left,...right].slice(0,10));
    },[text])
    
    return (
        <>
            {isSearchResult.map((data,index) => {
                return (
                <li key={data.id+index} style={{borderBottom:`${(index+1!==isSearchResult.length) ? "2px solid" : "0px"}`}}>
                    <a href={data.url} target="_blank" rel="noreferrer noopener" className="linkOwn" style={{paddingLeft:10,fontSize:18}}>
                        <img src={data.icon} alt="" className="iconOwn" onError={(e)=>{e.target.onerror = null; e.target.src=link}} style={{paddingRight:10}}/>
                        {data.title}
                    </a>
                </li>
                )
            })}
        </>
    ) 
}

export default DropDownNav;