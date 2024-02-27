let h1 = document.createElement("h1");
document.body.append(h1);

setTimeout(function(){
    document.querySelector('h1').innerText = `Count Down:10`
    setTimeout(function(){
        document.querySelector('h1').innerText = `Count Down:9`
        setTimeout(function(){
            document.querySelector('h1').innerText = `Count Down:8`
            setTimeout(function(){
                document.querySelector('h1').innerText = `Count Down:7`
                setTimeout(function(){
                    document.querySelector('h1').innerText = `Count Down:6`
                    setTimeout(function(){
                        document.querySelector('h1').innerText = `Count Down:5`
                        setTimeout(function(){
                            document.querySelector('h1').innerText = `Count Down:4`
                            setTimeout(function(){
                                document.querySelector('h1').innerText = `Count Down:3`
                                setTimeout(function(){
                                    document.querySelector('h1').innerText = `Count Down:2`
                                    setTimeout(function(){
                                        document.querySelector('h1').innerText = `Count Down:1`
                                        setTimeout(function(){
                                            document.querySelector('h1').innerText = `Happy Independence Day`
                                        },1000)
                                    },1000)
                                },1000)
                            },1000)
                        },1000)
                    },1000)
                },1000)
            },1000)
        },1000) 
    },1000)
},1000)