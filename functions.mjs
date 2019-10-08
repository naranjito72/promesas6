import { setTimeout } from "timers";

let num1 = Math.floor(Math.random()*10);
let num2 = Math.floor(Math.random()*10);

const sumados = num1+num2;
const cuadrado = sumados*sumados;

const tunTun = ()=>{
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            let error = (`${cuadrado}`>100);
            let error2 = (`${num1 === 0}` || `${num2 === 0}`);
            if(!error || !error2)
                resolve();
                else
                    reject()
        }, 1000);

    })
}

   tunTun()
        .then(num => {
            console.info(`${cuadrado}`);
            })
            .catch(err => {
                console.info("Not too fuc...g bright, are you?")
            })