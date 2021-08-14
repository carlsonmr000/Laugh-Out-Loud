
import api from "./apiConfig"

export const getJokes = async () => {
  const res = await api.get("/jokes")
  return res.data
}

export const getOneJoke = async (jokeID) => {
  const res = await api.get(`/jokes/${jokeID}`)
  return res.data
}

export const deleteJoke = async (jokeID) => {
  await api.delete(`/jokes/${jokeID}`)
}

export const createJoke = async (jokeData) => {
  const res = await api.post("/jokes", { joke: jokeData })
  return res.data
}

export const updateJoke = async (jokeData, jokeID) => {
  const res = await api.put(`/jokes/${jokeID}`, { joke: jokeData })
  return res.data
}

export const addCommentToJoke = async (commentData, jokeID) => {
  const res = await api.put(`/jokes/${jokeID}/add_comment`, {comment: commentData})
  return res.data
}