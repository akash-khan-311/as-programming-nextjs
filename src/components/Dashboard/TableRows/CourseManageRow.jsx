import Image from "next/image";
import Link from "next/link";

const CourseManageRow = ({ course, handleDeleteCourse }) => {
  const { title, category, level, price, duration, _id, status } = course;

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
        <p className="text-white whitespace-no-wrap text-center">{level}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 text-sm">
        <p className="text-white whitespace-no-wrap text-center">{category}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 text-sm">
        <p className="text-white whitespace-no-wrap text-center">{price} BDT</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 text-sm">
        <p className={`text-white whitespace-no-wrap text-center `}>
          {duration} Month
        </p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 text-sm">
        <Link
          href={"/dashboard/update/" + _id}
          className={`text-green-500 px-2 py-1 bg-white rounded-md whitespace-no-wrap  `}
        >
          Update
        </Link>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 text-sm">
        <button
          disabled={status === "approved"}
          onClick={() => handleDeleteCourse(_id)}
          className={`text-red-500 px-2 py-1 bg-white rounded-md whitespace-no-wrap disabled:opacity-50 disabled:cursor-not-allowed `}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};
export default CourseManageRow;
