import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../Project/projects.css'
import { useState } from "react";
function CreateMilestone() {
    const [Duedate, setDueDate] = useState(new Date());
    const [Defendingdate, setDefendingDate] = useState(new Date());

    return (

        <div className='CreateProjectScreen'>

            <h2 className='CP-Title'>
                Create Milestone
            </h2>
            <h3 className='CP-Title2'>
                Add Milestone details
            </h3>

            <div className='FormMainContainer'>
                <Form>

                    <label >Milestone Name</label>
                    <Form.Control type="text" />

                    <label >Document Submission Date</label>
                    <Form.Group controlId="duedate">
                        <Form.Control
                            type="date"
                            name="duedate"
                            placeholder="Due date"
                            value={Duedate}
                            onChange={(e) => setDueDate(e.target.value)}
                        />
                    </Form.Group>
                    <label >Milestone Defending Date</label>
                    <Form.Group controlId="duedate">
                        <Form.Control
                            type="date"
                            name="duedate"
                            placeholder="Due date"
                            value={Defendingdate}
                            onChange={(e) => setDefendingDate(e.target.value)}
                        />
                    </Form.Group>







                    <label >Venue of Defending</label>
                    <Form.Control type="text" />


                    




                    <label >Milestone Details</label>
                    <Form.Control type="text" className='CM-Des'/>




                   






                    <div className='PC-btnHolder'>
                        <Button className='PC-btn1' variant="secondary" type="submit">
                            Cancel
                        </Button>
                        <Button className='PC-btn2' variant="primary" type="submit">
                            Create Milestone
                        </Button>
                    </div>
                </Form>

            </div>
        </div>


    )
}

export default CreateMilestone