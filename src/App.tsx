import "./App.css";
import { Table } from "./components/Table";
import { issues } from "./issues";

function App() {
  return <Table issues={issues} />;
}

export default App;
