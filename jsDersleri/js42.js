//fetch api ile çalışmak

fetch("data/setting.json").then(response => {return response.json()}).then(
    responseJson =>{
        console.log(responseJson)
        console.log(responseJson.userName)
        console.log(responseJson.serverIp)
        console.log(responseJson.IDs)
    })

    