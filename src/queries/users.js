import User from "@/models/User";

export const createUser = async (user) => {
  try {
    await User.create(user);
  } catch (error) {
    throw new Error(error);
  }
};
