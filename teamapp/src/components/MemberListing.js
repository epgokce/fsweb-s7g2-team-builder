const MemberListing = (props) => {
    return (
      <>
        <h3>Üyelerimizz</h3>
        <ul>
          {props.memberProp.map((member) => {
            return (
              <li>
                <a href={`mailto:${member.email}`}>{member.isim}</a>, (
                {member.rol})
              </li>
            );
          })}
        </ul>
      </>
    );
  };
  
  export default MemberListing;
  