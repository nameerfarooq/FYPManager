import React from 'react'
import Backlog from '../BacklogScreen/Backlog'
import FinalProjectSubmit from '../FinalProjectSubmit/FinalProjectSubmit'
import Grades from '../Grades/Grades'
import MyTasks from '../MyTasks/MyTasks'
// eslint-disable-next-line
import ProjectDetails from '../ProjectDetails/ProjectDetails'
// eslint-disable-next-line
import TAllsprints from '../Sprints/TAllsprints'
// eslint-disable-next-line
import TAllMilestones from '../TMilestones/TAllMilestones'
// eslint-disable-next-line
import TAllNotifications from '../TNotifications/TAllNotifications'
// eslint-disable-next-line
// import AllMilestones from '../Milestone/AllMilestones'
// // eslint-disable-next-line
// import CreateMilestone from '../Milestone/CreateMilestone'
// // eslint-disable-next-line
// import AllNotifications from '../Notifications/AllNotifications'
// // eslint-disable-next-line
// import CreateNotification from '../Notifications/CreateNotification'
// // eslint-disable-next-line
// import ChangeSupervisor from '../Project/ChangeSupervisor'
// // import { ListGroup } from 'react-bootstrap'
// // eslint-disable-next-line
// import CreateProject from '../Project/CreateProject'
// // eslint-disable-next-line
// import EditTeamMembers from '../Project/EditTeamMembers'
// // eslint-disable-next-line
// import FinalProject from '../Project/FinalProject'
// // eslint-disable-next-line
// import MainProjectScreen from '../Project/MainProjectScreen'
// // eslint-disable-next-line
// import ViewProject from '../Project/ViewProject'
// // eslint-disable-next-line
// import AddSupervisor from '../Supervisor/AddSupervisor'
// // eslint-disable-next-line
// import AllSupervisors from '../Supervisor/AllSupervisors'
// // eslint-disable-next-line

import './Tstyle.css'

function TDashboardMain(props) {

    return (
        <div className='DashboardMain'>

            {/* **************************************************************************************** */}
            {/* Main Screen for projects (view and create new)  */}
            {/* **************************************************************************************** */}
            {/* <MainProjectScreen /> */}
            {/* <CreateProject/>  */}
            {/* <ViewProject/> */}
            {/* <FinalProject/> */}
            {/* <ChangeSupervisor /> */}
            {/* ********************************************************************************************* */}
            {/* create milestone window */}
            {/* ********************************************************************************************* */}
            {/* ********************************************************************************************* */}
            {/* create milestone window */}
            {/* ********************************************************************************************* */}
            {/* <AllMilestones/> */}
            {/* <CreateMilestone/> */}
            {/* <EditTeamMembers/> */}
            {/* <AllNotifications/> */}
            {/* <CreateNotification/> */}
            {/* <AllSupervisors/> */}
            {/* <AddSupervisor/> */}



            {/* <TAllNotifications/> */}
            {/* <TAllMilestones /> */}
        
        
        {/* <TAllsprints/> */}
        {/* <ProjectDetails/> */}

        {/* <FinalProjectSubmit/> */}
        {/* <Grades/> */}
        {/* <MyTasks/> */}
        <Backlog/>
        </div>
    )
}

export default TDashboardMain