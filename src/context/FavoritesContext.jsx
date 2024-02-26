import React from 'react'
//24.02.24 [10:00-] Global context 
//tema dil değiştiğinde basit operasyonları context ile yapabilirsin
//ama global state ilk dolus operasyonları reduxTank  modülü, servis aşamasında proses sağlıyor data geldi gelmei vs. yönetimi kolay
//iki: ekleme silme actionlarda kümleriyor güczel yönetim kolaylığı sunuyor
//sepeti 5-6 operasyonla değiştiğinde contextlemede hata oluyorsa contextte yönetmek mümkün değil concolelarla, ama reduxtta ileri geri yakalanabiliyor.
//ayrıca reduxtta session parametreleri , 3-4 modülün ortak stateleri olduğunda reduxın yönetimi net gerekli olabilir ama 
//Browser : LocalStorage-- ile de key value cinsinde tutup yönetilebilecek session parametreleri de olabilir
//Browser : SessionStorage-- sekme bazlı
import { createContext , useState} from 'react';
export const FavoritesContext = createContext();
//reduxt ta debug var ancak contextte yok
//context ler anlık sayfa refreshlendiğinde gider
export const FavoritesProvider = ({children}) => {
  const [favorites, setFavorites] = useState([])

  const addToFavorites = (product) => {
    setFavorites([...favorites, product])
  }
  const removeFromFavorites =(product) => {
    setFavorites(favorites.filter(f=> f.id !== product.id))
  }
  const clear =() => {
    setFavorites([])
  }
  return <FavoritesContext.Provider value ={{ favorites, addToFavorites,removeFromFavorites,clear}}>
    {children}
  </FavoritesContext.Provider>
}
