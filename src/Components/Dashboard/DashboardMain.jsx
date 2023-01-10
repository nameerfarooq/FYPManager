import React from 'react'
import CreateMilestone from '../Milestone/CreateMilestone'
// import { ListGroup } from 'react-bootstrap'
// eslint-disable-next-line
import CreateProject from '../Project/CreateProject'
// eslint-disable-next-line
import MainProjectScreen from '../Project/MainProjectScreen'
import ViewProject from '../Project/ViewProject'
import FinalGrades from '../Supervisor/FinalGrades'
// import TeamMemberWindow from '../TeamMembers/TeamMemberWindow'
import './style.css'
function DashboardMain() {
    return (
        <div className='DashboardMain'>
            
           {/* Main Screen for projects (view and create new)  */}
            {/* <MainProjectScreen /> */}
            
            {/* create project screen */}
            {/* <CreateProject/> */}
            
            {/* view project screen */}
            {/* <ViewProject/> */}
            {/* <FinalGrades m1={'nameer'} projectGrade={45} m1g={80} m2={'Ushna'} m2g={80} m3={'Usama1'} m3g={80} /> */}


{/* create milestone window */}
            <CreateMilestone/>
            {/* <TeamMemberWindow /> */}
            
        </div>
    )
}

export default DashboardMain