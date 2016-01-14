import assign from 'object-assign';
export function setError (data){
    const { bl = '0', msg = '操作失败！' , error = true , ...other } = data || {};
    return {
        data:{
              bl ,
            msg ,
            error ,
            ...other
        }

    }

}
export function setOk (data){
    const { bl = '1', msg = "操作成功！" , error=false,...other} = data || {};
    return {
        data:{
              bl,
            msg,
            error,
            ...other


        }

    }
}
export function sendOk(res){
    return function(code){
       return function(data){
            const { bl , error = false , ...other } = data || {};
            let res = bl == "1" ? setOk(data) : setError(data);
            res.status( code || 200 ).json(res);
       }
    }
}
