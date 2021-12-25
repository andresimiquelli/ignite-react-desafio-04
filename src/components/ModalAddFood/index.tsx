import React, { createRef, RefObject, useEffect } from 'react';
import { FiCheckSquare } from 'react-icons/fi';

import { Form } from './styles';
import Modal from '../Modal';
import Input from '../Input';
import { apiFood } from '../../types/Food';
import { FormHandles } from '@unform/core';

import { FoodFormData } from '../../types/Food';

interface ModalAddFoodProps {
  isOpen: boolean;
  setIsOpen(): void;
  handleAddFood(food: apiFood): void;
}

function ModalAddFood ({ isOpen, handleAddFood, setIsOpen } : ModalAddFoodProps){

  const formRef = createRef<FormHandles>();

  const handleSubmit = async (data: FoodFormData) => {
    handleAddFood({...data, available: true} as apiFood);
    setIsOpen();
  };

    return (
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Novo Prato</h1>
          <Input name="image" placeholder="Cole o link aqui" />

          <Input name="name" placeholder="Ex: Moda Italiana" />
          <Input name="price" placeholder="Ex: 19.90" />

          <Input name="description" placeholder="Descrição" />
          <button type="submit" data-testid="add-food-button">
            <p className="text">Adicionar Prato</p>
            <div className="icon">
              <FiCheckSquare size={24} />
            </div>
          </button>
        </Form>
      </Modal>
    );
  
};

export default ModalAddFood;
