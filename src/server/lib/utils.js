export function setError (data){
    const { bl = '0', msg = '操作失败！' , error = true} = data || {};
    return {
        data:{
            bl,
            msg,
            error
        }
    }
}
export function setOk (data){
    const { bl = '1', msg = "操作成功！" , error=false} = data || {};
    return {
        data:{
            bl,
            msg,
            error
        }
    }
}
