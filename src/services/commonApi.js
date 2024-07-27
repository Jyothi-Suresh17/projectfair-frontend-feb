 import axios from 'axios'
 
 
 export const commonApi=async(httpRequest,url,reqBody,reqHeader)=>{

  let reqConfig={
    method:httpRequest,
    url,
    data:reqBody,
    headers:reqHeader?reqHeader:{"Content-Type":"application/json"}

  }
  
  return await axios(reqConfig).then((result)=>{
    return result
  }).catch((error)=>{
    return error
  })


}

//Multipart/form-data : when there is uploaded content presented