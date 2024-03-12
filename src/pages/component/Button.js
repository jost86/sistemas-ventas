import Image from "next/image";
import Link from "next/link";

// le damos props para hacerlo dinamico en esta caso text, icono, ruta
const Button = ({text,icono,ruta}) => {
    return ( 
        // asi lo llamamos {ruta} {icono} {text}
        <Link rel="stylesheet" href={ruta}>
            <div className="bg-sky-500 p-4 text-center">
                <Image src={icono} alt={text} width="100" className="mx-auto" />
                <p className="uppercase font-bold">{text}</p>
            </div>
        </Link>
     )
}
 
export default Button;

// 