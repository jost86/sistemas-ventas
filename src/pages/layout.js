import Image from "next/image";
import Link from "next/link";


const Layout = ({children}) =>{
  return (
    <div className="container mx-auto">
      <nav className="bg-sky-500 font-bold text-white flex justify-between py-3 px-5 mb-4">
        <div className="flex content-between">
          <Image
            // src={Perfil}
            alt="Perfil"
            width="50"
            height="50"
            className="rounded-full border"
          />
          <p className="p-2 mx-1">JOST</p>
        </div>
        <button>Salir</button>
      </nav>
      {children}
    </div>
  );
}

export default Layout;