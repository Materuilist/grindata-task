import React from "react";
import { EmployeesEditor } from "./components/EmployeesEditor";

function App() {
  return (
    <div style={{ height: "100vh" }}>
      <EmployeesEditor employees={[]}/>
    </div>
  );
}

export default App;
