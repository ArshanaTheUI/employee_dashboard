

import Card from "../components/Card";
import Table from "../components/Table";
import Chart from "../components/Chart";

function MainDashboard() {
  return (
    <>
      <div className="cards">
        <Card title="Users" value="1200" />
        <Card title="Revenue" value="$8,500" />
        <Card title="Orders" value="320" />
      </div>

      <Table />
      <Chart />
    </>
  );
}

export default MainDashboard;
