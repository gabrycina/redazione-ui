import { ChevronRightIcon, StarIcon } from '@heroicons/react/20/solid'
import ExplainRedact from "../assets/explain-redact.jpg"
import ExplainRedactMobile from "../assets/explain-redact-mobile.jpg"

const stats = [
  { label: 'Emails sent', value: '100+' },
  { label: 'Time to setup', value: '59 sec' },
  { label: 'Alpha Users', value: '10' },
  { label: 'Are we happy?', value: 'Yes' },
]

const logos = [
  {
    name: 'Linkedin',
    href: '#',
    icon: (props: any) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M22.23 0H1.77C.792 0 0 .774 0 1.727v20.545C0 23.226.792 24 1.77 24h20.46c.978 0 1.77-.774 1.77-1.728V1.727C24 .774 23.208 0 22.23 0zM7.12 20.452H3.56V9H7.12v11.452zM5.34 7.516a2.04 2.04 0 1 1 0-4.08 2.04 2.04 0 0 1 0 4.08zM20.452 20.452h-3.56V14.88c0-1.33-.026-3.042-1.853-3.042-1.854 0-2.137 1.448-2.137 2.942v5.672H9.34V9h3.416v1.563h.049c.476-.898 1.635-1.848 3.364-1.848 3.596 0 4.256 2.366 4.256 5.442v6.295z" />
      </svg>
    ),
  },
  {
    name: 'X',
    href: '#',
    icon: (props: any) => (
      <svg fill="currentColor" viewBox="0 0 300 300" {...props}>
        <path d="M178.57 127.15 290.27 0h-26.46l-97.03 110.38L89.34 0H0l117.13 166.93L0 300.25h26.46l102.4-116.59 81.8 116.59h89.34M36.01 19.54H76.66l187.13 262.13h-40.66" />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    href: '#',
    icon: (props: any) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path
          fillRule="evenodd"
          d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: 'Twitter',
    href: '#',
    icon: (props: any) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
      </svg>
    ),
  },
]

