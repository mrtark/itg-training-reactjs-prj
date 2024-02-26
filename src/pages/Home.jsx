import React, {useEffect} from 'react'
//10.02.24 oturumu

function Home() {

    /*17.02.24 oturumunda güncelleme*/
    useEffect(()=>{ 
        setInterval( ()=> { console.log("Hello") }, 1000 ) //1000 milisaniyede bir hello yazdirir
        //yukarıdakini yapıp clean function yapmazsan routing geçiş gelişlerde sapıtır
        //o sebepten requestleri yada asşağıdkai şekilde setIntervalları useEffect cleanfunction (return bloğu) ile handle etmek lazım
        let interval= setInterval( ()=> { console.log("Hello") }, 1000 ) 
        return () => {
            clearInterval(interval)
        }
    }, [])
    /*17.02.24 oturumunda güncelleme*/
   
    return (
        <div>Home</div>
    )
}

export default Home
