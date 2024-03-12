const FormProduct = ({handleChange}) => {
  return (
    <form>
      <div className="my-6 text-start">
        <label className="block my-3">Buscar Producto</label>
        <input
          type="search"
          className="border rounded block p-1 w-full outline-0 border-sky-500  text-gray-400"
          onChange={handleChange}
        />
      </div>
    </form>
  );
};
export default FormProduct;