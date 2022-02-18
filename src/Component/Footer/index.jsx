import React  from 'react';
import {Link} from "react-router-dom";
import './styleFooter.css'
import WhatsappChat from './Whatsapp';
const Footer = () => {
   
    return (
        <>
            <div className="mt-5">
                <footer className="py-4 bgfooter ">  
                    <div className="row mx-4">
                        <div className="sectionFooter offset-1 col-md-2 col-sm-12 mb-2">
                            <h5 className={'text-white'}>Accueil</h5>
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2 "><Link to={"/"} className="nav-link p-0 text-dark all_link    text-white">SIMAT-BURUNDI</Link></li>
                                <li className="nav-item mb-2 "><Link to={"/"} className="nav-link p-0 text-dark all_link    text-white">A propos de nous</Link></li>
                                <li className="nav-item mb-2 "><Link to={"/"} className="nav-link p-0 text-dark all_link    text-white">Environnement</Link></li>
                                <li className="nav-item mb-2 "><Link to={"/"} className="nav-link p-0 text-dark all_link    text-white">Lieu Touristiques</Link></li>
                            </ul>
                        </div>
                        <div className="col-md-3 col-sm-12 offset-1 mb-2 sectionFooter">
                            <h5 className={'text-white'}>Les cours de VBC</h5>
                            <ul className="nav flex-column">
                            <li className="nav-item mb-2 "><Link to={"/"} className="nav-link p-0 text-dark all_link    text-white">SIMAT-BURUNDI</Link></li>
                                <li className="nav-item mb-2 "><Link to={"/"} className="nav-link p-0 text-dark all_link    text-white">A propos de nous</Link></li>
                                <li className="nav-item mb-2 "><Link to={"/"} className="nav-link p-0 text-dark all_link    text-white">Environnement</Link></li>
                                <li className="nav-item mb-2 "><Link to={"/"} className="nav-link p-0 text-dark all_link    text-white">Lieu Touristiques</Link></li>
                            </ul>
                        </div>
                        <div className="col-md-4 offset-1 sectionFooter col-sm-12">
                            <form>
                           
                                <div className="d-flex w-100 gap-2 mb-4">
                                    <input id="newsletter1" type="email" className="form-control" placeholder="Email address" />
                                    <button className="btn btn-danger ml-2" type="button" >S'abonner</button>
                                </div>
                                <h5 className={'text-white'}>S'abonner pour recevoir dernier annonce</h5>
                            </form>
                        </div>
                    </div>

                    <div className="border-top text-center">
                        <p className={'designed text-white mt-5'} >
                            &copy; {new Date().getFullYear()} SIMAT-BURUNDI All rights reserved.designed and developped by EB-COMPANY
                        </p>

                    </div>
                </footer>
            
            </div>
            <WhatsappChat />

        </>
    );
};

export default Footer;