import { Link } from "react-router-dom";

const MemberCard = ({ member }) => {
  return (
    <div>
      {/* <img src={member.img} /> */}
      <h3>{member.name}</h3>
      <p>{member.role}</p>
      <p className="email">{member.email}</p>
      <Link className="btn btn-primary me-2" to={`/members/${member.id}`}>
        <i className="fa-solid fa-search me-2" />
        İncele
      </Link>
      <Link className="btn btn-primary" to={`/edit-member/${member.id}`}>
        <i className="fa-solid fa-pen me-2" />
        Düzenle
      </Link>
    </div>
  );
};

export default MemberCard;