const LandingPage = () => {
  return (
    <div className="bg-white">
    <main>
      <div className="flex justify-start">
        <h1 className='text-2xl ml-10 mt-10'>
          Redact
        </h1>
      </div>
      {/* Hero section */}
      <div className="overflow-hidden lg:relative">
        <div className="mx-auto max-w-md px-6 sm:max-w-3xl lg:grid lg:max-w-7xl flex justify-center lg:gap-24 lg:px-8">
          <div>
            <div className="mt-14">
              <div>
                <a href="#" className="inline-flex space-x-4">
                  <span className="rounded bg-rose-50 px-2.5 py-1 text-sm font-semibold text-rose-500">
                    Alpha Version
                  </span>
                  <span className="inline-flex items-center space-x-1 text-sm font-medium text-rose-500">
                    <span>Just shipped v0.1.0</span>
                    <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
                  </span>
                </a>
              </div>
              <div className="mt-6 sm:max-w-xl">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                  Setup your own newsletter.
                </h1>
                <p className="mt-6 text-xl text-gray-500">
                  Use our AI Agents to generate a personalised newsletter based on the sources you're interested in 📬
                </p>
              </div>
              <form action="#" className="mt-12 flex justify-center flex-col sm:flex-row">
                <div className="min-w-0 flex-1">
                  <label htmlFor="hero-email" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="hero-email"
                    type="email"
                    className="block w-full rounded-md border border-gray-300 px-5 py-3 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:border-rose-500 focus:ring-rose-500"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="mt-4 sm:mt-0 sm:ml-3">
                  <button
                    type="submit"
                    className="block w-full rounded-md border border-transparent bg-rose-500 px-5 py-3 text-base font-medium text-white shadow hover:bg-rose-600 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2 sm:px-10"
                  >
                    Request Demo
                  </button>
                </div>
              </form>
              <div className="mt-6">
                <div className="inline-flex items-center divide-x divide-gray-300">
                  <div className="flex flex-shrink-0 pr-5">
                    <StarIcon className="h-5 w-5 text-yellow-400" aria-hidden="true" />
                    <StarIcon className="h-5 w-5 text-yellow-400" aria-hidden="true" />
                    <StarIcon className="h-5 w-5 text-yellow-400" aria-hidden="true" />
                    <StarIcon className="h-5 w-5 text-yellow-400" aria-hidden="true" />
                    <StarIcon className="h-5 w-5 text-yellow-400" aria-hidden="true" />
                  </div>
                  <div className="min-w-0 flex-1 py-1 pl-5 text-sm text-gray-500 sm:py-3">
                    <span className="font-medium text-gray-900">Rated 5 stars</span> by our{' '}
                    <span className="font-medium text-rose-500">closest friends :)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial/stats section */}
      <div className="">
        <div className="lg:mx-auto lg:max-w-7xl lg:items-start lg:px-8">
          <div className="relative sm:py-16 lg:py-0">
            <div className="relative mx-auto max-w-md px-6 sm:max-w-3xl lg:max-w-none lg:px-0 lg:pb-20">
              <div className="relative overflow-hidden rounded-2xl py-10">
                <img
                  className="max-h-[50rem] w-auto mx-auto md:block hidden"
                  src={ExplainRedact}
                  alt=""
                />
                <img
                  className="max-h-[50rem] w-auto mx-auto md:hidden"
                  src={ExplainRedactMobile}
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="relative mx-auto max-w-md px-6 sm:max-w-3xl lg:px-0">
            {/* Content area */}
            <div>
              <h2 className="text-left text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl pb-4">
                A simple idea for your media consumption 💡
              </h2>
              <div className="mt-6 space-y-6 text-gray-500 text-left">
                <p className="text-lg">
                  As consumers we dive into a bunch of media every day.
                </p>
                <p className="text-lg">
                  We skim.
                </p>
                <p className="text-lg">
                  We read.
                </p>
                <p className="text-lg">
                  We search for something useful for us, our business or career.
                </p>
                <p className="text-base leading-7">
                  Personally, we found that the skimming part was an easy job for AI agents. So we started having this automation running daily on our favourite sources (mostly hackernews cause we're nerds)
                </p>
                <p className="text-base leading-7">
                  Every morning an email is sent to us with the most relevant articles from a bunch of sources.
                </p>
                <p className="text-base leading-7">
                  We specify our preferences and Redact knows what to do to make us happy. It also has some weird humor, you need to try it.
                </p>
              </div>
            </div>

            {/* Stats section */}
            <div className="mt-10">
              <dl className="grid grid-cols-2 gap-x-4 gap-y-8">
                {stats.map((stat) => (
                  <div key={stat.label} className="border-t-2 border-gray-100 pt-6">
                    <dt className="text-base font-medium text-gray-500">{stat.label}</dt>
                    <dd className="text-3xl font-bold tracking-tight text-gray-900">{stat.value}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-10">
                <a href="#" className="text-base font-medium text-rose-500">
                  Join the alpha &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Logo cloud section */}
      <div className="mt-32">
        <div className="mx-auto max-w-md px-6 sm:max-w-3xl lg:max-w-7xl lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:items-center lg:gap-24">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-left">
                For media and influencers 📈
              </h2>
              <p className="mt-6 max-w-3xl text-lg leading-7 text-gray-500 text-left">
                After working in a media company and running our own medias we found that this could be a game changer for gathering daily inspiration wasting 0 time.
              </p>
              <div className="mt-6">
                <a href="#" className="text-base font-medium text-rose-500">
                  Ask for a b2b demo &rarr;
                </a>
              </div>
            </div>
            <div className="mt-12 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-0 lg:grid-cols-2">
              {logos.map((logo) => (
                <div key={logo.name} className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
                  <logo.icon className="h-14 w-14" aria-hidden="true" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA section */}
      <div className="relative mt-24 sm:mt-32 sm:py-16">
        <div aria-hidden="true" className="hidden sm:block">
          <div className="absolute inset-y-0 left-0 w-1/2 rounded-r-3xl bg-gray-50" />
          <svg className="absolute top-8 left-1/2 -ml-3" width={404} height={392} fill="none" viewBox="0 0 404 392">
            <defs>
              <pattern
                id="8228f071-bcee-4ec8-905a-2a059a2cc4fb"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width={404} height={392} fill="url(#8228f071-bcee-4ec8-905a-2a059a2cc4fb)" />
          </svg>
        </div>
        <div className="mx-auto max-w-md px-6 sm:max-w-3xl lg:max-w-7xl lg:px-8">
          <div className="relative overflow-hidden rounded-2xl bg-rose-500 px-6 py-10 shadow-xl sm:px-12 sm:py-20">
            <div aria-hidden="true" className="absolute inset-0 -mt-72 sm:-mt-32 md:mt-0">
              <svg
                className="absolute inset-0 h-full w-full"
                preserveAspectRatio="xMidYMid slice"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 1463 360"
              >
                <path
                  className="text-rose-400 text-opacity-40"
                  fill="currentColor"
                  d="M-82.673 72l1761.849 472.086-134.327 501.315-1761.85-472.086z"
                />
                <path
                  className="text-rose-600 text-opacity-40"
                  fill="currentColor"
                  d="M-217.088 544.086L1544.761 72l134.327 501.316-1761.849 472.086z"
                />
              </svg>
            </div>
            <div className="relative">
              <div className="sm:text-center">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Start today requesting a demo
                </h2>
                <p className="mx-auto mt-6 max-w-2xl text-lg text-rose-100">
                  Insert your email and our agent will guide you through the process of starting using our alpha for Redact
                </p>
              </div>
              <form action="#" className="mt-12 sm:mx-auto sm:flex sm:max-w-lg">
                <div className="min-w-0 flex-1">
                  <label htmlFor="cta-email" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="cta-email"
                    type="email"
                    className="block w-full rounded-md border border-transparent px-5 py-3 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-rose-500"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="mt-4 sm:mt-0 sm:ml-3">
                  <button
                    type="submit"
                    className="block w-full rounded-md border border-transparent bg-gray-900 px-5 py-3 text-base font-medium text-white shadow hover:bg-black focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-rose-500 sm:px-10"
                  >
                    Request demo
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>

    {/* Footer section */}
    <footer className="mt-24 bg-gray-900 sm:mt-12">
      <div className="mx-auto max-w-md overflow-hidden py-12 px-6 sm:max-w-3xl lg:max-w-7xl lg:px-8">
        <p className="mt-8 text-center text-base text-gray-400">
          &copy; 2024 Redact, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  </div> 
  );
};

export default LandingPage;
