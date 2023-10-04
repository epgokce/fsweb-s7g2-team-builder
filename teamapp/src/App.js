import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import MemberListing from "./components/MemberListing";
import MemberForm from "./components/MemberForm";

function App() {
  const [memberList, setMemberList] = useState([]);

  const addMember = (member) => {
    const newMemberList = [...memberList, member];
    setMemberList(newMemberList);
  };

  return (
    <div className="App">
      <div className="App-landing">
        <img src={logo} width="80px" className="App-logo" alt="logo" />
        {memberList.length === 0 ? (
          <div>Henüz bir üyemiz yok 🥲</div>
        ) : (
         
          <MemberListing memberProp={memberList} />
        )}

        <MemberForm addMemberCallbackProp={addMember} />
      </div>
    </div>
  );
}

export default App;
