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

// Get all courses for admin
export const getAllCoursesAdmin = async (email) => {
  try {
    const response = await fetch(
      `http://localhost:3000/api/admin/courses/${email}`,
      {
        cache: "no-store",
      }
    );
    const data = await response.json();
    console.log(data);
    if (response.ok) {
      return data;
    } else {
      throw new Error("Failed to fetch courses");
    }
  } catch (error) {
    console.log("Error fetching courses:", error);
    return null;
  }
};

// Update course status

export const updateCourseStatus = async (id) => {
  try {
    const response = await fetch(
      `http://localhost:3000/api/course/update/${id}`,
      { method: "PUT" },
      { cache: "no-store" }
    );
    const data = await response.json();
    if (response.ok) {
      return data;
    } else {
      throw new Error("Failed to update course status");
    }
  } catch (error) {}
};
// Get only beggiener courses from db

export const getBeginnerCourses = async () => {
  try {
    const response = await fetch(`http://localhost:3000/api/courses/begginer`, {
      cache: "no-store",
      revalidatePath: "/",
    });
    const data = await response.json();
    if (response.ok) {
      return data;
    } else {
      throw new Error("Failed to fetch beginner courses");
    }
  } catch (error) {
    console.log("Error fetching beginner courses:", error);
    return null;
  }
};

export const addToCart = async (email, courseId) => {
  try {
    const response = await fetch("http://localhost:3000/api/cart", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, courseId }),
      next: { revalidate: new Date().getSeconds() },
    });
    const data = await response.json();
    if (response.ok) {
      return data;
    }
    throw new Error("Failed to add course to cart");
  } catch (error) {
    console.log("Error adding course to cart:", error);
    return null;
  }
};

// Handle ssl commerz api

export const sslCommerzPayment = async (payload) => {
  try {
    const response = await fetch("http://localhost:3000/api/payment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    const data = await response.json();
    if (response.ok) {
      return data;
    }
    throw new Error("Failed to make payment");
  } catch (error) {
    console.log("Error making payment:", error);
    return null;
  }
};
