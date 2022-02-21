import React from 'react';
import {Link} from "react-router-dom";
import './styleFooter.css'
import {Row,Col} from 'react-bootstrap'

const Footer = () => {

    return (
        <>
            <div>
                <footer className="paddingfooter bgfooter ">
                    <Row className="mx-4">
                        <Col className="sectionFooter offset-1">
                            <div>
                                
                                <img src={"images/logo.png"} alt={"logoimage"}/>
                            </div>
                            <p className={'text-white '}>
                            © 2022 <span className={'simat-burundi'}>SIMAT-BURUNDI.</span>Tous les droits sont réservés. 
                             <span className={'text-center'}>Tous les logiciels et thèmes sont développés </span> <br/><span className={"eb-company"}>par EB-COMPANY </span>. 
                            </p>
                        </Col>
                        <Col className="sectionFooter offset-1 " >
                            <h5 className={'text-white text-uppercase'}>Tourismes</h5>
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2 "><Link to={"/"} className="nav-link p-0 text-white all_link text-mute">Tourismes</Link></li>
                                <li className="nav-item mb-2 "><Link to={"/"} className="nav-link p-0 text-white all_link">Tourismes</Link></li>
                                <li className="nav-item mb-2 "><Link to={"/"} className="nav-link p-0 text-white all_link">Tourismes</Link></li>
                                <li className="nav-item mb-2 "><Link to={"/"} className="nav-link p-0 text-white all_link">Tourismes</Link></li>
                            </ul>
                        </Col>
                        <Col className="sectionFooter offset-1  " >
                            <h5 className={'text-white text-uppercase'}>Eaux Thermales</h5>
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2 "><Link to={"/"} className="nav-link p-0 text-white all_link">Eaux Thermales</Link></li>
                                <li className="nav-item mb-2 "><Link to={"/"} className="nav-link p-0 text-white all_link">Eaux Thermales</Link></li>
                                <li className="nav-item mb-2 "><Link to={"/"} className="nav-link p-0 text-white all_link">Eaux Thermales</Link></li>
                                <li className="nav-item mb-2 "><Link to={"/"} className="nav-link p-0 text-white all_link">Eaux Thermales</Link></li>
                            </ul>
                        </Col>
                        <Col className="offset-1 sectionFooter" >
                            <h5 className={'text-white text-uppercase'}>Monuments</h5>
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2 text-white"><Link to={'/'} className="nav-link p-0 text-white all_link">Monuments</Link></li>
                                <li className="nav-item mb-2 text-white"><Link to={"/"} className="nav-link p-0 text-white all_link">Monuments</Link></li>
                                <li className="nav-item mb-2 text-white"><Link to={"/"} className="nav-link p-0 text-white all_link">Monuments</Link></li>
                                <li className="nav-item mb-2 text-white"><Link to={"/"} className="nav-link p-0 text-white all_link">Monuments</Link></li>
                            </ul>
                        </Col>
                    </Row>
                </footer>
                
            </div>


        </>
    );
};

export default Footer;