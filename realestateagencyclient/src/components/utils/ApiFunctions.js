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

//
export async function getAllCallRequests() {
  try {
    const result = await axios.get("http://localhost:8080/call_requests/all", {
        headers: getHeader(),
        validateStatus: () => {
        return true;
        }
      })
    return result.data
  } catch (error) {
    throw new Error(`Error fetching call requests: ${error.message}`)
  }
  }

//
export async function addCallRequest(callRequestData) {
  try {
      const response = await axios.post("http://localhost:8080/call_requests/addCallRequest", callRequestData, {
        headers: getHeader()
      });
      console.log("Ответ от сервера:", response.data);
      return response.data;
  } catch (error) {
      console.error("Ошибка при добавлении заявки:", error.response ? error.response.data : error.message);
      throw error; 
  }
}

//
export async function updateCallRequest(callRequestId, status) {
  try {
    const formData = new FormData();
    formData.append("id", callRequestId);
    formData.append("status", status);
    const response = await axios.put("http://localhost:8080/call_requests/update", formData, {
      headers: getHeader()
    });
    return response.data;
  } catch (error) {
    if (error.response && error.response.data) {
      throw new Error(error.response.data);
    } else {
      throw new Error(`Call Request updating error: ${error.message}`);
    }
  }
}

//
export async function addReview(userId, reviewData) {
  try {
      const response = await axios.post(`http://localhost:8080/reviews/addReview/${userId}`, reviewData, {
        headers: getHeader()
      });
      console.log("Ответ от сервера:", response.data);
      return response.data;
  } catch (error) {
      console.error("Ошибка при добавлении отзыва:", error.response ? error.response.data : error.message);
      throw error;
  }
}

//
export async function getAllReviews() {
  try {
    const result = await axios.get("http://localhost:8080/reviews/all", {
        headers: getHeader(),
        validateStatus: () => {
        return true;
        }
      })
    return result.data
  } catch (error) {
    throw new Error(`Error fetching reviews: ${error.message}`)
  }
}

//
export async function getLeadClientByEmail(userId) {
  try {
    const response = await axios.get(`http://localhost:8080/leadClients/lead-email-${userId}`, {
    headers: getHeader()
    })
    return response.data
  } catch (error) {
    return null;
    //console.error("Потенциальный клиент не найден", error.response ? error.response.data : error.message);
    //throw error;
  }
}

//
export async function changeLeadClientAccount(userId, leadClientData) {
  const formData = new FormData()
    formData.append("secondName", leadClientData.secondName)
    formData.append("firstName", leadClientData.firstName)
    formData.append("patronymic", leadClientData.patronymic)
    formData.append("phoneNumber", leadClientData.phoneNumber)
  const response = await axios.put(`http://localhost:8080/leadClients/updateLeadClient/${userId}`, formData, {
    headers: getHeader()
  })
  return response 
}

//
export async function getUserByEmail(email) {
  try {
    const response = await axios.get(`http://localhost:8080/users/user/${email}`, {
      headers: getHeader()
    })
    return response.data
  } catch (error) {
    throw error
  }
}

//
export async function addToFavorites(userId, objectId) {
  try {
      const response = await axios.post(`http://localhost:8080/favorites/addFavorites/${userId}?realEstateObjectId=${objectId}`, null, {
  headers: getHeader()
      });
      console.log("Ответ от сервера:", response.data);
      return response.data;
  } catch (error) {
      console.error("Ошибка при добавлении объекта в избранное:", error.response ? error.response.data : error.message);
      throw error;
  }
}

//
export async function isInFavorites(userId, objectId) {
  try {
      const response = await axios.post(`http://localhost:8080/favorites/isInFavorites/${userId}?realEstateObjectId=${objectId}`, null, {
          headers: getHeader()
      });
      console.log(objectId);
      console.log("Ответ от сервера:", response.data);
      return response.data;
  } catch (error) {
      console.error("Ошибка:", error.response ? error.response.data : error.message);
      throw error;
  }
}

//
export async function addRequest(userId, objectId) {
  try {
      const response = await axios.post(`http://localhost:8080/requests/addRequest/${userId}?realEstateObjectId=${objectId}`, null, {
          headers: getHeader()
      });
      console.log(objectId);
      console.log("Ответ от сервера:", response.data);
      return response.data;
  } catch (error) {
      console.error("Ошибка:", error.response ? error.response.data : error.message);
      throw error;
  }
}

//
export async function deleteRequest(requestId) {
  try {
    const response = await axios.delete(`http://localhost:8080/requests/delete/${requestId}`, {
      headers: getHeader()
    })
    return response.data
  } catch (error) {
    return error.message
  }
}

//
export async function getAllRequests() {
  try {
    const result = await axios.get("http://localhost:8080/requests/all", {
      headers: getHeader(),
      validateStatus: () => {
      return true;
      }
    })
    return result.data
  } catch (error) {
    throw new Error(`Error fetching requests: ${error.message}`)
  }
}

//
export async function updateRequest(requestId, status) {
    try {
      const formData = new FormData();
      formData.append("id", requestId);
      formData.append("status", status);
      const response = await axios.put("http://localhost:8080/requests/update", formData, {
        headers: getHeader()
      });
      return response.data;
    } catch (error) {
      if (error.response && error.response.data) {
        throw new Error(error.response.data);
      } else {
        throw new Error(`Request updating error: ${error.message}`);
      }
    }
  }

//
export async function addNotification(userId, notificationData) {
  try {
      const response = await axios.post(`http://localhost:8080/notifications/addNotification/${userId}`, notificationData, {
  headers: getHeader()
      });
      console.log("Ответ от сервера:", response.data);
      return response.data;
  } catch (error) {
      console.error("Ошибка при отправлении уведомления:", error.response ? error.response.data : error.message);
      throw error;
  }
}

//
export async function updateNotification(notificationId, status) {
try {
  const formData = new FormData();
  formData.append("id", notificationId);
  formData.append("status", status);
  const response = await axios.put("http://localhost:8080/notifications/update", formData, {
    headers: getHeader()
  });
  return response.data;
} catch (error) {
  if (error.response && error.response.data) {
    throw new Error(error.response.data);
  } else {
    throw new Error(`Notification updating error: ${error.message}`);
  }
}
}

//
export async function addNotificationLeadClient(leadClientId, notificationData) {
  try {
      const response = await axios.post(`http://localhost:8080/notifications/addNotificationByLeadClientId/${leadClientId}`, notificationData, {
  headers: getHeader()
      });
      console.log("Ответ от сервера:", response.data);
      return response.data;
  } catch (error) {
      console.error("Ошибка при отправлении уведомления:", error.response ? error.response.data : error.message);
      throw error;
  }
}