import axios from "axios";
export const graphQLAPI = async (data) => {
    const res = await axios.post(import.meta.env.VITE_GRAPQL_URL, data, {
        headers: {
            Authorization: `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjMyMzhmMWJmZmFlN2QzMWFhNjQ5ZjUiLCJ1c2VyVHlwZSI6ImFkbWluIiwiaWF0IjoxNzE4NzEwODIwfQ.knmqzDAxRBHUQM8gEN7PHq_2lGvHEqS3wGBYsavUIz8"}`
        }
    })
    return res.data;
  };
  