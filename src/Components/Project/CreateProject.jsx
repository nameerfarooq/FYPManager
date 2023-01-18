import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';

import Form from 'react-bootstrap/Form';


function CreateProject() {
    const [Batch, setBatch] = useState("")
    const [Program, setProgram] = useState("")
    const [ProjectName, setProjectName] = useState("")
    const [ProjectDescription, setProjectDescription] = useState("")
    const [NoGroupMembers, setNoGroupMembers] = useState("")
    const [ProjectType, setProjectType] = useState("")
    const [Supervisor, setSupervisor] = useState("")

    const item = {
        "Batch": Batch,
        "Program": Program,
        "ProjectName": ProjectName,
        "ProjectDescription": ProjectDescription,
        "NoGroupMembers": NoGroupMembers,
        "ProjectType": ProjectType,
        "Supervisor": Supervisor
    }

    function Submit(e) {
        e.preventDefault()
        console.log("All fields", item)
    }
    function ClearForm(e) {
        e.preventDefault()
        setBatch("")
        setProgram("")
        setProjectName("")
        setProjectDescription("")
        setNoGroupMembers("")
        setProjectType("")
        setSupervisor("")

    }
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
                    <Form.Select value={Batch} onChange={(e) => setBatch(e.target.value)} aria-label="Default select example">
                        <option>select</option>
                        <option value="19b">19b</option>
                        <option value="18b">18b</option>
                        <option value="17b">17b</option>
                        <option value="16b">16b</option>
                        <option value="15b">15b</option>
                        <option value="14b">14b</option>
                        <option value="13b">13b</option>
                        <option value="12b">12b</option>
                        <option value="11b">11b</option>
                        <option value="10b">10b</option>
                    </Form.Select>



                    <label >Program</label>
                    <Form.Select value={Program} onChange={(e) => setProgram(e.target.value)} aria-label="Default select example">
                        <option>select</option>
                        <option value="Computer Science">Computer Science</option>
                        <option value="Software Engineering">Software Engineering</option>
                        <option value="Electrical Engineering">Electrical Engineering</option>
                        <option value="Power Engineering">Power Engineering</option>
                        <option value="Electronics Engineering">Electronics Engineering</option>
                        <option value="Computer Engineering">Computer Engineering</option>

                    </Form.Select>




                    <label >Project Name</label>
                    <Form.Control value={ProjectName} onChange={(e) => setProjectName(e.target.value)} type="text" />

                    <label >Project Description</label>
                    <Form.Control value={ProjectDescription} onChange={(e) => setProjectDescription(e.target.value)} type="text" />


                    <label >Number of group members</label>
                    <Form.Select value={NoGroupMembers} onChange={(e) => setNoGroupMembers(e.target.value)} aria-label="Default select example">
                        <option>select</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>

                    </Form.Select>




                    <label >Project type</label>
                    <Form.Control value={ProjectType} onChange={(e) => setProjectType(e.target.value)} type="text" />




                    <label >Assign Supervisor</label>
                    <Form.Select value={Supervisor} onChange={(e) => setSupervisor(e.target.value)} aria-label="Default select example">
                        <option>select</option>
                        <option value="Miss Amna Umair">Miss Amna Umair</option>
                        <option value="Sir Dr. Waseem">Sir Dr. Waseem</option>
                        <option value="Sir Syed Faisal Ali">Sir Syed Faisal Ali</option>
                        <option value="Sir Zeeshan Saleem Khan">Sir Zeeshan Saleem Khan</option>
                        <option value="Sir Dr.Lubaid">Sir Dr.Lubaid</option>


                    </Form.Select>






                    <div className='PC-btnHolder'>
                        <Button onClick={ClearForm} className='PC-btn1' variant="secondary" type="submit">
                            Cancel
                        </Button>
                        <Button onClick={Submit} className='PC-btn2' variant="primary" type="submit">
                            Create Project
                        </Button>
                    </div>
                </Form>

            </div>
        </div>
    )
}

export default CreateProject