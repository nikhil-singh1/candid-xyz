
const API_URL = "https://candid-backend.vercel.app/api";
const VITE_CLOUDINARY_CLOUD_NAME="dx0hznaxr";

// Helper to get token from localStorage
const getToken = () => localStorage.getItem("token");

/* ------------------------ AUTH ------------------------ */
export const login = async (email, password) => {
  const res = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  const data = await res.json();
  if (!res.ok) throw new Error(data.msg || "Login failed");

  if (data.token) localStorage.setItem("token", data.token);
  return data;
};

/* ------------------------ POSTS ------------------------ */
// Public
export const getPosts = async () => {
  const res = await fetch(`${API_URL}/posts`);
  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.msg || "Failed to fetch posts");
  }
  return res.json();
};

export const getPost = async (slug) => {
  const res = await fetch(`${API_URL}/posts/${slug}`);
  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.msg || "Failed to fetch post");
  }
  return res.json();
};

// Protected
export const createPost = async (postData) => {
  const res = await fetch(`${API_URL}/posts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getToken()}`,
    },
    body: JSON.stringify(postData),
  });

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.msg || "Failed to create post");
  }
  return res.json();
};

export const updatePost = async (id, postData) => {
  const res = await fetch(`${API_URL}/posts/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getToken()}`,
    },
    body: JSON.stringify(postData),
  });

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.msg || "Failed to update post");
  }
  return res.json();
};

export const deletePost = async (id) => {
  const res = await fetch(`${API_URL}/posts/${id}`, {
    method: "DELETE",
    headers: { Authorization: `Bearer ${getToken()}` },
  });

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.msg || "Failed to delete post");
  }
  return res.json();
};

/* ------------------------ IMAGE UPLOAD ------------------------ */
export const uploadImages = async (files) => {
  const uploadedUrls = [];

  for (let file of files) {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "blog_unsigned"); // from Cloudinary
    formData.append("folder", "blog_images");

    const res = await fetch(
      `https://api.cloudinary.com/v1_1/${VITE_CLOUDINARY_CLOUD_NAME}/image/upload`,
      {
        method: "POST",
        body: formData,
      }
    );

    if (!res.ok) {
      const error = await res.json();
      throw new Error(error.error?.message || "Image upload failed");
    }

    const data = await res.json();
    uploadedUrls.push(data.secure_url);
  }

  return { urls: uploadedUrls };
};

/* ------------------------ CONTACT FORM ------------------------ */
export const createContact = async (contactData) => {
  const res = await fetch(`${API_URL}/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(contactData),
  });

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.msg || "Failed to send message");
  }

  return res.json();
};

export const getContacts = async () => {
  const res = await fetch(`${API_URL}/contact`, {
    headers: { Authorization: `Bearer ${getToken()}` },
  });

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.msg || "Failed to fetch contacts");
  }

  return res.json();
};

/* ------------------------ USER MANAGEMENT (SUPER ADMIN) ------------------------ */
export const getUsers = async () => {
  const res = await fetch(`${API_URL}/users`, {
    headers: { Authorization: `Bearer ${getToken()}` },
  });

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.msg || "Failed to fetch users");
  }
  return res.json();
};

export const createUser = async (userData) => {
  const res = await fetch(`${API_URL}/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getToken()}`,
    },
    body: JSON.stringify(userData),
  });

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.msg || "Failed to create user");
  }
  return res.json();
};

export const updateUser = async (id, userData) => {
  const res = await fetch(`${API_URL}/users/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getToken()}`,
    },
    body: JSON.stringify(userData),
  });

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.msg || "Failed to update user");
  }
  return res.json();
};

export const deleteUser = async (id) => {
  const res = await fetch(`${API_URL}/users/${id}`, {
    method: "DELETE",
    headers: { Authorization: `Bearer ${getToken()}` },
  });

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.msg || "Failed to delete user");
  }
  return res.json();
};
