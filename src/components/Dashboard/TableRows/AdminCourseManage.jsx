"use client";
const AdminCourseManage = ({ course, handleChangeStatus }) => {
  const { title, category, img, level, price, duration, _id, status } = course;
  return (
    <tr>
      <td className="px-5 py-5 border-b border-gray-200  text-sm">
        <div className="flex items-center">
          <div className="ml-3">
            <p className="text-white whitespace-no-wrap ">{title}</p>
          </div>
        </div>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 text-sm">
        <p className="text-white whitespace-no-wrap ">{level}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 text-sm">
        <p className="text-white whitespace-no-wrap ">{category}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 text-sm">
        <p className="text-white whitespace-no-wrap ">{price} BDT</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 text-sm">
        <p className={`text-white whitespace-no-wrap  `}>{duration} Month</p>
      </td>

      <td className="px-5 py-5 border-b border-gray-200 text-sm">
        <button
          disabled={status === "approved" ? true : false}
          className="bg-red-500 text-white px-4 py-[2px] rounded-md disabled:bg-red-400 disabled:cursor-not-allowed"
        >
          Delete
        </button>
      </td>
      <td className={`px-5 py-5 border-b border-gray-200 text-sm text-white`}>
        {/* <span
          className={`px-5 py-1 rounded-lg  text-white capitalize ${
            status === "approve" ? "bg-green-700" : "bg-yellow-700"
          } `}
        >
          {status}
        </span> */}
        <button
          onClick={() => handleChangeStatus(_id)}
          disabled={status === "approved" ? true : false}
          className={`bg-green-600 text-white px-4 py-[2px] rounded-md disabled:opacity-50 disabled:cursor-not-allowed`}
        >
          {status === "approved" ? "Approved" : "Approve"}
        </button>
      </td>
    </tr>
  );
};
export default AdminCourseManage;
