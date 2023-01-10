import React from 'react'
import Button from 'react-bootstrap/Button';

import Form from 'react-bootstrap/Form';


function CreateProject() {
    return (
        <div className='CreateProjectScreen'>

            <h2 className='CP-Title'>
                Create Project
            </h2>
            <h3 className='CP-Title2'>
                Add project details
            </h3>

            <div className='FormMainContainer'>
                <Form>

                    <label >Batch</label>
                    <Form.Select aria-label="Default select example">
                        <option>select</option>
                        <option value="1">19b</option>
                        <option value="2">18b</option>
                        <option value="4">17b</option>
                        <option value="5">16b</option>
                        <option value="6">15b</option>
                        <option value="7">14b</option>
                        <option value="8">13b</option>
                        <option value="9">12b</option>
                        <option value="10">11b</option>
                        <option value="11">10b</option>
                    </Form.Select>



                    <label >Program</label>
                    <Form.Select aria-label="Default select example">
                        <option>select</option>
                        <option value="1">Computer Science</option>
                        <option value="2">Software Engineering</option>
                        <option value="3">Electrical Engineering</option>
                        <option value="4">Power Engineering</option>
                        <option value="5">Electronics Engineering</option>
                        <option value="6">Computer Engineering</option>

                    </Form.Select>




                    <label >Project Name</label>
                    <Form.Control type="text" />


                    <label >Number of group members</label>
                    <Form.Select aria-label="Default select example">
                        <option>select</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>

                    </Form.Select>




                    <label >Project type</label>
                    <Form.Control type="text" />




                    <label >Assign Supervisor</label>
                    <Form.Select aria-label="Default select example">
                        <option>select</option>
                        <option value="1">Miss Amna Umair</option>
                        <option value="2">Sir Dr. Waseem</option>
                        <option value="3">Sir Syed Faisal Ali</option>
                        <option value="4">Sir Zeeshan Saleem Khan</option>
                        <option value="5">Sir Dr.Lubaid</option>


                    </Form.Select>






                    <div className='PC-btnHolder'>
                        <Button className='PC-btn1' variant="secondary" type="submit">
                            Cancel
                        </Button>
                        <Button className='PC-btn2' variant="primary" type="submit">
                            Create Project
                        </Button>
                    </div>
                </Form>

            </div>
        </div>
    )
}

export default CreateProject