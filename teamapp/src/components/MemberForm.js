import React, { useState } from "react";

export default function MemberForm(props) {
  const [member, setMember] = useState({
    isim: "",
    email: "",
    rol: "",
  });

  const changeHandler = (e) => {

    const newMemberState = {
      ...member,
      [e.target.name]: e.target.value,
      //   id: Date.now(),
    };
    setMember(newMemberState);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    props.addMemberCallbackProp(member);
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <label>
          İsim:
          <input
            value={member.isim}
            name="isim"
            onChange={(e) => changeHandler(e)}
          />
        </label>
        <label>
          Email:
          <input
            value={member.email}
            name="email"
            onChange={(e) => changeHandler(e)}
          />
        </label>
        <label>
          Rol:
          <input
            value={member.rol}
            name="rol"
            onChange={(e) => changeHandler(e)}
          />
        </label>
        {/* formun type'ı submit olduğundan, form tagindeki submit fonksiyonunu çalıştırır */}
        <button type="submit">Ekle</button>
      </form>

      {member.isim !== "" && <p>Yazdığın isim {member.isim}.</p>}
      {member.email !== "" && <p>Yazdığın email {member.email}.</p>}
      {member.rol !== "" && <p>Yazdığın rol {member.rol}.</p>}
    </>
  );
}
