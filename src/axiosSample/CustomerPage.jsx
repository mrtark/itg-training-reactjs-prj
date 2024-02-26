import React, {useEffect,useState} from 'react';
import axios from 'axios';
import { axiosInstance } from './axiosInstance';
//17.02.24 Ogleoncesi oturumu
function CustomerPage() {

    const [customers, setcustomers] = useState([]);
    const [loading, setloading] = useState(true); //Sayfa acilirkenki veri getirmedeki titremeye karşın 
    useEffect(() => {
        loadCustomers();
    }, [])

    const loadCustomers = () => {
       // axiosInstance.get('customers')
        axios.get('https://northwind.vercel.app/api/customers')
            .then(res => {
                setcustomers(res.data);
                setloading(false);
            })
    }
    const deleteCustomer = (id) => {
        axios.delete("https://northwind.vercel.app/api/customers/" + id) //Donot use post instead delete
            .then(res => {
                loadCustomers();
            })
    }

    return (<>
        {
            loading == true ? <h1>loading...</h1> : // customers && 
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Company Name</th>
                        <th>Contact Name</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        customers.map(item => <tr>
                            <td>{item.id}</td>
                            <td>{item.companyName}</td>
                            <td>{item.contactName}</td>
                            <td><button onClick={() => deleteCustomer(item.id)}>Delete</button></td>
                        </tr>)
                    }
                </tbody>
            </table>
        }

    </>
    )
}

export default CustomerPage

// GET POST PUT DELETE