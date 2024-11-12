import { auth } from "@/auth";
import AddCourse from "@/components/Dashboard/Instroctor/AddCourse";

const AddCoursesPage = async () => {
  const session = await auth();

  return (
    <>
      <AddCourse user={session?.user} />
    </>
  );
};
export default AddCoursesPage;
