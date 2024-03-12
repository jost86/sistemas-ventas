import { useState } from "react";

//  1 ESTADO INICIAL DE LOS PRODUCTOS: EL ARRAY 'DATAINITIAL' CONTIENE DATOS INICIALES DE PRODUCTOS , CADA PRODUCTO TIENE UN ID, NOMBRE, DESCRIPCION, PRECIO , CANTIDAD
const dataInitial = [
  {
    id: 1,
    name: "Saco de Arroz",
    description: "Saco de 20kl",
    price: "50",
    count: 5,
  },
  {
    id: 2,
    name: "Saco de Azucar",
    description: "Saco de 20kl",
    price: "50",
    count: 5,
  },
  {
    id: 3,
    name: "Saco de Lentejas",
    description: "Saco de 20kl",
    price: "50",
    count: 5,
  },
  {
    id: 4,
    name: "Saco de Maíz",
    description: "Saco de 20kl",
    price: "50",
    count: 5,
  },
  {
    id: 5,
    name: "Saco de Sal",
    description: "Saco de 20kl",
    price: "50",
    count: 5,
  },
];

export const useProduct = () => {
  const [products, setProducts] = useState(dataInitial);
  const [productsFilter, setProductsFilter] = useState(products);
  const PAGE_SIZE = 3;
  const [currentPage, setCurrentPage] = useState(0);
  // const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
  };

  const paginatedData = productsFilter.slice(
    currentPage * PAGE_SIZE,
    (currentPage + 1) * PAGE_SIZE
  );

  const handleChange = (e) => {
    const input = e.target.value;

    const productsFilter = products.filter((product) =>
      product.name.toLowerCase().includes(input.toLowerCase())
    );
    setProductsFilter(productsFilter);
  };

  // const openModal = () => {
  //     setIsModalOpen(true);
  // };

  // const closeModal = () => {
  //     setIsModalOpen(false);
  // };
  return {
    handleChange,
    productsFilter,
    handlePageChange,
    PAGE_SIZE,
    paginatedData
    // openModal,
    // closeModal,
    // isModalOpen,
  };
};






