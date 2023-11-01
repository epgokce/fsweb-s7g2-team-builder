import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Form from "react-bootstrap/Form";

const memberEmpty = {
  name: "",
  role: "",
  img: "",
  email: "",
};

const MemberForm = ({ fetchMembers, memberData = memberEmpty }) => {
  const [member, setMember] = useState(memberData);
  const history = useHistory();

  const formSubmit = (e) => {
    e.preventDefault();
    console.log("FROM SUBMIT EDİLDİ! ", e);

    //todo: eğer yeni ürünse post, güncelleme ise put req yap
    const reqType = member.id ? "put" : "post";
    const endpoint = `https://6541768cf0b8287df1fe6144.mockapi.io/members${
      reqType === "put" ? "/" + member.id : ""
    }`;

    axios[reqType](endpoint, member)
      .then((res) => {
        console.log("ürün başarıyla kaydedildi!");
        fetchMembers().then(() => {
          // fetch members bitti
          history.push("/members");
        });
        // todo: redirect to members page
      })
      .catch((err) => {
        console.error("Kaydedilirken bir hata ile karşılaşıldı: ", err);
      });
  };

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setMember({ ...member, [name]: value });
  };

  useEffect(() => {
    console.log("memeber > ", member);
  }, [member]);

  useEffect(() => {
    memberData && setMember(memberData);
  }, [memberData]);

  return (
    <Form onSubmit={formSubmit}>
      <Form.Group className="mb-3">
        <Form.Label htmlFor="name">Üye adı</Form.Label>
        <Form.Control
          id="name"
          type="text"
          onChange={inputChangeHandler}
          value={member.name}
          name="name"
        />
      </Form.Group>
      {/* <Form.Group className="mb-3">
        <Form.Label htmlFor="img">Fotoğraf</Form.Label>
        <Form.Control
          id="img"
          type="url"
          onChange={inputChangeHandler}
          value={member.img}
          name="img"
        />
      </Form.Group> */}
      <Form.Group className="mb-3">
        <Form.Label htmlFor="role">Rol</Form.Label>
        <Form.Control
          id="role"
          type="text"
          onChange={inputChangeHandler}
          value={member.role}
          name="role"
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label htmlFor="email">e-mail</Form.Label>
        <Form.Control
          id="email"
          type="text"
          onChange={inputChangeHandler}
          value={member.email}
          name="email"
        />
      </Form.Group>

      <button
        className="btn btn-danger me-2"
        type="button"
        onClick={() => {
          setMember({ name: "", role: "",  email:"" }); 
        }}
      >
        Formu Temizle
      </button>
      <button className="btn btn-primary" type="submit">
        Kaydet
      </button>
    </Form>
  );
};

export default MemberForm;
