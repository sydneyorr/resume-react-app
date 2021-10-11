import Card from "./components/Card";
import { useState, useEffect } from "react";
import axios from "axios";

var options = {
  method: "GET",
  url: "https://reqres.in/api/users?page=2",
};

function App() {
  const [users, setUsers] = useState([])
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      let res = await axios.request(options);
      console.log(res);
      setUsers(res.data.data)
    } catch (err) {
      console.log(err);
    }
  };
  const renderUsers = () => {
    return users.map((u)=>{
      return (<p>{u.email}</p>)
    })
  }
  return (
    <div style={{ maxWidth: "1000px", margin: "10px auto" }}>
      <div>
        <Card header="About me">
          <p>hello everbody!!!</p>
        </Card>
      </div>

      <div style={styles.columnContainer}>
        <Card header="About me" flex={1}>
          <p>hello everbody!!!</p>
        </Card>
        <Card header="About me" flex={2}>
          <p>hello everbody!!!</p>
        </Card>
        <Card header="About me" flex={1}>
          <p>hello everbody!!!</p>
        </Card>
      </div>

      <Card header="About me" flex={1}>
        <p>hello everbody!!!</p>
      </Card>
      <Card header="users">
      {renderUsers()}
      </Card>
    </div>
  );
}

const styles = {
  columnContainer: {
    display: "flex",
    justifyContent: "space-between",
  },
};

export default App;