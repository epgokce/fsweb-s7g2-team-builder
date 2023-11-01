import MemberForm from "../components/Form";

const CreateMemberPage = ({ fetchMembers }) => {
  return (
    <div>
      <h1>Üye Oluştur</h1>
      <hr />
      <MemberForm fetchMembers={fetchMembers} />
    </div>
  );
};

export default CreateMemberPage;
