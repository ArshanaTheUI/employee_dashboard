

import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import Card from "../components/Card";
import Table from "../components/Table";
// import "./Dashboard.css";
import Chart from "../components/Chart";

function MainDashboard() {
  return (
    <div className="dashboard">
      <Sidebar />

      <div className="main">
        <Topbar />

        <div className="cards">
          <Card title="Users" value="1200" />
          <Card title="Revenue" value="$8,500" />
          <Card title="Orders" value="320" />
        </div>

        <Table /> 
<Chart />
      </div>
    </div>
  );
}

export default MainDashboard;
