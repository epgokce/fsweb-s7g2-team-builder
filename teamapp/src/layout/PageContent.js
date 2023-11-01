import { Switch, Route } from "react-router-dom";
import MembersPage from "../pages/MembersPage";
import HomePage from "../pages/HomePage";
import MemberDetail from "../pages/MemberDetail";
import CreateMemberPage from "../pages/CreateMemberPage";
import EditMemberPage from "../pages/EditMemberPage";

const PageContent = ({ memberList, fetchMembers }) => {
  return (
    <div>
      <Switch>

        <Route path="/members" exact>
          <MembersPage memberList={memberList} />
        </Route>
        <Route path="/memebers/:memebertId" exact>
          <MemberDetail memberList={memberList} />
        </Route>
        <Route path="/edit-member/:membertId" exact>
          <EditMemberPage
            memberList={memberList}
            fetchMembers={fetchMembers}
          />
        </Route>

        <Route path="/create-member" exact>
          <CreateMemberPage fetchMembers={fetchMembers} />
        </Route>

        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="*">
          <h1>404 - Meşhur Not Found Hatası</h1>
          <hr />
          <p>
            Aradığını yanlış yerde arıyorsan aslında aramıyorsundur! Mevlana
          </p>
        </Route>
      </Switch>
    </div>
  );
};

export default PageContent;
