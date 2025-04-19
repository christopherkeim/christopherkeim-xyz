import { PredictionContainer } from "@/components/Projects/Crypto/PredictionContainer";

export default function CryptoHero() {
  return (
    <section>
      <div className="mx-auto mb-8 flex max-w-6xl flex-col items-center px-4 pb-10 pt-32 text-left sm:px-6 md:gap-12 md:px-12 md:pb-16 md:pt-40 lg:gap-12 lg:px-20">
        <h1 className="h1 font-black lg:text-5xl" data-aos="fade-down">
          Crypto <span className="text-blue-500">Real Time</span>{" "}
          <span className="text-green-500">Inference</span>
        </h1>
        <p className="pt-6 md:pt-0">
          These models run <i>on device</i> in your browser.
        </p>
        <PredictionContainer />
      </div>
    </section>
  );
}
