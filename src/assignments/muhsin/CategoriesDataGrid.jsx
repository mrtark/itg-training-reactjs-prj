import React, { useState } from 'react'
import { axiosInstance } from '../../axiosSample/axiosInstance' // Muhsin: '../axiosSample/axiosInstance'
import './buttonStyle.css' // Muhsin: '../cssFile/buttonStyle.css';
import { Link } from 'react-router-dom';

function CategoriesDataGrid() {

        const [name, setName] = useState("")
        const [description, setDescription] = useState("")

        const add = () => {
            if (!name || !description) {
                alert("Lütfen isim ve açıklama alanlarını doldurun.");
                return; 
            }
        
            let newCategories = {
                name: name,
                description: description
            }
        
            axiosInstance.post("categories", newCategories)
                .then(res => {
                    alert("Kategori Başarılı şekilde eklendi. Listeden kontrol edebilirsiniz.") ;
                })
                .catch(err => {
                    console.log('Kategori eklerken bir hata oluştu. Hata sebebi : ', err);
                })
        }
        


        return (
            <div className="form-container">
              <div className="form-group">
                <label htmlFor="name">İsim:</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">Açıklama:</label>
                <input
                  type="text"
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <div className="form-group">
                <table>
                  <tbody>
                    <tr>
                      <td>
                        <button className="btn-add" onClick={add}>Ekle</button>
                      </td>
                      <td style={{ paddingLeft: '150px', textAlign: 'right' }}>
                        <Link to="/categoriesList" className="btn-list">Listele</Link>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          );
          
          
        
        
}

export default CategoriesDataGrid