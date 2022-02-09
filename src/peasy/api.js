import { useStoreActions } from "easy-peasy"

// const controller = new AbortController()
// const timeoutId = setTimeout(() => controller.abort(), 5000)




export async function getRequest(param){
    let req = {
        tipe: param
    }
    let returning = {data: ""}
    const response = await fetch('http://127.0.0.1:8000/api/surats', {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
          'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(req) // body data type must match "Content-Type" header
        // signal: controller.signal
      }).then(
          response => {
              if (response.status == 200) {
                  returning = response.json()
              }
          }
      )
    return returning;
}

export async function getDetail(param){
    
    let returning = {data: ""}
    const response = await fetch('http://127.0.0.1:8000/api/surats/' + param, {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
          'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        // body: JSON.stringify(req) // body data type must match "Content-Type" header
        // signal: controller.signal
      }).then(
          response => {
              if (response.status == 200) {
                  returning = response.json()
              }
          }
      )
    return returning;
}

export async function getPost(param){
    let returning = {data: ""}
    for (var value of param.values()) {
        console.log(value);
     }
    const response = await fetch('http://127.0.0.1:8000/api/surats', {
        method: 'POST', 
        headers: {
            "Content-Type": `multipart/form-data; boundary=${param._boundary}`,
            "Accept" : "application/json" 
        },
        redirect: 'follow',
        body: param 
      }).then(
          response => {
              if (response.status == 200) {
                  returning = response.json()
              }
              else if (response.status == 401) {
                  returning = response.json()
              }
          }
      )
    return returning;
}

// export async function getPost( param){
//     for (var value of param.values()) {
//         console.log(value);
//      }

     
//     const response = await axios({
//         method: "post",
//         url: "http://127.0.0.1:8000/api/surats",
//         data: param,
//         headers: { 
//             "Content-Type": `multipart/form-data; boundary=${param._boundary}`,
//             "Accept" : "application/json"            
//         },
//       })
//         .then(function (response) {
//           //handle success
//           console.log(response);
//         })
//         .catch(function (response) {
//           //handle error
//           console.log(response);
//         });
//     return response;
// }

export function getSurat() {
    let returning = {}
    getRequest().then(
        data => returning = data.data
    )
    return returning
}
