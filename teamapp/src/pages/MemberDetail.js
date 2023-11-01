import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";

const MemberDetail = ({ memberList }) => {
  const [member, setMember] = useState();
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
        Detail: {memberId} - {member?.name}
      </h1>
      <hr />
      <p>{member?.role}</p>
      <p>{member?.email}</p>
    </div>
  );
};

export default MemberDetail;
