import axios from 'axios'
//17.02.24 Ogleoncesi oturumu

export const axiosInstance =axios.create({
    baseURL: 'https://northwind.vercel.app/api/' //process.env.REACT_APP_API_URL
    //,timeout:1000
})
//axios kütüphanesinin önemli özelliklerinde: instance kavramı
//cancellation yapısı nvsrmde varmı sor, bu kutuphanenein sa, route arası geçişlerde ağır requestleri cancel etmesi lazım
//ROUTING arası geçişlerde özellikle heavy request/post lar başlatılmışsa işlemin iptal edilmesi lazım yoksa devam eder kendiliğinden durmaz
//REF: axios-http.com/docs/cancellation
//REF: developer.mozilla.org/en-US/docs/Web/API/AbortController/signal
//REF: axios-http.com/docs/interceptors
