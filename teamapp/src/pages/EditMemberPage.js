import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import MemberForm from "../components/Form";

const EditMemberPage = ({ memberList, fetchMembers }) => {
  const [member, setMember] = useState({});
  const { memberId } = useParams();
  const history = useHistory();

  useEffect(() => {
    const pro = memberList?.find((pro) => pro.id === memberId);
    setMember(pro);
  }, [memberList, memberId]);

  return (
    <div>
      <h1>
        <button
          onClick={() => {
            history.goBack();
          }}
        >
          <i className="fa-solid fa-chevron-left" />
        </button>{" "}
        Edit: {memberId} - {member?.name}
      </h1>
      <hr />
      <MemberForm memberData={member} fetchMembers={fetchMembers} />
    </div>
  );
};

export default EditMemberPage;
