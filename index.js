const prom = (str) =>{
    return new Promise((res,rej)=>{
        setTimeout(()=>{
          if(typeof(str)==="string")
              res(str.toUpperCase())
          else
              rej("Not string")
        },500)
      })
}

const asyncMethod = async (str) =>{
        setTimeout(()=>{
          if(typeof(str)==="string")
              console.log(str.toUpperCase())
          else
              console.log("Not string")
        },5000)
}


const run = async() =>{
    await asyncMethod("sd")
}
run()
//prom("sd").then(res => console.log(res))