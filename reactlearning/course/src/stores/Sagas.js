import {call,put,takeEvery} from 'react-saga/effects'

const api = {
    login(){
        return new Promise((resolve, reject)=>{
            settimeout(()=>{
                if(Math.random()>0.5){
                    resolve({id:1,name:'s'})
                }else{
                    reject('wrong')
                }
            }, 1000);
        })
    }
}

function* login(action){
    try{
        const result = yield call(api.login);
         yield put({type:'login', result})
    }catch(error){
        yield put({type:'failure', message:error.message});
    }
    
}

function* mySaga(){
    yield takeEvery('login_request',login);r
}
export default mySage;