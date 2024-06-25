import axios from "axios";

export const grapQLAPI = async (query) => {
  const res = await axios.post(import.meta.env.VITE_GRAPQL_URL, query, {
    headers: {
      Authorization: `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjU2ZTgxOGJmZmFlN2QzMWEwNDZjNDkiLCJ1c2VyVHlwZSI6ImRvY3RvciIsImlhdCI6MTcxOTI5MTExNH0.FfzN90tNu9Nn23KUopjqkGtQYqju9M0Gl6HR7KNwhFw"}`,
    },
  });
  return res.data;
};
