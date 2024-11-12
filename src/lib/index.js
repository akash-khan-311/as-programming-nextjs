export const getUserRole = async () => {
  try {
    const response = await fetch("/api/user/role");

    if (!response.ok) {
      throw new Error("Failed to fetch user role");
    }

    const data = await response.json();
    return data.role;
  } catch (error) {
    return null;
  }
};

export const getSingleCourse = async (id) => {
  try {
    const response = await fetch(
      `https://as-programming-next.netlify.app/api/course/${id}`
    );
    const data = await response.json();

    if (response.ok) {
      return data.course;
    } else {
      throw new Error("Failed to fetch course");
    }
  } catch (error) {
    return null;
  }
};

// Get all instructor's courses from db
export const getCoursesForIns = async (email) => {
  try {
    const response = await fetch(
      `https://as-programming-next.netlify.app/api/courses/${email}`
    );
    const data = await response.json();
    if (response.ok) {
      return data.courses;
    } else {
      throw new Error("Failed to fetch courses");
    }
  } catch (error) {
    return null;
  }
};

// Get all users from db
export const getAllUsers = async () => {
  try {
    const res = await fetch(
      "https://as-programming-next.netlify.app/api/users",
      {
        cache: "no-store",
      }
    );
    const data = await res.json();
    if (res.ok) {
      return data.users;
    } else {
      throw new Error("Failed to fetch users");
    }
  } catch (error) {
    return null;
  }
};

export const updatedUserRoles = async (email, role) => {
  try {
    const response = await fetch(
      `https://as-programming-next.netlify.app/api/user/${email}`,

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
    return null;
  }
};

// Get all courses for admin
export const getAllCoursesAdmin = async (email) => {
  try {
    const response = await fetch(
      `https://as-programming-next.netlify.app/api/admin/courses/${email}`,
      {
        cache: "no-store",
      }
    );
    const data = await response.json();

    if (response.ok) {
      return data;
    } else {
      throw new Error("Failed to fetch courses");
    }
  } catch (error) {
    return null;
  }
};

// Update course status

export const updateCourseStatus = async (id) => {
  try {
    const response = await fetch(
      `https://as-programming-next.netlify.app/api/course/update/${id}`,
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
    const response = await fetch(
      `https://as-programming-next.netlify.app/api/courses/begginer`,
      {
        cache: "no-store",
        revalidatePath: "/",
      }
    );
    const data = await response.json();
    if (response.ok) {
      return data;
    } else {
      throw new Error("Failed to fetch beginner courses");
    }
  } catch (error) {
    return null;
  }
};

export const addToCart = async (email, courseId) => {
  try {
    const response = await fetch(
      "https://as-programming-next.netlify.app/api/cart",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, courseId }),
        next: { revalidate: new Date().getSeconds() },
      }
    );
    const data = await response.json();
    if (response.ok) {
      return data;
    }
    throw new Error("Failed to add course to cart");
  } catch (error) {
    return null;
  }
};

// Handle ssl commerz api

export const sslCommerzPayment = async (payload) => {
  try {
    const response = await fetch(
      "https://as-programming-next.netlify.app/api/payment",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    );
    const data = await response.json();
    if (response.ok) {
      return data;
    }
    throw new Error("Failed to make payment");
  } catch (error) {
    return null;
  }
};

// Get purchased courses from db

export const getPurchasedCourses = async (email) => {
  try {
    const response = await fetch(
      `https://as-programming-next.netlify.app/api/purchased/course/${email}`,
      {
        cache: "no-store",
      }
    );
    const data = await response.json();
    if (response.ok) {
      return data;
    } else {
      throw new Error("Failed to fetch purchased courses");
    }
  } catch (error) {
    return null;
  }
};

// save assignment data on database

export const saveAssignment = async (assignmentData) => {
  try {
    const response = await fetch(
      "https://as-programming-next.netlify.app/api/assignment",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(assignmentData),
      }
    );
    const data = await response.json();
    if (response.ok) {
      return data;
    }
    throw new Error("Failed to save assignment");
  } catch (error) {
    return null;
  }
};

// Get Assignment for student

export const getAssignmentForStudent = async (email) => {
  try {
    const response = await fetch(
      `https://as-programming-next.netlify.app/api/assignment/student/${email}`,
      {
        cache: "no-store",
      }
    );
    const data = await response.json();
    if (response.ok) {
      return data;
    } else {
      throw new Error("Failed to fetch assignment");
    }
  } catch (error) {
    return null;
  }
};

// Get Assignment for instructor

export const getAssignmentForInstructor = async (email) => {
  try {
    const response = await fetch(
      `https://as-programming-next.netlify.app/api/assignment/instructor/${email}`,
      {
        cache: "no-store",
      }
    );
    const data = await response.json();
    if (response.ok) {
      return data;
    } else {
      throw new Error("Failed to fetch assignment");
    }
  } catch (error) {
    return null;
  }
};

//  Update Assignment for instructor

export const updateAssignment = async (id, assignmentData) => {
  try {
    const response = await fetch(
      `https://as-programming-next.netlify.app/api/assignment/update/${id}`,
      // { revalidate: true, cache: "no-store" },
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(assignmentData),
      }
    );
    const data = await response.json();
    if (response.ok) {
      return data;
    } else {
      throw new Error("Failed to update assignment");
    }
  } catch (error) {
    return null;
  }
};

// Get Payment Summary for Admin

export const getPaymentSummary = async () => {
  try {
    const response = await fetch(
      "https://as-programming-next.netlify.app/api/payment/summary",
      {
        cache: "no-store",
      }
    );
    const data = await response.json();
    if (response.ok) {
      return data;
    } else {
      throw new Error("Failed to fetch payment summary");
    }
  } catch (error) {
    return null;
  }
};

// Get Payment Details for Admin

export const getPaymentDetails = async () => {
  try {
    const response = await fetch(
      "https://as-programming-next.netlify.app/api/payment/detailed",
      {
        cache: "no-store",
      }
    );
    const data = await response.json();
    if (response.ok) {
      return data;
    } else {
      throw new Error("Failed to fetch payment details");
    }
  } catch (error) {
    return null;
  }
};

// Convert TimeStamp to Date

export const convertTimestampToDate = (timestamp, format = "dd-MM-yyyy") => {
  const date = new Date(timestamp);

  // Helper function to pad single digit numbers with a leading zero
  const pad = (num) => num.toString().padStart(2, "0");

  const year = date.getFullYear();
  const month = pad(date.getMonth() + 1); // Months are zero-based, so add 1
  const day = pad(date.getDate());

  // Default format is 'yyyy-MM-dd HH:mm:ss'
  return format.replace("dd", day).replace("MM", month).replace("yyyy", year);
};
