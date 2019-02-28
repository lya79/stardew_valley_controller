export default function QueryIP(callback){
    // let url = 'http://localhost:8080/query/ip'; // XXX window.location.hostname
    var ip = window.location.hostname;//'192.168.0.14';
    let url = 'http://'+ip+':8080/query/ip';
    console.log("url2222:"+url); 
    fetch(url,{
        method: 'GET',
    }).then(function checkStatus(response) {
        if (response.status >= 200 && response.status < 300) {
            return response.json();
        }else {
            var error = new Error(response.statusText)
            error.response = response;
            throw error;
        }
    }).then(function(data) {
        console.log('request successful', data); 
        var dataStr = JSON.stringify(data)
        console.log("dataStr:"+dataStr);  
        var obj = JSON.parse(dataStr);
        console.log("obj IP:"+obj.IP); 
        callback(obj.IP)
    }).catch(function(error) {
        console.log('request failed status', error);
        callback('')
    });
} 