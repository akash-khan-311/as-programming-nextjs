export const imageUpload = async (image) => {
  try {
    const imageFormData = new FormData();
    imageFormData.append("image", image);

    const response = await fetch(
      `https://api.imgbb.com/1/upload?key=0aceccbcbe08ac8e122b2dac2b11d537`,
      {
        method: "POST",
        body: imageFormData,
      }
    );

    if (!response.ok) {
      throw new Error("Failed to upload image");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error uploading image:", error);
    throw error;
  }
};
