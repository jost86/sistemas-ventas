// para no estar importando las imagenes de la carpeta mejor era hacerlo de lafomr que dice david
import Image from "next/image";

import Productos from "../../public/iconos/producto.png";
import Ventas from "../../public/iconos/ventas.png";
import Cliente from "../../public/iconos/clasificacion.png";
import Repartidor from "../../public/iconos/repartidor.png";

import Button from "./component/Button";
// import Prueba from "./component/div";

export default function Home() {
  return (
    <main className="container p-4 mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {/* cualquier cosa  que sea dinamica lo mandamos por props en este caso la ruta ,el texto , el icomo estamos usando instacias este seria el obeto Button instaciado del componente Button solo le cambiariamos los productos*/}
        <Button text="empleados" icono={Repartidor} ruta="/empleados" />
        <Button text="producto" icono={Productos} ruta="/products" />
        <Button text="ventas" icono={Ventas} ruta="/ventas" />
        <Button text="clientes" icono={Cliente} ruta="/clientes" />
      </div>
    </main>
  );
}
