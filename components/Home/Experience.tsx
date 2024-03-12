import Image from "next/image";

import UnderdogDevsLogo from "@/public/images/underdog_devs_logo.png";
import RelativePathLogo from "@/public/images/relative_path_logo.png";
import UniversityOfVermont from "@/public/images/university_of_vermont_logo.png";

export function Experience() {
  return (
    <section className="space-y-8">
      <h4 className="h4 font-aspekta text-slate-800 dark:text-slate-100">
        Work Experience
      </h4>
      <ul className="space-y-8">
        <li className="group relative">
          <div className="flex items-start before:absolute before:left-0 before:ml-[28px] before:h-full before:w-px before:-translate-x-1/2 before:translate-y-8 before:self-start before:bg-slate-200 before:group-last-of-type:hidden before:dark:bg-slate-800">
            <div className="absolute left-0 flex h-14 w-14 items-center justify-center rounded-full border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900 dark:bg-gradient-to-t dark:from-slate-800 dark:to-slate-800/30">
              <Image
                height={24}
                width={24}
                src={UnderdogDevsLogo}
                alt="Underdog Devs Logo"
              />
            </div>
            <div className="space-y-1 pl-20">
              <div className="text-xs uppercase text-slate-900 dark:text-slate-500">
                Aug 2023{" "}
                <span className="text-slate-400 dark:text-slate-600">·</span>{" "}
                Present
              </div>
              <div className="font-aspekta font-[650] text-slate-800 dark:text-slate-100">
                Software Engineer Apprentice
              </div>
              <div className="text-sm font-medium text-slate-800 dark:text-slate-100">
                Underdog Devs
              </div>
              <ul className="text-sm text-slate-900 dark:text-slate-400">
                <li className="flex">
                  <span className="mr-2">-</span>{" "}
                  <span>
                    <a
                      href="https://www.christopherkeim.xyz/projects/crypto"
                      className="text-blue-500"
                    >
                      Crypto Real Time Inference:
                    </a>
                    &nbsp; Full-stack deep learning application leveraging
                    Python, FastAPI, Tensorflow, and TypeScript that serves and
                    renders neural network predictions in real time
                  </span>
                </li>
                <li className="mb-1 flex">
                  <span className="mr-2">-</span> Developed CI/CD pipelines
                  supporting machine learning web service deployments across
                  arm64 and x86_64 microprocessors using Golang, Docker, and
                  GitHub Actions
                </li>
                <li className="mb-1 flex">
                  <span className="mr-2">-</span> Rigorous daily 1:1 pair
                  programming with 7 senior software engineer mentors
                </li>
              </ul>
            </div>
          </div>
        </li>

        <li className="group relative">
          <div className="flex items-start before:absolute before:left-0 before:ml-[28px] before:h-full before:w-px before:-translate-x-1/2 before:translate-y-8 before:self-start before:bg-slate-200 before:group-last-of-type:hidden before:dark:bg-slate-800">
            <div className="absolute left-0 flex h-14 w-14 items-center justify-center rounded-full border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900 dark:bg-gradient-to-t dark:from-slate-800 dark:to-slate-800/30">
              <Image
                height={24}
                width={24}
                src={RelativePathLogo}
                alt="Relative Path Logo"
              />
            </div>
            <div className="space-y-1 pl-20">
              <div className="text-xs uppercase text-slate-900 dark:text-slate-500">
                May 2023{" "}
                <span className="text-slate-400 dark:text-slate-600">·</span>{" "}
                Present
              </div>
              <div className="font-aspekta font-[650] text-slate-800 dark:text-slate-100">
                DevOps Engineer Apprentice
              </div>
              <div className="text-sm font-medium text-slate-800 dark:text-slate-100">
                Relative Path
              </div>
              <ul className="text-sm text-slate-900 dark:text-slate-400">
                <li className="flex">
                  <span className="mr-2">-</span>
                  <span>
                    Implemented CI/CD pipelines for{" "}
                    <a
                      href="https://relativepath.tech/"
                      target="_blank"
                      className="text-blue-500"
                    >
                      relativepath.tech
                    </a>{" "}
                    with idempotent Bash scripting, GitHub Actions, and GitHub
                    Pages for static site deployments
                  </span>
                </li>
                <li className="flex">
                  <span className="mr-2">-</span> Teaching assistant for three
                  8-week cycles supporting intensive infrastructure instruction
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li className="group relative">
          <div className="flex items-start before:absolute before:left-0 before:ml-[28px] before:h-full before:w-px before:-translate-x-1/2 before:translate-y-8 before:self-start before:bg-slate-200 before:group-last-of-type:hidden before:dark:bg-slate-800">
            <div className="absolute left-0 flex h-14 w-14 items-center justify-center rounded-full border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900 dark:bg-gradient-to-t dark:from-slate-800 dark:to-slate-800/30">
              {/* Will update with proper logo later */}
              <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17">
                <path
                  fill="#6366F1"
                  d="M2.486 5.549C3.974 7.044 5.953 7.89 8.009 8.045c-.138-2.065-.997-4.053-2.486-5.548C4.035 1.002 2.117.154 0 0c.138 2.065.997 4.053 2.486 5.549Zm12.028 0c-1.488 1.495-3.467 2.342-5.523 2.496.138-2.065.997-4.053 2.486-5.548C12.888 1.002 14.883.154 17 0c-.153 2.065-.997 4.053-2.486 5.549Zm0 5.902c-1.488-1.495-3.467-2.342-5.523-2.496.138 2.065.997 4.053 2.486 5.548C12.965 15.998 14.944 16.846 17 17c-.153-2.127-.997-4.13-2.486-5.549Zm-12.028 0c1.488-1.495 3.467-2.342 5.6-2.496-.138 2.065-.998 4.053-2.486 5.548C4.035 15.998 2.117 16.861 0 17c.138-2.127.997-4.13 2.486-5.549Z"
                />
              </svg>
            </div>
            <div className="space-y-1 pl-20">
              <div className="text-xs uppercase text-slate-900 dark:text-slate-500">
                Jan 2022{" "}
                <span className="text-slate-400 dark:text-slate-600">·</span>{" "}
                Aug 2023
              </div>
              <div className="font-aspekta font-[650] text-slate-800 dark:text-slate-100">
                Data Science, Machine Learning, Python Developer
              </div>
              <div className="text-sm font-medium text-slate-800 dark:text-slate-100">
                Self - Projects
              </div>
              <ul className="text-sm text-slate-900 dark:text-slate-400">
                <li className="mb-1 flex">
                  <span className="mr-2">-</span>
                  <span>
                    <a
                      href="https://github.com/christopherkeim/machine_learning/blob/Projects/projects/Twitter_Sentiment_Analysis/Python/twitter_sentiment_analysis.ipynb"
                      target="_blank"
                      className="text-blue-500"
                    >
                      Twitter Sentiment Analysis:
                    </a>
                    &nbsp; DL development of a LSTM neural network for sentiment
                    analysis on 1.6 million tweets
                  </span>
                </li>
                <li className="mb-1 flex">
                  <span className="mr-2">-</span>
                  <span>
                    <a
                      href="https://github.com/christopherkeim/machine_learning/blob/Projects/projects/Instacart_Market_Basket_Analysis/Python/instacart_market_basket_EDA.ipynb"
                      target="_blank"
                      className="text-blue-500"
                    >
                      Instacart Market Basket EDA:
                    </a>
                    &nbsp; EDA on dataset of over 3 million orders placed by
                    more than 200,000 Instacart users
                  </span>
                </li>
                <li className="flex">
                  <span className="mr-2">-</span>
                  <span>
                    <a
                      href="https://github.com/christopherkeim/machine_learning/blob/Projects/projects/Fetal_Health_Classification/Python/fetal_health_classification.ipynb"
                      target="_blank"
                      className="text-blue-500"
                    >
                      Fetal Health Classification:
                    </a>
                    &nbsp; ML development of 3 multiclass models that classify
                    CTG features into fetal health states
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li className="group relative">
          <div className="flex items-start before:absolute before:left-0 before:ml-[28px] before:h-full before:w-px before:-translate-x-1/2 before:translate-y-8 before:self-start before:bg-slate-200 before:group-last-of-type:hidden before:dark:bg-slate-800">
            <div className="absolute left-0 flex h-14 w-14 items-center justify-center rounded-full border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900 dark:bg-gradient-to-t dark:from-slate-800 dark:to-slate-800/30">
              {/* Will update with proper logo later */}
              <Image
                height={24}
                width={24}
                src={UniversityOfVermont}
                alt="Relative Path Logo"
              />
            </div>
            <div className="space-y-1 pl-20">
              <div className="text-xs uppercase text-slate-900 dark:text-slate-500">
                Aug 2015{" "}
                <span className="text-slate-400 dark:text-slate-600">·</span>{" "}
                May 2018
              </div>
              <div className="font-aspekta font-[650] text-slate-800 dark:text-slate-100">
                Research Assistant
              </div>
              <div className="text-sm font-medium text-slate-800 dark:text-slate-100">
                Bouton Laboratory of Learning and Memory
              </div>
              <ul className="text-sm text-slate-900 dark:text-slate-400">
                <li className="flex">
                  <span className="mr-2">-</span>
                  <span>
                    Published co-author in experiment series establishing a{" "}
                    <a
                      href="https://onlinelibrary.wiley.com/doi/abs/10.1002/jeab.446"
                      target="_blank"
                      className="text-blue-500"
                    >
                      learning process&apos;s effect in addiction
                    </a>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </li>
      </ul>
    </section>
  );
}
