import { useState } from "react";
import MemberCard from "../components/MemberCard";

const MembersPage = ({ memberList }) => {
  const [filterText, setFilterText] = useState("");

  return (
    <div>
      <h1>Üye Listesi</h1>
      <hr />
      <div>
        <input
          type="text"
          onChange={(e) => setFilterText(e.target.value)}
          value={filterText}
          placeholder="Type to filter..."
        />
      </div>
      <div className="member-list gap-1">
        {memberList
          ?.filter((member) => member.name.includes(filterText))
          ?.map((memeber) => (
            <MemberCard memeber={memeber} />
          ))}
      </div>
    </div>
  );
};

export default MembersPage;
