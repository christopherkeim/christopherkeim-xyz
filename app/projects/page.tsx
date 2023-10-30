import ProjectCard from "@/components/Projects/ProjectCard";
import IconLight from "@/public/images/logo_light.svg";
import IconDark from "@/public/images/logo_dark.svg";
import GitHubIcon from "@/public/images/github.svg";

export const metadata = {
  title: "Projects - DevSpace",
  description: "Page description",
};

export default function Projects() {
  const projects = [
    {
      id: "crypto_realtime_inference",
      iconLight: IconLight,
      iconDark: IconDark,
      link: "https://github.com/christopherkeim/crypto-real-time-inference",
      demoLink: "/projects/crypto",
      title: "Crypto Realtime Inference",
      excerpt:
        "Leverage historical Bitcoin price data and cutting-edge machine learning algorithms to serve inferences about Bitcoin's future price points within a 1 hour window, in real time.",
    },
    {
      id: "python_ml_template",
      iconLight: GitHubIcon,
      iconDark: GitHubIcon,
      link: "https://github.com/christopherkeim/python-ml-template",
      title: "Python ML Template",
      excerpt:
        "Open Source template repository for Python-based Machine Learning projects.",
    },
  ];

  const research = [
    {
      id: "twitter_sentiment_analysis",
      iconLight: IconLight,
      iconDark: IconDark,
      link: "https://github.com/christopherkeim/machine_learning/blob/Projects/projects/Twitter_Sentiment_Analysis/Python/twitter_sentiment_analysis.ipynb",
      title: "Twitter Sentiment Analysis",
      excerpt:
        "DL development of a LSTM neural network for sentiment analysis on 1.6 million tweets.",
    },
    {
      id: "instacart_market_basket",
      iconLight: IconLight,
      iconDark: IconDark,
      link: "https://github.com/christopherkeim/machine_learning/blob/Projects/projects/Instacart_Market_Basket_Analysis/Python/instacart_market_basket_EDA.ipynb",
      title: "Instacart Market Basket Analysis",
      excerpt:
        "EDA on dataset of over 3 million orders placed by more than 200,000 Instacart users.",
    },
    {
      id: "fetal_health_classification",
      iconLight: IconLight,
      iconDark: IconDark,
      link: "https://github.com/christopherkeim/machine_learning/blob/Projects/projects/Fetal_Health_Classification/Python/fetal_health_classification.ipynb",
      title: "Fetal Health Classification",
      excerpt:
        "ML development of 3 multiclass models that classify CTG features into fetal health states.",
    },
  ];

  return (
    <div className="relative mx-auto max-w-6xl px-4 sm:px-6 pb-12 pt-32 md:pb-20">
      {/* Middle area */}
      <div className="grow">
        <div className="w-full">
          <section>
            {/* Page title */}
            <h1 className="h1 font-aspekta mb-12">
              Nice stuff I&apos;ve built
            </h1>
            {/* Page content */}
            <div className="space-y-10">
              {/* Side Hustles cards */}
              <section>
                <h2 className="font-aspekta text-xl font-[650] mb-6">
                  Projects
                </h2>
                {/* Cards */}
                <div className="grid md:grid-cols-2 gap-5">
                  {projects.map((item) => (
                    <ProjectCard key={item.id} item={item} />
                  ))}
                </div>
              </section>
              {/* Client Projects cards */}
              <section>
                <h2 className="font-aspekta text-xl font-[650] mb-6">
                  Research Projects
                </h2>
                {/* Cards */}
                <div className="grid md:grid-cols-2 gap-5">
                  {research.map((item) => (
                    <ProjectCard key={item.id} item={item} />
                  ))}
                </div>
              </section>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
