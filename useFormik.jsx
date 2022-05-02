import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Alerta from "./Alerta";

const Formulario = () => {

  const nuevoClienteSchema = Yup.object().shape({
    nombre: Yup.string()
    .min(4, "El nombre debe tener al menos 4 caracteres")
    .required('El nombre del Cliente es obligatorio'),
    empresa: Yup.string()
    
    .required('La empresa es obligatoria'),
    telefono: Yup.number()
    .integer('Numero no válido')
    .positive('Numero no válido')
    .typeError('El Numero no es válido'),
    email: Yup.string()
    .email('El email no es válido')
    .required('El email es obligatorio'),
    notas: "",
  });

  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <div className="bg-white px-5 py-10 mt-10 rounded-md shadow-md md:w-3/4 mx-auto">
      <Formik
        initialValues={{
          nombre: "",
          empresa: "",
          telefono: "",
          email: "",
          notas: "",
        }}
        onSubmit={(values) => {
          handleSubmit(values);
        }}
        validationSchema={nuevoClienteSchema}
      >
        {({errors,touched}) =>{
            return(
          <Form className="mt-10">
            <div className="mb-4">
              <label htmlFor="nombre" className="text-gray-800">
                Nombre:
              </label>
              <Field
                type="text"
                className="mt-2 block w-full p-3 bg-gray-50"
                id="nombre"
                placeholder="Nombre del Cliente"
                name="nombre"
              />

              {errors.nombre && touched.nombre  ? (
                 <Alerta>{errors.nombre}</Alerta>
              ) : ''}
                     
            </div>

            <div className="mb-4">
              <label htmlFor="empresa" className="text-gray-800">
                Empresa del Cliente:
              </label>
              <Field
                type="text"
                className="mt-2 block w-full p-3 bg-gray-50"
                id="empresa"
                placeholder="Empresa"
                name="empresa"
              />
              {errors.empresa && touched.empresa  ? (
                 <Alerta>{errors.empresa}</Alerta>
              ) : ''}
                  
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="text-gray-800">
                Email:
              </label>
              <Field
                type="email"
                className="mt-2 block w-full p-3 bg-gray-50"
                id="email"
                placeholder="Email"
                name="email"
              />
                  {errors.email && touched.email  ? (
                 <Alerta>{errors.email}</Alerta>
              ) : ''}
            </div>

            <div className="mb-4">
              <label htmlFor="telefono" className="text-gray-800">
                Teléfono:
              </label>
              <Field
                type="tel"
                className="mt-2 block w-full p-3 bg-gray-50"
                id="telefono"
                placeholder="Telefono"
                name="telefono"
              />
               {errors.telefono && touched.telefono  ? (
                 <Alerta>{errors.telefono}</Alerta>
              ) : ''}
            </div>

            <div className="mb-4">
              <label htmlFor="notas" className="text-gray-800">
                Notas:
              </label>
              <Field
                as="textarea"
                type="text"
                className="mt-2 block w-full p-3 bg-gray-50 h-30"
                id="notas"
                placeholder="Notas"
                name="notas"
              />
            </div>

            <input
              className="bg-blue-800 p-3 rounded-md block w-full text-white font-bold hover:bg-blue-700 cursor-pointer"
              type="submit"
              value="Agregar Cliente"
            />
          </Form>
        )}}
      </Formik>
    </div>
  );
};

export default Formulario;




// Parte de la Alerta


import React, { Children } from "react";

const Alerta = ({children}) => {
  return (
    <div className="bg-red-700 p-1 rounded-md text-white text-center font-bold">
      {children}
    </div>
  );
};

export default Alerta;
