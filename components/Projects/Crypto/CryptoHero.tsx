import { PredictionContainer } from "@/components/Projects/Crypto/PredictionContainer";

export default function CryptoHero() {
  return (
    <section>
      <div className="mx-auto mb-8 flex max-w-6xl flex-col items-center px-4 pb-10 pt-32 text-left sm:px-6 md:gap-12 md:px-12 md:pb-16 md:pt-40 lg:gap-20 lg:px-20">
        <h1 className="h1 font-black lg:text-6xl" data-aos="fade-down">
          Crypto <span className="text-blue-500">Real Time</span>{" "}
          <span className="text-green-500">Inference</span>
        </h1>
        <PredictionContainer />
      </div>
    </section>
  );
}
