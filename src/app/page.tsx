import Image from "next/image";
import tenis from "../../public/assets/tenis.png";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-[#f1f1f1]">
      <section
        className="flex max-lg:flex-col 
       shadow-2xl"
      >
        <div className="bg-[#fff] p-3">
          <h1 className="font-bold  mb-24">DevMentor.</h1>

          <div className="flex flex-col gap-4 p-12">
            <h1 className="font-bold text-4xl mb-12 ">
              Lançamento <br /> Nike Air.
            </h1>

            <p>O tênis do futuro.</p>
            <p>O futuro a um passo de seu alcance!</p>
            <button className="font-bold text-[#fff] bg-[#151823] p-3 w-[200px] text-base mt-5 border-[3px] border-[#151823] hover:bg-[#fff]  hover:text-[#151823]">
              QUERO CONHECER!
            </button>
          </div>
        </div>
        <div className="flex justify-center items-center tenis min-w-[300px] w-[400px]">
          <div className="cursor-pointer lg:hover:animate-showTenis flex ">
            <Image width={0} height={0} src={tenis} alt="img" priority />
          </div>
        </div>
      </section>
    </main>
  );
}
