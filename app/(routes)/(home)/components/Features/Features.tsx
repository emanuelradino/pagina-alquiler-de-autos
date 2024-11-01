import { dataFeatures } from "./Features.data";
import { Reveal } from "@/components/Shared/Reveal";

export function Features() {
  return (
    <div className="max-w-6xl mx-auto p-6 lg:py-40">
      <h3 className="text-2xl lg:text-6xl font-bold">Características principales</h3>
      <p className="max-w-lg mt-5 lg:mt-10 lg:mb-16 text-xl">
        Nos preocupamos por la comodidad y la seguridad de nuestros clientes. Por eso ofrecemos el mejor servicio que pueda imaginar.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {dataFeatures.map(({ icon: Icon, text, bg, delay }) => (
          <Reveal
            key={text}
            className="p-6 rounded-xl hover:shadow-lg flex flex-col items-center transition duration-300 ease-in-out"
            position="right"
            delay={delay}
          >
            <div className={`flex items-center justify-center rounded-full ${bg} w-16 h-16 mb-4`}>
              <Icon className="w-8 h-8 text-indigo-600" />
            </div>
            <p className="text-center text-lg font-semibold text-gray-800">{text}</p>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
