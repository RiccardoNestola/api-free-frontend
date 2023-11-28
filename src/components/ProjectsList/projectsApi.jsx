import './Projects.css'
import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { Spinner } from '../Spinner/Spinner';

function Projects() {

    const [data, setData] = useState([]);
    const [pending, setPending] = useState(false);

    useEffect(() => {
        loadData();
    }, []);


    function loadData() {
        setPending(true);
        axios.get(`http://localhost:3005/posts/`)
        .then(res =>  setData(res.data))
            .finally(() => {
                setPending(false); // alla fine si mette lo stato del caricamento in false
            });

        
    }



    return (
        <>
            <div className="grid">
                {pending && <Spinner />}{" "}
            </div>

            <div className="grid pt-3" id="portfolio">

                

                {data.map((item, i) => {
                    return (

                        <div className="col-25 tab-33 sma-100 p-0 m-0" key={i}>

                            
                                <div className="card" >
                                    <img src={item?.image} alt="" />
                                    <h3 className="text-white text-0">{item?.title.slice(0, 40)}</h3>
                                </div>
                                
                        </div>

                    );
                })}
            </div>
        </>
    );
}


export default Projects