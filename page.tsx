import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import { CgSmartHomeWashMachine } from "react-icons/cg";
import { lusitana } from "./ui/font";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-6">
       <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-950 p-4">
        <CgSmartHomeWashMachine className="bg-white" size={40} />
        <p className="text-3xl text-white font-medium px-5">
          AGP-Tech
        </p>
       </div>
       <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
          <p className={`${lusitana.className}text-xl text-gray-800 md:text-3xl md:leading-normal`}>
            <strong>Bienvenue à AGP-Tech.</strong> L'application qu'il vous faut en tant que propriétaire de pressing,
            vous découvrirez son potentialité en gestion et son efficacité dans les relations clients pour vos revenus.
          </p>
          <Link
          href="/connexion"
          className="flex items-center gap-5 self-start rounded-md bg-blue-950  px-6 py-3 text-sm font-medium text-white
          transition-colors hover:bg-blue-900 md:text-base"
          >
            <span className="text-2xl text-white font-medium">Connexion</span> <FaArrowRightLong size={25} />
          </Link>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          {/* Add Hero Images Here */}
          <Image
            src="/hero-desktop.png"
            width={1000}
            height={760}
            className="hidden md:block"
            alt="Screenshots of the dashboard project showing desktop version"
          />
          <Image 
            src="/hero-mobile.png"
            width={560}
            height={620}
            className="block md:hidden"
            alt="Capture d'écran du projet de tableau de bord montrant la version mobile"
          />
        </div>
       </div>
    </main>
  );
}
