const axios = require('axios')
//define backend API endpoint (url/link)
const backEnd = 'https://vocab-server-qwac.onrender.com/vocab/'
//declare functions to call API from backend
export const ViewALLVocabs = async () =>{
    try {
        const response = await axios.get(backEnd)
        return response.data
    }
    catch (error) {
        console.error('Error fetching vocab list:', error)
    }
}

export const ViewVocabById = async(id) =>{
    try{
        const response =  await axios.get(backEnd + id)
        return response.data
        }catch (error){
            console.error('Error fetching vocab:', error)
        }
}

export const DeleteVocab = async(id) =>{
    try{
        const response =  await axios.delete(backEnd + id)
        return response.data
        }catch (error){
            console.error('Error delete vocab:', error)
        }
}

export const AddNewVocab = async (word) =>{
    try{
        const response =  await axios.post(backEnd, word)
        return response.data
        }catch (error){
            console.error('Error add new vocab:', error)
        }
}

export const EditVocab = async (id, word) =>{
    try{
        const response =  await axios.put(backEnd + id, word)
        return response.data
        }catch (error){
            console.error('Error edit vocab:', error)
        }
}

export const DeleteAll = async () => {
    try {
        const response = await axios.delete(backEnd)
        return response.data
    } catch (error){
        console.error("Error delete:", error)
    }
}
