// FormView.jsx
import React from 'react';
import AddProductForm from '../molecules/Form'; // Importa el formulario AddProductForm

const FormView = () => {
  return (
    <div>
      <h1>FormView</h1>
      <AddProductForm /> {/* Renderiza el formulario dentro de FormView */}
    </div>
  );
}

export default FormView;
