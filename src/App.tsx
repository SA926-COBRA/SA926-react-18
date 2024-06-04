import Alert from "./components/Alert";
import Button from "./components/Button";
import {useState} from "react";
import Like from "./components/Like.tsx";

function App() {
  const [alertVisible, setAlertVisible] = useState(false);
  return (
    <div>
      <Like onClick={() => console.log("hey")}/>
      {alertVisible && <Alert onClose={() => setAlertVisible(false)}>My alert</Alert>}
      <Button onClick={() => setAlertVisible(true)}>Click here</Button>
    </div>
  );
}

export default App;
