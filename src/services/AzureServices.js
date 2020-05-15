import axios from 'axios'


export const getAllData = async (query) => {
    let url = `http://itbootcamp.westeurope.cloudapp.azure.com/${query}`
    let response = await axios.get(url)
    return response
}

export const getAllRestaurant = async () => {
    let url = `http://itbootcamp.westeurope.cloudapp.azure.com/restaurant`
    let response = await axios.get(url)
    return response
}

export const postPollForRestaurant = async (newPoll) =>{
    let url = `http://itbootcamp.westeurope.cloudapp.azure.com/poll`
    let response = await axios.post(url, newPoll)
    return response
}

export const getAllPoll = async () => {
    let url = `http://itbootcamp.westeurope.cloudapp.azure.com/poll?$limit=50`
    let response = await axios.get(url)
    return response 
}

export const postVote = async (el) =>{
    let url = `http://itbootcamp.westeurope.cloudapp.azure.com/vote`
    let response = await axios.post(url, el)
    return response
}

export const updateVote = async (id, body) => {
    let url = `http://itbootcamp.westeurope.cloudapp.azure.com`
    let response = await axios.patch(`${url}/vote/${id}`, { votes: body })
    return response
}

export const updateActive = async (id, el) => {
    let url = `http://itbootcamp.westeurope.cloudapp.azure.com`
    let response = await axios.patch(`${url}/poll/${id}`, { nemanjin_active: el })
    return response
}


  

// if(res.data.total >= res.data.limit){
//     let url = `http://itbootcamp.westeurope.cloudapp.azure.com/poll?$limit=50&$skip=50`   
// }