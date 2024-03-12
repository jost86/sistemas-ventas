import FormProduct from "./component/FormProduct";
import { useProduct } from "@/hook/useProducts";
import ReactPaginate from "react-paginate";
import TableProduct from "./component/Table";
// import ModalProduct from "./component/ModalProduct";
const Products = () => {
  const {
    handleChange,
    productsFilter,
    paginatedData,
    PAGE_SIZE,
    handlePageChange
    // isModalOpen,
    // openModal,
    // closeModal,
  } = useProduct();

  return (
    <div className="text-center">
      <h2 className="uppercase font-bold text-sky-500 text-lg">PRODUCTOS</h2>
      <FormProduct handleChange={handleChange} />
      <TableProduct paginatedData={paginatedData} />
      <div className="flex justify-between my-3">
        <ReactPaginate
          previousLabel={"Anterior"}
          nextLabel={"Siguiente"}
          breakLabel={"..."}//cuano la paginacion es muy grande
          pageCount={Math.ceil(productsFilter.length / PAGE_SIZE)}//cantidad de elementos que tenemos en el arraglo entre la cantidad de paginas 
          onPageChange={handlePageChange} //evento propio de la paginacion

          containerClassName={"pagination flex justify-center"}
          activeClassName={"bg-sky-500"}
          previousClassName={
            "bg-gray-300 px-4 py-2 rounded-l-lg cursor-pointer"
          }
          nextClassName={"bg-gray-300 px-4 py-2 rounded-r-lg cursor-pointer"}
          pageLinkClassName={
            "px-4 py-2 cursor-pointer border inline-block text-center"
          }
        />

        {/* <button className='p-2  bg-sky-500 hover:bg-sky-600 rounded text-white' onClick={openModal} >Agregar producto</button> */}
      </div>
      {/* <ModalProduct isOpen={isModalOpen} onClose={closeModal}/> */}
    </div>
  );
};

export default Products;
