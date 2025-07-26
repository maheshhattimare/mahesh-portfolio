import API from "./api.js";

// GET: About section
export const fetchAbout = async () => {
  try {
    const res = await API.get("/about");
    // Backend returns an array, get the first item
    return Array.isArray(res.data) && res.data.length > 0 ? res.data[0] : null;
  } catch (error) {
    console.error("Error fetching about:", error);
    throw error;
  }
};

// GET: Skills section
export const fetchSkills = async () => {
  try {
    const res = await API.get("/skill");
    return res.data;
  } catch (error) {
    console.error("Error fetching skills:", error);
    throw error;
  }
};

// GET: Projects section
export const fetchProjects = async () => {
  try {
    const res = await API.get("/projects");
    return res.data;
  } catch (error) {
    console.error("Error fetching projects:", error);
    throw error;
  }
};

// GET: Experience section
export const fetchExperiences = async () => {
  try {
    const res = await API.get("/experience");
    return res.data;
  } catch (error) {
    console.error("Error fetching Experiences:", error);
    throw error;
  }
};

// GET: Education section
export const fetchEducation = async () => {
  try {
    const res = await API.get("/education");
    return res.data;
  } catch (error) {
    console.error("Error fetching education:", error);
    throw error;
  }
};

// GET: Contact details (if public)
export const fetchContact = async () => {
  try {
    const res = await API.get("/contact");
    return res.data;
  } catch (error) {
    console.error("Error fetching contact:", error);
    throw error;
  }
};

// GET: Social links (e.g., GitHub, Twitter, etc.)
export const fetchSocials = async () => {
  try {
    const res = await API.get("/social");
    return res.data; // ✅ return the actual array
  } catch (error) {
    console.error("Error fetching social:", error);
    throw error;
  }
};
