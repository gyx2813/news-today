import jsonp from 'jsonp'

export function ajax(kind) {
    let url = 'https://m.toutiao.com/list/?tag=' + kind + '&ac=wap&count=40&format=json_raw&as=A125A8CEDCF8987&cp=58EC18F948F79E1&min_behot_time=' + parseInt((new Date().getTime()) / 1000);
    return new Promise ((resolve,reject) => {
        jsonp(url,(err,data) => {
            if(!err){
                resolve(data)
            }else{
                reject(err)
            }
        })
    })
}

/*
    fn1 成功回调函数
    fn2 失败回调函数
*/
export function ajax2(url) {
    return new Promise((resolve, reject) => {
        jsonp(url,(err,data) => {
            if(!err){
                resolve(data)
            }else{
                reject(err)
            }
        })
    })
    // jsonp(url, null, function (err, data) {
    //     if (err) {
    //         return fn2(err)
    //     } else {
    //         return fn1(data)
    //     }
    // });
}
