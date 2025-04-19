import ProjectCard from "@/components/Projects/ProjectCard";
import IconLight from "@/public/images/logo_light.svg";
import IconDark from "@/public/images/logo_dark.svg";
import GitHubIcon from "@/public/images/github.svg";
import TwitterSentimentIcon from "@/public/images/twitter_si.svg";
import InstacartProjectIcon from "@/public/images/instacart_ba.svg";
import FetalHealthClassificationIcon from "@/public/images/fhc.svg";

export const metadata = {
  title: "Projects - Christopher Keim",
  description: "Projects that Chris Keim has worked on",
};

export default function Projects() {
  const projects = [
    {
      id: "crypto_realtime_inference",
      iconLight: IconLight,
      iconDark: IconDark,
      link: "https://github.com/christopherkeim/crypto-real-time-inference",
      demoLink: "/projects/crypto",
      title: "Crypto Real Time Inference",
      excerpt:
        "This application leverages historical price data and cutting-edge machine learning algorithms to serve inferences about future Bitcoin and Ethereum price points within a 1 hour window, in real time.",
    },
    {
      id: "rust_cli_template",
      iconLight: GitHubIcon,
      iconDark: GitHubIcon,
      link: "https://github.com/christopherkeim/rust-cli-template",
      title: "Rust CLI Template",
      excerpt:
        "A simple Rust command-line interface application that converts webpages to markdown files with automated development environment setup, CI/CD, and containerization 🦀 🚀 ✨.",
    },
    {
      id: "python_ml_template",
      iconLight: GitHubIcon,
      iconDark: GitHubIcon,
      link: "https://github.com/christopherkeim/python-ml-template",
      title: "Python ML Template",
      excerpt:
        "Open Source template repository for Python-based Machine Learning projects with FastAPI for serving predictions, automated development environment setup, CI/CD, and containerization 🐍 🚀 ✨.",
    },
  ];

  const research = [
    {
      id: "twitter_sentiment_analysis",
      iconLight: TwitterSentimentIcon,
      iconDark: TwitterSentimentIcon,
      link: "https://github.com/christopherkeim/machine_learning/blob/Projects/projects/Twitter_Sentiment_Analysis/Python/twitter_sentiment_analysis.ipynb",
      title: "Twitter Sentiment Analysis",
      excerpt:
        "DL development of a LSTM neural network for sentiment analysis on 1.6 million tweets.",
    },
    {
      id: "instacart_market_basket",
      iconLight: InstacartProjectIcon,
      iconDark: InstacartProjectIcon,
      link: "https://github.com/christopherkeim/machine_learning/blob/Projects/projects/Instacart_Market_Basket_Analysis/Python/instacart_market_basket_EDA.ipynb",
      title: "Instacart Market Basket Analysis",
      excerpt:
        "EDA on dataset of over 3 million orders placed by more than 200,000 Instacart users.",
    },
    {
      id: "fetal_health_classification",
      iconLight: FetalHealthClassificationIcon,
      iconDark: FetalHealthClassificationIcon,
      link: "https://github.com/christopherkeim/machine_learning/blob/Projects/projects/Fetal_Health_Classification/Python/fetal_health_classification.ipynb",
      title: "Fetal Health Classification",
      excerpt:
        "ML development of 3 multiclass models that classify CTG features into fetal health states.",
    },
  ];

  return (
    <div className="relative mx-auto max-w-6xl px-4 pb-12 pt-32 sm:px-6 md:pb-20">
      {/* Middle area */}
      <div className="grow">
        <div className="w-full">
          <section>
            {/* Page title */}
            {/* <h1 className="h1 font-aspekta mb-12">Code I&apos;ve built</h1> */}
            {/* Page content */}
            <div className="space-y-10">
              {/* Side Hustles cards */}
              <section>
                <h2 className="font-aspekta mb-6 text-xl font-[650]">
                  Software
                </h2>
                {/* Cards */}
                <div className="grid gap-5 md:grid-cols-2">
                  {projects.map((item) => (
                    <ProjectCard key={item.id} item={item} />
                  ))}
                </div>
              </section>
              {/* Client Projects cards */}
              <section>
                <h2 className="font-aspekta mb-6 text-xl font-[650]">
                  Data Science
                </h2>
                {/* Cards */}
                <div className="grid gap-5 md:grid-cols-2">
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
