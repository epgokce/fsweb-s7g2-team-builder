// External JS
import { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";

// Internal JS
import MembersPage from "./pages/MembersPage";
// CSS
import "./App.css";
import Main from "./layout/Main";

function App() {
  const [user, setUser] = useState({ name: "Anonim", email: "" });
  const [memberList, setMemberList] = useState();


  const fetchMembers = () => {
    return axios
      .get("https://6541768cf0b8287df1fe6144.mockapi.io/api/members/")
      .then((res) => {
        setMemberList(res.data);
        return res.data;
      });
  };

  // component did mount
  // app loaded
  useEffect(() => {
    fetchMembers();
  }, []);

  return <Main memberList={memberList} fetchMembers={fetchMembers} />;
}

export default App;
