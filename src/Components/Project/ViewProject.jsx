import React from 'react'
import './projects.css'
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import MyVerticallyCenteredModal from './MyVerticallyCenteredModal';
function ViewProject() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    const [show1, setShow1] = useState(false);
    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);
    
    const [show2, setShow2] = useState(false);
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);


    return (

        <div className='ViewProjectMainDiv'>


            <h1 className='PV-PTitle'>PMBOTICS</h1>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio, earum. Voluptatum magni fugiat possimus sit eos voluptatibus illo assumenda, dolore facere, repudiandae neque ut recusandae nam maxime non, ipsam beatae.
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio, earum. Voluptatum magni fugiat possimus sit eos voluptatibus illo assumenda, dolore facere, repudiandae neque ut recusandae nam maxime non, ipsam beatae.
            </p>
            <div className='PV-Cardholder'>

                <div className='PV-Cards'>

                    <h3 className='PV-cards-heading'>
                        Documents
                    </h3>
                    <div className='PV-cards-section'>
                        Click on the button to view the documents
                        <br />
                    </div>
                    <Button className='PV-btn'variant="primary" onClick={() => handleShow(true)}>
                        View
                    </Button>
                    <MyVerticallyCenteredModal
                        details={
                            {
                                Head: 'Documents',

                                Desc: 'Not available right now !'
                            }
                        }
                        show={show}
                        onHide={() => handleClose(false)}
                    />
                </div>
                <div className='PV-Cards'>

                    <h3 className='PV-cards-heading'>
                        Live Project
                    </h3>
                    <div className='PV-cards-section'>
                        Click on the button to view the Live Project
                        <br />
                    </div>
                    <Button className='PV-btn'variant="primary">
                        View
                    </Button>

                </div>

                <div className='PV-Cards'>

                    <h3 className='PV-cards-heading'>
                        Supervisor
                    </h3>
                    <div className='PV-cards-section'>
                        Click on the button to view the Supervisor
                        <br />
                    </div>
                    <Button className='PV-btn' variant="primary" onClick={() => handleShow1(true)}>
                        View
                    </Button>
                    <MyVerticallyCenteredModal
                        details={
                            {
                                Head: 'Supervisor',

                                Desc: 'Miss Amna Umair'
                            }
                        }
                        show={show1}
                        onHide={() => handleClose1(false)}
                    />
                </div>
                <div className='PV-Cards'>

                    <h3 className='PV-cards-heading'>
                        Team Members
                    </h3>
                    <div className='PV-cards-section'>
                        Click on the button to view the Team Members
                        <br />
                    </div>
                    <Button className='PV-btn'variant="primary" onClick={() => handleShow2(true)}>
                        View
                    </Button>
                    <MyVerticallyCenteredModal
                        details={
                            {
                                Head: 'Team Members',

                                Desc: 'Muhammad Nameer (19b-017-cs), Ushna Karim (19b-019-cs), Usama Ali (19b-047-cs)'
                            }
                        }
                        show={show2}
                        onHide={() => handleClose2(false)}
                    />
                </div>

            </div>



        </div>




    )
}

export default ViewProject