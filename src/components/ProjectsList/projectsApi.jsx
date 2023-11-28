import './Projects.css'
import React, { useEffect, useState } from "react";
import axios from "axios";
import PostForm from '../Form/PostForm';
import Modal from '../Modal/modal'
import { Spinner } from '../Spinner/Spinner';

function Projects() {

    const [data, setData] = useState([]);
    const [pending, setPending] = useState(false);
    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);


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


    const handlePostSubmit = async (post) => {
        try {
            const response = await fetch('http://localhost:3005/posts/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(post)
            });
            if (response.ok) {
                const responseData = await response.json();
                console.log('Post creato:', responseData);
            } else {
                console.error('Errore nella creazione del post');
            }
        } catch (error) {
            console.error('Errore nel network:', error);
        }
    };




    return (
        <>
            <div className="grid">


                <div className="col-100 pt-3">


                    

                    <Modal isOpen={isModalOpen} onClose={closeModal}>
                        <PostForm onSubmit={handlePostSubmit} />
                    </Modal>
                    <div className="over-hidden">

                        <ul className="flex my-categories sma-100 scroll-x">

                            <li>
                                <a className="my-button text-4 text-dark mt-3" onClick={openModal}>Aggiungi Post</a>
                            </li>
                        </ul>

                    </div>

                </div>


                {pending && <Spinner />}{" "}
            </div>

            <div className="grid pt-3" id="portfolio">

                

                {data.map((item, i) => {
                    return (

                        <div className="col-25 tab-33 sma-100 p-0 m-0" key={i}>

                            
                                <div className="card" >
                                    <img src={item?.image} alt="" />
                                    <h3 className="text-white text-0">{item?.title.slice(0, 40)}</h3>
                                    {/* <p className="text-white text-0">{item?.content.slice(0, 40)}</p> */}
                                </div>
                                
                        </div>

                    );
                })}
            </div>
        </>
    );
}


export default Projects