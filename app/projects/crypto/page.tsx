import CryptoHero from "@/components/Projects/Crypto/CryptoHero";
import { ResearchPaper } from "@/components/Projects/Crypto/ResearchPaper";

export const metadata = {
  title: "Crypto Real Time Inference",
  description: "Built by Chris Keim",
};

export default function CryptoPage() {
  return (
    <>
      <CryptoHero />
      <ResearchPaper />
    </>
  );
}
