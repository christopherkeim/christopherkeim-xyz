import { PaperHeader } from "@/components/Projects/Crypto/PaperHeader";
import { PaperImage } from "@/components/Projects/Crypto/PaperImage";
import { PaperParagraph } from "@/components/Projects/Crypto/PaperParagraph";

export function ResearchPaper() {
  return (
    <section>
      <div className="mx-auto my-2 max-w-6xl px-4 sm:px-6">
        {/* Paper effect */}
        <div className="relative rounded-sm bg-gray-50 px-8 py-10 dark:bg-zinc-900 md:px-12 md:py-10">
          <div className="relative mx-auto max-w-3xl ">
            <PaperHeader headerLevel={2}>
              Crypto Real Time Inference
            </PaperHeader>
            <PaperImage src="/images/project_overview.png" />
            <PaperHeader headerLevel={3}>Overview</PaperHeader>
            <PaperParagraph>
              The aim of this application is to leverage historical
              cryptocurrency price data and cutting-edge machine learning
              algorithms to serve inferences about a cryptocurrency&apos;s
              future price points within a 1 hour window, in real time.
            </PaperParagraph>
            <PaperParagraph>
              This was my first time working with time series data, and here we
              worked with raw time series datapoints that are served as OHLC
              (&quot;open&quot;, &quot;high&quot;, &quot;low&quot;,
              &quot;close&quot;) &quot;candles&quot;. At a high level, I&apos;ve
              chosen to think of a given cryptocurrency as a complex system
              (read: chaotic system), emergent as a phenomenon of large N
              interactions between groups of humans. Inherently, this is a
              social system.
            </PaperParagraph>
            <PaperParagraph>
              In this framework, a &quot;candle&quot; is a measurement of a
              cryptocurrency&apos;s state at a given moment in time - and by
              measuring state at a series of time points we can see how the
              system&apos;s state evolves over time. The raw dataset itself
              (consisting of multiple candles) is a function that maps
              empirically measured states to time points. At a fundamental
              level, the same concepts can be applied to any physical system
              composed of a large number of interacting variables - which means
              this is a very challenging problem!
            </PaperParagraph>
            <PaperImage src="/images/BTC-USD_candle_plot.png" />
            <PaperParagraph>
              The application consists of these core components:
              <ol
                className="list-decimal flex flex-wrap px-6 my-4"
                type="1"
                start={1}
              >
                <li className="px-3">
                  Continuous Integration Pipeline: for source code integration
                </li>
                <li className="px-3">
                  Data Engineering Pipeline: that pulls raw cryptocurrency OHLC
                  (&quot;open&quot;, &quot;high&quot;, &quot;low&quot;,
                  &quot;close&quot;) candle data for a given cryptocurrency
                </li>
                <li className="px-3">
                  Feature Engineering Pipeline: that builds
                  supervised-machine-learning-ready datasets from this raw data
                </li>
                <li className="px-3">
                  Training Pipeline: that trains both machine learning and deep
                  learning models, evaluates them, and pushes them up to our
                  model registry
                </li>
                <li className="px-3">
                  Prediction Service: that serves model predictions using
                  FastAPI
                </li>
                <li className="px-3">
                  Continuous Delivery Pipeline: that pulls our models from the
                  registry, concurrently builds the prediction service into two
                  Docker images (targeting x86_64 and arm64 chip architectures),
                  and pushes them to Docker Hub
                </li>
                <li className="px-3">
                  Continuous Deployment Pipeline: with a web server written in
                  Go that listens for webhooks from Docker Hub and deploys our
                  prediction service onto a Raspberry Pi
                </li>
                <li className="px-3">
                  Frontend: built with Next.js, which you&apos;re using to view
                  this
                </li>
              </ol>
            </PaperParagraph>
            <PaperParagraph>
              This project natively makes predictions for both Bitcoin and
              Ethereum pricepoints, though the source code supports any
              cryptocurrency that has publically available data.
            </PaperParagraph>
            <PaperHeader headerLevel={3}>Feature Engineering</PaperHeader>
            <PaperImage src="/images/feature_engineering.png" />
            <PaperParagraph>
              Features are the variables (or information) that we give to
              machine learning models for them to make predictions with.
            </PaperParagraph>
            <PaperParagraph>
              Feature engineering is the process of extracting meaningful
              information from raw data that describes or encodes the process we
              are measuring, with the aim of improving our supervised machine
              learning algorithm&apos;s ability to make accurate predictions -
              feature engineering plays a very key role in this project.
            </PaperParagraph>
            <PaperParagraph>
              The raw OHLC (&quot;open&quot;, &quot;high&quot;, &quot;low&quot;,
              &quot;close&quot;) candle data is not fit for supervised machine
              learning modeling as is when we pull it down from Coinbase - it
              must be processed into a set of predictive features (an
              &quot;X&quot; dataset) and a target variable (a &quot;y&quot;
              dataset) that we can train a model to make predictions with.
            </PaperParagraph>
            <PaperParagraph>
              The preprocessing and feature engineering steps taken can be
              broken down as:
              <ol
                className="list-decimal flex flex-wrap px-6 my-4"
                type="1"
                start={1}
              >
                <li className="px-3">
                  Set &quot;time&quot; as the index and sort the dataset upfront
                  by this index before lag features are generated
                </li>
                <li className="px-3">
                  Generate &quot;Lag&quot; X features
                  (&quot;price_i_hour_ago&quot; and
                  &quot;volume_i_hour_ago&quot; for past 24 hours) and y target
                  (&quot;target_price_next_hour&quot;)
                </li>
                <li className="px-3">
                  Compute window features for price and volume (moving average,
                  moving standard deviation of past 24 hours)
                </li>
                <li className="px-3">
                  Calculate technical indicators (price percentage return, RSI)
                </li>
                <li className="px-3">
                  Split the full preprocessed dataset into an X features dataset
                  and a y target dataset
                </li>
                <li className="px-3">Fit a scaler model to the X data</li>
                <li className="px-3">
                  Version preprocessed datasets and X scaler model in model
                  registry
                </li>
              </ol>
            </PaperParagraph>
            <PaperParagraph>
              At the end of this process we have an X features dataset that
              contains 68 features and a y target dataset that contains our
              prediction target that we can use to train supervised machine
              learning models.
            </PaperParagraph>
            <PaperHeader headerLevel={3}>Modeling</PaperHeader>
            <PaperImage src="/images/training.png" />
            <PaperParagraph>
              You can think of our feature engineering process as transforming
              the raw dataset of OHLC candles, which constitutes a 6-dimensional
              geometric space, into a 68-dimensional geometric space. Each
              candle which was once a 6-dimensional point is now a
              68-dimensional point in this space.
            </PaperParagraph>
            <PaperParagraph>
              In this sense, during model development we are training models to
              map 68-dimensional points in our feature space to 1-dimensional
              points on our target space.
            </PaperParagraph>
            <PaperParagraph>
              This application has infrastructure that supports both machine
              learning and deep learning modeling for cryptocurrency price data.
            </PaperParagraph>
            <PaperHeader headerLevel={4}>Machine Learning</PaperHeader>
            <PaperParagraph>
              The two machine learning algorithms I chose to explore here are
              the Lasso Regressor and Light Gradient Boosted Machine Regressor
              (LGBMRegressor) models.
            </PaperParagraph>
            <PaperHeader headerLevel={5}>
              <b>Lasso Regressor</b>
            </PaperHeader>
            <PaperParagraph>
              My personal preference is always to reach for simple regression
              models first - not only do they serve as good baselines in your
              work if you end up requiring more complex modeling, they often
              perform quite well with some informed feature engineering choices
              or customization.
            </PaperParagraph>
            <PaperParagraph>
              Another benefit here is that focusing on simple models first can
              accelerate your development process. Building minimum viable
              models allows you to focus on feature engineering, building web
              infrastrucure to incorporate your service into an application, and
              developing CI/CD pipelines for model deployment.
            </PaperParagraph>
            <PaperHeader headerLevel={5}>
              <b>Light Gradient Boosted Machine Regressor</b>
            </PaperHeader>
            <PaperParagraph>
              Ensemble methods are powerful, and often very successful in
              complex datasets.
            </PaperParagraph>
            <PaperParagraph>
              Often a Gradient Boosted Tree or a Random Forest are solid choices
              when testing whether a more complex model is better suited to your
              dataset, without stepping into deep learning. Gradient Boosted
              Trees have the benefit of having specific optimizations for
              reaching convergence during parameter updates, leading to faster
              training times.
            </PaperParagraph>
            <PaperParagraph>
              The LGBMRegressor boasted a fast training time, but it did not
              appear to be suited for time series data. Ultimately I decided to
              move onto neural network modeling.
            </PaperParagraph>
            <PaperHeader headerLevel={4}>Deep Learning</PaperHeader>
            <PaperParagraph>
              The two deep learning algorithms I chose to implement here are the
              Convolutional Neural Network (CNN) and Long-Short Term Memory
              (LSTM) Neural Network models.
            </PaperParagraph>
            <PaperParagraph>
              My original intuition was that a LSTM Neural Network would perform
              well, but I found that it was both slow and cumbersome and
              ill-suited for our features.
            </PaperParagraph>
            <PaperParagraph>
              Convolutional Neural Networks are typically used for image
              analysis tasks, but it turned out to be a great model to implement
              for the task at hand.
            </PaperParagraph>
            <PaperHeader headerLevel={5}>
              <b>Convolutional Neural Network Architecture</b>
            </PaperHeader>
            <PaperParagraph>
              Neural network models were built using TensorFlow. With some
              experimenting I found that the Adam optimizer worked best. A
              learning rate of α = 0.001 was used. The CNN architecture I
              selected was:
              <ol className="list-decimal px-6 my-4" type="1" start={1}>
                <li className="px-3">InputLayer((n_features, 1)) </li>
                <li className="px-3">Conv1D(256, kernel_size=4)</li>
                <li className="px-3">Flatten()</li>
                <li className="px-3">
                  Dense(128, activation=&quot;relu&quot;)
                </li>
                <li className="px-3">Activation(&quot;relu&quot;)</li>
                <li className="px-3">
                  Dense(128, activation=&quot;linear&quot;)
                </li>
                <li className="px-3">Activation(&quot;relu&quot;)</li>
                <li className="px-3">
                  Dense(1, activation=&quot;linear&quot;)
                </li>
              </ol>
              Initial testing was run for a maximum of 20 epochs. After
              architecture selection and hyperparameter tuning, we used the best
              models saved from 300 epochs of training.
            </PaperParagraph>
            <PaperHeader headerLevel={4}>Experimental Results</PaperHeader>
            <PaperParagraph>
              A battery of experiments were run testing the Lasso Regressor,
              Light Gradient Boosted Machine Regressor (LGBMRegressor), Long
              Short-Term Memory (LSTM) Neural Network, and Convolution Neural
              Network (CNN) models respectively.
            </PaperParagraph>
            <PaperParagraph>
              The Lasso Regressor performed extremely well for it&apos;s
              simplicity - it&apos;s a lightweight, efficient, and beautiful
              algorithm, very fast to train and easy to deploy. It garnered a
              mean absolute error of 88.143 on Bitcoin price predictions (fig.1)
              and 5.750 on Ethereum price predictions (fig.3).
            </PaperParagraph>
            <PaperParagraph>
              I found that a Convolutional Neural Network (CNN) performed far
              better on both Bitcoin and Ethereum predictions compared to a
              Long-Short Term Memory (LSTM) Neural Network, and it&apos;s
              relative parameter simplicity combined with it&apos;s accuracy
              made it a clear choice for deployment. The CNN model garnered a
              mean absolute error of 64.711 on Bitcoin price predictions (fig.2)
              and 4.474 on Ethereum price predictions (fig.4).
            </PaperParagraph>
            <PaperImage src="/images/BTC_modeling.png" />
            <PaperImage src="/images/ETH_modeling.png" />
            <PaperHeader headerLevel={4}>Modeling Recommendations</PaperHeader>
            <PaperParagraph>
              Modeling recommendations based on these experiments and used in
              this application can be seen below.
            </PaperParagraph>
            <PaperParagraph>
              <b>Machine Learning:</b>
              <ul className="list-disc flex flex-wrap px-6 my-4">
                <li className="px-3">
                  ✅ Lasso: fast, powerful, simple, and accurate -{" "}
                  <b>primary recommendation</b>
                </li>
                <li className="px-3">
                  🔵 LightGBM: most efficient ensemble method, most likely
                  requires further custom feature engineering
                </li>
              </ul>
              <b>Deep Learning:</b>
              <ul className="list-disc flex flex-wrap px-6 my-4">
                <li className="px-3">
                  ✅ Convolutional Neural Network: fast, powerful, extremely
                  lightweight, and accurate - <b>primary recommendation</b>
                </li>
                <li className="px-3">
                  ❌ Long Short-Term Memory Neural Network: complex, slow, and
                  doesn&apos;t tolerate current features well; not recommended
                  for use in current project
                </li>
              </ul>
            </PaperParagraph>
            <PaperHeader headerLevel={3}>Prediction Service</PaperHeader>
            <PaperImage src="/images/prediction.png" />
            <PaperParagraph>
              I used FastAPI to build an endpoint that responds to GET requests
              with parameters for a cryptocurrency, timepoint, and model. The
              service runs as a Docker container.
            </PaperParagraph>
            <PaperParagraph>
              After a valid request comes in, the Prediction Service loads the
              requested model, downloads the past 24 hours of candle data for
              the cryptocurrency up to the requested timepoint, and engineers
              features from those datapoints.
            </PaperParagraph>
            <PaperParagraph>
              Once features are created, it feeds them to the model and delivers
              a PredictionResult object to our frontend for parsing.
            </PaperParagraph>
            <PaperHeader headerLevel={3}>Continuous Delivery</PaperHeader>
            <PaperImage src="/images/continuous_delivery.png" />
            <PaperParagraph>
              Our Prediction Service is deployed onto a Raspberry Pi, which runs
              with an arm64 chip architecture.
            </PaperParagraph>
            <PaperParagraph>
              I wanted to keep the Prediction Service deployable across servers
              with amd64 and arm64 chip architectures, and I decided to
              implement this with a matrix build triggered inside of a Github
              Action.
            </PaperParagraph>
            <PaperParagraph>
              When our source code passes our CI pipeline and a pull request is
              merged into main, our CD pipeline triggers a workflow that builds
              two Docker images concurrently.
            </PaperParagraph>
            <PaperParagraph>
              In one virtual machine, we emulate an arm64 chip using QEMU and
              build the Prediction Service into a Docker image that&apos;s
              executable on our Raspberry Pi.
            </PaperParagraph>
            <PaperParagraph>
              Simultaneously, a separate Docker image is built on a regular
              GitHub Azure virtual machine, which natively uses an amd64 chip.
              We would use this image if we wanted to deploy the Prediction
              Service to any of the standard cloud providers.
            </PaperParagraph>
            <PaperParagraph>
              After each image is done building, they are pushed to our Docker
              Hub repository, where we can easily pull them down from for
              deployments.
            </PaperParagraph>
            <PaperHeader headerLevel={3}>Continuous Deployment</PaperHeader>
            <PaperImage src="/images/continuous_deployment.png" />
            <PaperParagraph>
              To tie everything together I built a custom Continuous Deployment
              pipeline for our Raspberry Pi.
            </PaperParagraph>
            <PaperParagraph>
              The pipeline consists of a webhook endpoint written in Go and
              Docker Compose yaml file.
            </PaperParagraph>
            <PaperParagraph>
              The Go endpoint listens for webhooks posted from Docker Hub
              whenever we push a new arm64 image to our repository. We use
              CloudFlare to tunnel traffic from the Internet into the Raspberry
              Pi.
            </PaperParagraph>
            <PaperParagraph>
              When a POST request from Docker Hub is sent with a valid deploy
              key, the Go endpoint triggers our script that pulls our new image
              from Docker Hub, and rolls it out on the server.
            </PaperParagraph>
            <PaperParagraph>
              Using Docker Compose to orchestrate our container upgrades allows
              us to get continuous availability during upgrades. We built our
              tunnel, webhook endpoint, and the container itself into services
              on the Raspberry Pi, which starts them on boot and restarts them
              on any failures.
            </PaperParagraph>
          </div>
        </div>
      </div>
    </section>
  );
}
