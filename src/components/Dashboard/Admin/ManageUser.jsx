import ManageUserDataRow from "../TableRows/ManageUserDataRow";

const ManageUser = ({ users, authUser }) => {
  return (
    <>
      <div className="container mx-auto px-4 sm:px-8">
        <div className="py-8">
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
              {users.length && (
                <table className="min-w-full leading-normal">
                  <thead className="backdrop-blur-lg bg-white/20">
                    <tr>
                      <th
                        scope="col"
                        className="px-5 py-3 text-white  border-b border-gray-200 text-left text-sm uppercase font-normal"
                      >
                        Email
                      </th>
                      <th
                        scope="col"
                        className="px-5 py-3 text-white  border-b border-gray-200 text-left text-sm uppercase font-normal"
                      >
                        Role
                      </th>
                      <th
                        scope="col"
                        className="px-5 py-3 text-white  border-b border-gray-200 text-left text-sm uppercase font-normal"
                      >
                        Status
                      </th>

                      <th
                        scope="col"
                        className="px-5 py-3 text-white  border-b border-gray-200 text-left text-sm uppercase font-normal"
                      >
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="backdrop-blur-sm bg-white/20">
                    {/* User data table row */}
                    {users?.map((user) => (
                      <ManageUserDataRow
                        key={user._id}
                        user={user}
                        authUser={authUser}
                      />
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ManageUser;
