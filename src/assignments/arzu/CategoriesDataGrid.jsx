import React, { useEffect, useState } from 'react'
//PK: is declared but never read //Arzu: import { useQuery } from 'react-query'
import { axiosInstance } from '../../axiosSample/axiosInstance'; //Arzu: '../api/axiosInstance'
//PK: is declared but never read //Arzu: import { DataGrid , trTR} from '@mui/x-data-grid'
//PK: is declared but never read //Arzu: import dayjs from 'dayjs'
//PK: is declared but never read //Arzu: import { Button } from '@mui/material'

function CategoriesDataGrid() {

        const [name, setName] = useState("")
        const [description, setDescription] = useState("")
        
        const addOrder = async () => {
            try {
                await axiosInstance.post('/categories', {
                    name: name,
                    description: description
                });
                console.log("Order added successfully.");
            } catch (error) {
                console.error("Error adding order:", error);
            }
        };

        return (
            <div >
              <div>
                <label htmlFor="name">İsim:</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div >
                <label htmlFor="description">Açıklama:</label>
                <input
                  type="text"
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <div >
                <table>
                  <tbody>
                    <tr>
                      <td>
                        <button onClick={addOrder}>Ekle</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
          );
          
          
        
        
}

export default CategoriesDataGrid