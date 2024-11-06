export const getUserRole = async () => {
  try {
    const response = await fetch("/api/user/role");

    if (!response.ok) {
      throw new Error("Failed to fetch user role");
    }

    const data = await response.json();
    return data.role;
  } catch (error) {
    console.error("Error fetching role:", error);
    return null;
  }
};

export const getSingleCourse = async (id) => {
  try {
    const response = await fetch(`http://localhost:3000/api/course/${id}`);
    const data = await response.json();
    console.log("this is data of course", data);
    if (response.ok) {
      return data.course;
    } else {
      throw new Error("Failed to fetch course");
    }
  } catch (error) {
    console.log("Error fetching course:", error);
    return null;
  }
};

// Get all instructor's courses from db
export const getCoursesForIns = async (email) => {
  try {
    const response = await fetch(`http://localhost:3000/api/courses/${email}`);
    const data = await response.json();
    if (response.ok) {
      return data.courses;
    } else {
      throw new Error("Failed to fetch courses");
    }
  } catch (error) {
    console.log("Error fetching courses:", error);
    return null;
  }
};

// Get all users from db
export const getAllUsers = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/users", {
      cache: "no-store",
    });
    const data = await res.json();
    if (res.ok) {
      return data.users;
    } else {
      throw new Error("Failed to fetch users");
    }
  } catch (error) {
    console.log("Error fetching users:", error);
    return null;
  }
};

export const updatedUserRoles = async (email, role) => {
  try {
    const response = await fetch(
      `http://localhost:3000/api/user/${email}`,

      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ role }),
      }
    );
    const data = await response.json();
    if (response.ok) {
      return data;
    } else {
      throw new Error("Failed to update user role");
    }
  } catch (error) {
    console.log("Error updating user role:", error);
    return null;
  }
};
