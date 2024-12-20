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

//
export async function registerUser(registration) {
  try {
    const response = await axios.post("http://localhost:8080/auth/register", registration);
    return response.data
  } catch (error) {
    if (error.response && error.response.data) {
      throw new Error(error.response.data)
    } else {
      throw new Error(`User registration error : ${error.message}`)
    }
  }
}

//
export async function loginUser(login) {
  try {
    const response = await axios.post("http://localhost:8080/auth/login", login)
    if (response.status >= 200 && response.status < 300) {
      return response.data
    } else {
      return null
    }
  } catch (error) {
    console.error(error)
    return null
  }
}

//
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

//
export async function deleteUser(userId) {
  try {
    const response = await axios.delete(`http://localhost:8080/users/delete/${userId}`, {
      headers: getHeader()
    })
    return response.data
  } catch (error) {
    return error.message
  }
}

//
export async function getUserById(userId) {
  try {
    const response = await axios.get(`http://localhost:8080/users/user-id-${userId}`, {
      headers: getHeader()
    })
    return response.data
  } catch (error) {
    throw error
  }
}

//
export async function getAllRealtors() {
  try {
    const result = await axios.get("http://localhost:8080/realtors/all", {
            headers: getHeader(),
            validateStatus: () => {
              return true;
            }
        })
    return result.data
  } catch (error) {
    throw new Error(`Error fetching realtors: ${error.message}`)
  }
}

//
export async function getRealtorById(realtorId) {
  try {
    const response = await axios.get(`http://localhost:8080/realtors/realtor-id-${realtorId}`, {
      headers: getHeader()
    })
    return response.data
  } catch (error) {
    throw error
  }
}

//
export async function deleteRealtor(realtorId) {
  try {
    const response = await axios.delete(`http://localhost:8080/realtors/delete/${realtorId}`, {
      headers: getHeader()
    })
    return response.data
  } catch (error) {
    return error.message
  }
}

//
export async function updateUser(userId) {
  try {
    const formData = new FormData()
    formData.append("email", userId)
    const response = await axios.put("http://localhost:8080/users/update", formData, {
      headers: getHeader()
    })
    return response.data
  } catch (error) {
    if (error.response && error.response.data) {
      throw new Error(error.response.data)
    } else {
      throw new Error(`User updating error : ${error.message}`)
    }
  }
}

//
export async function changeRealtor(realtorId, realtorData) {
  const formData = new FormData()
    formData.append("secondName", realtorData.secondName)
    formData.append("firstName", realtorData.firstName)
    formData.append("patronymic", realtorData.patronymic)
    formData.append("phoneNumber", realtorData.phoneNumber)
  const response = await axios.put(`http://localhost:8080/realtors/update/${realtorId}`, formData, {
    headers: getHeader()
  })
  return response
}

//
export async function getRealtorByEmail(userId) {
  try {
    const response = await axios.get(`http://localhost:8080/realtors/realtor-email-${userId}`, {
      headers: getHeader()
    })
    return response.data
  } catch (error) {
    throw error
  }
}

//
export async function changeRealtorAccount(userId, realtorData) {
  const formData = new FormData()
    formData.append("secondName", realtorData.secondName)
    formData.append("firstName", realtorData.firstName)
    formData.append("patronymic", realtorData.patronymic)
    formData.append("phoneNumber", realtorData.phoneNumber)
  const response = await axios.put(`http://localhost:8080/realtors/updateRealtor/${userId}`, formData, {
    headers: getHeader()
  })
  return response 
}

//
export async function getAllDistricts() {
  try {
    const result = await axios.get("http://localhost:8080/districts/all", {
            headers: getHeader(),
            validateStatus: () => {
              return true;
            }
        })
    return result.data
  } catch (error) {
    throw new Error(`Error fetching districts: ${error.message}`)
  }
}

//
export async function getAllMicroDistricts() {
  try {
    const result = await axios.get("http://localhost:8080/micro_districts/all", {
            headers: getHeader(),
            validateStatus: () => {
              return true;
            }
        })
    return result.data
  } catch (error) {
    throw new Error(`Error fetching microdistricts: ${error.message}`)
  }
}

//
export async function getAllReobjects() {
  try {
    const result = await axios.get("http://localhost:8080/objects/all", {
            headers: getHeader(),
            validateStatus: () => {
              return true;
            }
        })
    return result.data
  } catch (error) {
    throw new Error(`Error fetching objects: ${error.message}`)
  }
}

//
export async function getObjectById(objectId) {
  try {
    const response = await axios.get(`http://localhost:8080/objects/object-id-${objectId}`, {
      headers: getHeader()
    })
    return response.data
  } catch (error) {
    throw error
  }
}

//
export async function addLeadClient(userId, leadClientData) {
  try {
      const response = await axios.post(`http://localhost:8080/leadClients/addLeadClient/${userId}`, leadClientData, {
          headers: getHeader()
      });
      console.log("Ответ от сервера:", response.data);
      return response.data;
  } catch (error) {
      console.error("Ошибка при добавлении клиента:", error.response ? error.response.data : error.message);
      throw error;
  }
}

//
export async function addObject(userId, objectData) {
  try {
      const response = await axios.post(`http://localhost:8080/objects/addRealEstateObject/${userId}`, objectData, {
  headers: getHeader()
      });
      console.log("Ответ от сервера:", response.data);
      return response.data;
  } catch (error) {
      console.error("Ошибка при добавлении объекта:", error.response ? error.response.data : error.message);
      throw error; 
  }
}

//
export async function getAllLeads() {
try {
  const result = await axios.get("http://localhost:8080/leadClients/all", {
      headers: getHeader(),
      validateStatus: () => {
      return true;
      }
    })
  return result.data
} catch (error) {
  throw new Error(`Error fetching leads: ${error.message}`)
}
}

//
export async function getLeadById(leadId) {
try {
  const response = await axios.get(`http://localhost:8080/leadClients/lead-id-${leadId}`, {
    headers: getHeader()
  })
  return response.data
} catch (error) {
  throw error
}
}