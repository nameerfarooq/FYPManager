import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './HomePage.css'
import '../MainStyling.css'

function HomePage() {
    return (
        <div>


            <Navbar sticky='top' className=' NavbarHome'>
                <Container>
                    <Navbar.Brand className='WhiteTxt Heading' href="#home">FYPManager</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <button className='LoginButton'>
                            Login
                        </button>
                    </Navbar.Collapse>
                </Container>
            </Navbar>




            <div className='section2'>

                <div className='section-2-1'>
                    <h1 className='HeadingHome'>
                        FYPManager
                    </h1>
                    <p className='Para'>
                        Tool for managing all processing carried out during a Final year project. where FYP panel, supervisors and team members can handle the project collaboratively 
                    </p>
                    <button className='SignUpBTN'>
                        Sign Up
                    </button>
                </div>
                <div className='section-2-2'>
                    <img className='mainimageHome' alt="main image" src={require('../../Images/homepageimage.png')} />
                </div>


            </div>













        </div>
    )
}

export default HomePage