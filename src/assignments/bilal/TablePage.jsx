import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col } from 'react-grid-system';
//PK: Assignment sent 23.02.24
const TablePage = () => {
  const [orders, setOrders] = useState([]);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://northwind.vercel.app/api/orders');
      setOrders(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const formatDate = (dateString) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = new Date(dateString).toLocaleDateString('tr-TR', options);
    return formattedDate;
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://northwind.vercel.app/api/orders/${id}`);
      fetchData();
    } catch (error) {
      console.error('Error deleting order:', error);
    }
  };

  const handleButtonClick = async () => {
    try {
      const response = await axios.post('https://northwind.vercel.app/api/categories', {
        name: name,
        description: description,
      });
      console.log('Category added successfully:', response.data);
      alert('Category added successfully');
    } catch (error) {
      console.error('Error adding category:', error);
      alert('Error adding category:', error);
    }
  };

  return (
    <Container>
      <Row>
        <Col>
          <div>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div>
            <button onClick={handleButtonClick}>Add Category</button>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Customer ID</th>
                <th>Order Date</th>
                <th>Shipped Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id}>
                  <td>{order.id}</td>
                  <td>{order.customerId}</td>
                  <td>{formatDate(order.orderDate)}</td>
                  <td>{formatDate(order.shippedDate)}</td>
                  <td>
                    <button onClick={() => handleDelete(order.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Col>
      </Row>
    </Container>
  );
};

export default TablePage;