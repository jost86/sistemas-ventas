const Login = () =>{
  return (
    <div className="container  m-auto p-4">
      <form action="" className="border w-full md:w-80 mx-auto p-3">
        <div className="bg-sky-500 p-4 text-center uppercase font-bold text-xl text-white">
          <p>INGRESAR</p>
        </div>
        <div className="my-4">
          <label htmlFor="">Usuario</label>
          <input type="text" className="border rounded block p-1 w-ful" />
        </div>
        <div className="my-4">
          <label htmlFor="">Usuario</label>
          <input type="text" className="border rounded block p-1 w-full" />
        </div>
        <div>
          <button type="submit" className="p-3 bg-sky-500 hover:bg-sky-600 rounded text-white">
            Ingresar
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;