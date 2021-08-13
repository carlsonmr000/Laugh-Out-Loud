import api from "./apiConfig"


export const getAllComments = async () => {
  const res =  await api.get("/comments")
  return res.data
}