import { JsonPlaceHolderApi } from "../_instances";

export const postService = async () => {
  try {
    const response = await JsonPlaceHolderApi.get("/posts");

    return response.data;
  } catch (err) {
    throw err;
  }
};
