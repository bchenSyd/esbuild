import {sayHello} from '@bochen/lib';

export const render = async ()=>{
   const name = await new Promise(res=>{
        setTimeout(() => {
            res('bochen')
        }, 10);
    })   
    sayHello(name);
}