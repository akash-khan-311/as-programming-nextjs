import { auth } from "@/auth";
import ManageUser from "@/components/Dashboard/Admin/ManageUser";
import { getAllUsers } from "@/lib";

const ManageUserPage = async () => {
  const users = await getAllUsers();
  const session = await auth();
  const user = session.user;

  return (
    <>
      <ManageUser users={users} authUser={user} />
    </>
  );
};
export default ManageUserPage;
