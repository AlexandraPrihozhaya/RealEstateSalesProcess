import axios from "axios"

export const api = axios.create({
  baseURL: "http://localhost:8080",
  headers: {
      'Access-Control-Allow-Origin': true,
      'Content-Type': 'application/json',
    },
})

export const getHeader = () => {
  const token = localStorage.getItem("token")
  return {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  }
}

export async function getAllUsers() {
  try {
    const result = await axios.get("http://localhost:8080/users/all", {
            headers: getHeader(),
            validateStatus: () => {
              return true;
            }
        })
    return result.data
  } catch (error) {
    throw new Error(`Error fetching users: ${error.message}`)
  }
}