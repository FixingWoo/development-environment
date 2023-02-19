import axios from "axios";

const app = {
  async get() {
    // return data

    const result = await axios.get("/api/users");

    console.log(result);

    return result.data;
  },
};

export default app;
