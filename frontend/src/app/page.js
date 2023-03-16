'use client'

import Button from '@/components/Button/Button';
import Card from '@/components/Card/Card';
import Searchbar from '../components/Searchbar/Searchbar';
import EmptyCard from '../components/EmptyCard/EmptyCard'
import Header from '../components/Header/Header'
import Modal from '../components/Modal/Modal'
import ModalEdit from '../components/ModalEdit/ModalEdit'
import { useState, useEffect } from 'react';
import axios from 'axios';

function page() {
  const [showModal, setShowModal] = useState(false);
  const [showModalEdit, setShowModalEdit] = useState(false);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [productId, setProductId] = useState(null);
  useEffect(() => {
    axios.get('http://localhost:3001/products')
      .then((response) => {

        setProducts(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleCreateNewComponent = () => {
    setShowModal(true);
  }

  const handleCloseModal = () => {
    setShowModal(false);
  }

  const handleEdit = (id) => {
    setProductId(id);
    setShowModalEdit(true);
  }

  const handleCloseModalEdit = () => {
    setShowModalEdit(false);
  }

  const handleDelete = async (id) => {
    const response = await axios.delete(`http://localhost:3001/products/${id}`);
    location.reload()
    return response.data;
  }

  const handleUpdate = async (id, title, value) => {
    const response = await axios.put(`http://localhost:3001/products/${id}`, {
      title,
      value
    });
    location.reload()
    return response.data;
  }

  const handleCreate = async (title, value) => {
    const response = await axios.post('http://localhost:3001/products/', {
      title,
      value
    });
    location.reload()
    return response.data;
  }

  const filterProducts = (term) => {
    const filtered = products.filter((product) => {
      return (
        product.title.toLowerCase().includes(term.toLowerCase()) ||
        product.value.toString().toLowerCase().includes(term.toLowerCase())
      );
    });
    setFilteredProducts(filtered);
  };

  return (
    <div>
      <Header title="Produtos Alest"/>
      <Searchbar onSearch={(term) => filterProducts(term)}/>
      <div style={{ flexDirection: "row", display: 'flex', gap: '1.25rem', justifyContent: 'center', marginTop: '8rem', flexWrap: 'wrap'}}>
        <EmptyCard onClick={handleCreateNewComponent}/>
        {filteredProducts.length > 0
          ? filteredProducts.map((product) => {
              return (
                <Card
                  key={product.id}
                  title={product.title}
                  value={product.value}
                  image={product.image}
                  onEdit={() => handleEdit(product.id)}
                  onDelete={() => handleDelete(product.id)}
                />
              );
            })
          : products.map((product) => {
              return (
                <Card
                  key={product.id}
                  title={product.title}
                  value={product.value}
                  image={product.image}
                  onEdit={() => handleEdit(product.id)}
                  onDelete={() => handleDelete(product.id)}
                />
              );
            })}
      </div>
      {showModal && <Modal children={'Novo Produto'} onClose={handleCloseModal} onSubmit={(title, value) => handleCreate(title, value)}/>}
      {showModalEdit && <ModalEdit children={'Atualizar Produto'} onClose={handleCloseModalEdit} onSubmit={(title, value) => handleUpdate(productId, title, value)}/>}
    </div>
  );
}

export default page;