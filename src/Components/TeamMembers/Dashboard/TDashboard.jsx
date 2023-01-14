import TDashboardMain from './TDashboardMain';
import THeader from './THeader'
import TSidebar from './TSidebar';
import './Tstyle.css'
function TDashboard(props) {
  const UserName = props.UserName
  return (

    <div className="App">

      <THeader UserName={UserName} />

      <div className='Dashboard-panel'>
        
        <TSidebar />

        <TDashboardMain />

      </div>

    </div >
  );
}

export default TDashboard;
