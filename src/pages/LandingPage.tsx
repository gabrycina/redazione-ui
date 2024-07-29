import { Toaster, toast } from 'sonner'
import { useState } from 'react'
import axios from 'axios'
import { usePostHog } from 'posthog-js/react'
import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/Hero'
import { Cta } from '@/components/Cta'
import { FAQ } from '@/components/FAQ'
import { Features } from '@/components/Features'
import { Footer } from '@/components/Footer'
import { Pricing } from '@/components/Pricing'
import { ScrollToTop } from '@/components/ScrollToTop'
import { Signup } from '@/components/Signup'
import { Sponsors } from '@/components/Sponsors'
import { Testimonials } from '@/components/Testimonials'

const LandingPage = () => {
  const [registerEmail, setRegisterEmail] = useState('');
  const posthog = usePostHog()

  const signUpClicked = () => {
    posthog?.capture('sign_up_clicked')
  }

  const handleSignUp = async (event: any) => {
    event.preventDefault();

    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/users`, { email: registerEmail });
      toast.success("Check your inbox. You just received the activation email 🚀")
      setRegisterEmail('');

      signUpClicked()
      posthog?.identify(registerEmail)
    } catch (error) {
      console.error('Error requesting demo:', error);
      toast.error("Mh..you got an error, try again")
    }
  };

  return (
    <>
      <Navbar />
      <Toaster position="bottom-right" richColors />
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <Hero handleSignUp={handleSignUp} />
        <Sponsors />
        <Features />
        <Cta handleSignUp={handleSignUp} />
        <Testimonials />
        <Pricing />
        <Signup handleSignUp={handleSignUp} />
        <FAQ />
        <Footer />
        <ScrollToTop />
      </div>
    </>
  )

  //   <div className="bg-white">
  //     <main>
  //       <Toaster position="bottom-right" richColors />
  //       <div className="flex justify-start">
  //         <h1 className='text-2xl ml-10 mt-10'>
  //           Redact
  //         </h1>
  //       </div>
  //       {/* Hero section */}
  //       <div className="overflow-hidden lg:relative">
  //         <div className="mx-auto max-w-md px-6 sm:max-w-3xl lg:grid lg:max-w-7xl flex justify-center lg:gap-24 lg:px-8">
  //           <div>
  //             <div className="mt-14">
  //               <div>
  //                 <a href="#" className="inline-flex space-x-4">
  //                   <span className="rounded bg-rose-50 px-2.5 py-1 text-sm font-semibold text-rose-500">
  //                     Alpha Version
  //                   </span>
  //                   <span className="inline-flex items-center space-x-1 text-sm font-medium text-rose-500">
  //                     <span>Just shipped v0.1.0</span>
  //                     <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
  //                   </span>
  //                 </a>
  //               </div>
  //               <div className="mt-6 sm:max-w-xl">
  //                 <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
  //                   Your personal media curator
  //                 </h1>
  //                 <p className="mt-6 text-xl text-gray-500">
  //                   Busy day? Let AI do the skimming. Redact serves up daily summaries of articles you'll actually care about.📬
  //                 </p>
  //               </div>
  //               <form action="#" className="mt-12 flex justify-center flex-col sm:flex-row">
  //                 <div className="min-w-0 flex-1">
  //                   <label htmlFor="hero-email" className="sr-only">
  //                     Email address
  //                   </label>
  //                   <input
  //                     id="hero-email"
  //                     type="email"
  //                     value={registerEmail}
  //                     onChange={(e) => setRegisterEmail(e.target.value)}
  //                     className="block w-full rounded-md border border-gray-300 px-5 py-3 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:border-rose-500 focus:ring-rose-500"
  //                     placeholder="Enter your email"
  //                   />
  //                 </div>
  //                 <div className="mt-4 sm:mt-0 sm:ml-3">
  //                   <button
  //                     type="submit"
  //                     onClick={handleSubmit}
  //                     className="block w-full rounded-md border border-transparent bg-rose-500 px-5 py-3 text-base font-medium text-white shadow hover:bg-rose-600 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2 sm:px-10"
  //                   >
  //                     Curate my feed
  //                   </button>
  //                 </div>
  //               </form>
  //               <div className="mt-6">
  //                 <div className="inline-flex items-center divide-x divide-gray-300">
  //                   <div className="flex flex-shrink-0 pr-5">
  //                     <StarIcon className="h-5 w-5 text-yellow-400" aria-hidden="true" />
  //                     <StarIcon className="h-5 w-5 text-yellow-400" aria-hidden="true" />
  //                     <StarIcon className="h-5 w-5 text-yellow-400" aria-hidden="true" />
  //                     <StarIcon className="h-5 w-5 text-yellow-400" aria-hidden="true" />
  //                     <StarIcon className="h-5 w-5 text-yellow-400" aria-hidden="true" />
  //                   </div>
  //                   <div className="min-w-0 flex-1 py-1 pl-5 text-sm text-gray-500 sm:py-3">
  //                     <span className="font-medium text-gray-900">Rated 5 stars</span> by our{' '}
  //                     <span className="font-medium text-rose-500">closest friends :)</span>
  //                   </div>
  //                 </div>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </div>

  //       {/* Testimonial/stats section */}
  //       <div className="">
  //         <div className="lg:mx-auto lg:max-w-7xl lg:items-start lg:px-8">
  //           <div className="relative sm:py-16 lg:py-0">
  //             <div className="relative mx-auto max-w-md px-6 sm:max-w-3xl lg:max-w-none lg:px-0 lg:pb-20">
  //               <div className="relative overflow-hidden rounded-2xl py-10">
  //                 <img
  //                   className="max-h-[50rem] w-auto mx-auto md:block hidden"
  //                   src={ExplainRedact}
  //                   alt=""
  //                 />
  //                 <img
  //                   className="max-h-[50rem] w-auto mx-auto md:hidden"
  //                   src={ExplainRedactMobile}
  //                   alt=""
  //                 />
  //               </div>
  //             </div>
  //           </div>

  //           <div className="relative mx-auto max-w-md px-6 sm:max-w-3xl lg:px-0">
  //             {/* Content area */}
  //             <div>
  //               <h2 className="text-left text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl pb-4">
  //                 A simple idea for your media consumption 💡
  //               </h2>
  //               <div className="mt-6 space-y-6 text-gray-500 text-left">
  //                 <p className="text-lg">
  //                   As consumers we dive into a bunch of media every day.
  //                 </p>
  //                 <p className="text-lg">
  //                   We skim.
  //                 </p>
  //                 <p className="text-lg">
  //                   We read.
  //                 </p>
  //                 <p className="text-lg">
  //                   We search for something useful for us, our business or career.
  //                 </p>
  //                 <p className="text-base leading-7">
  //                   Personally, we found that the skimming part was an easy job for AI agents. So we started having this automation running daily on our favourite sources (mostly hackernews cause we're nerds)
  //                 </p>
  //                 <p className="text-base leading-7">
  //                   Every morning an email is sent to us with the most relevant articles from a bunch of sources.
  //                 </p>
  //                 <p className="text-base leading-7">
  //                   We specify our preferences and Redact knows what to do to make us happy. It also has some weird humor, you need to try it.
  //                 </p>
  //               </div>
  //             </div>

  //             {/* Stats section */}
  //             <div className="mt-10">
  //               <dl className="grid grid-cols-2 gap-x-4 gap-y-8">
  //                 {stats.map((stat) => (
  //                   <div key={stat.label} className="border-t-2 border-gray-100 pt-6">
  //                     <dt className="text-base font-medium text-gray-500">{stat.label}</dt>
  //                     <dd className="text-3xl font-bold tracking-tight text-gray-900">{stat.value}</dd>
  //                   </div>
  //                 ))}
  //               </dl>
  //               <div className="mt-10">
  //                 <a href="#" className="text-base font-medium text-rose-500">
  //                   Join the alpha &rarr;
  //                 </a>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </div>

  //       {/* Logo cloud section */}
  //       <div className="mt-32">
  //         <div className="mx-auto max-w-md px-6 sm:max-w-3xl lg:max-w-7xl lg:px-8">
  //           <div className="lg:grid lg:grid-cols-2 lg:items-center lg:gap-24">
  //             <div>
  //               <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-left">
  //                 For media and influencers 📈
  //               </h2>
  //               <p className="mt-6 max-w-3xl text-lg leading-7 text-gray-500 text-left">
  //                 After working in a media company and running our own medias we found that this could be a game changer for gathering daily inspiration wasting 0 time.
  //               </p>
  //               <div className="mt-6">
  //                 <a href="#" className="text-base font-medium text-rose-500">
  //                   Ask for a b2b offer &rarr;
  //                 </a>
  //               </div>
  //             </div>
  //             <div className="mt-12 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-0 lg:grid-cols-2">
  //               {logos.map((logo) => (
  //                 <div key={logo.name} className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
  //                   <logo.icon className="h-14 w-14" aria-hidden="true" />
  //                 </div>
  //               ))}
  //             </div>
  //           </div>
  //         </div>
  //       </div>

  //       {/* CTA section */}
  //       <div className="relative mt-24 sm:mt-32 sm:py-16">
  //         <div aria-hidden="true" className="hidden sm:block">
  //           <div className="absolute inset-y-0 left-0 w-1/2 rounded-r-3xl bg-gray-50" />
  //           <svg className="absolute top-8 left-1/2 -ml-3" width={404} height={392} fill="none" viewBox="0 0 404 392">
  //             <defs>
  //               <pattern
  //                 id="8228f071-bcee-4ec8-905a-2a059a2cc4fb"
  //                 x={0}
  //                 y={0}
  //                 width={20}
  //                 height={20}
  //                 patternUnits="userSpaceOnUse"
  //               >
  //                 <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
  //               </pattern>
  //             </defs>
  //             <rect width={404} height={392} fill="url(#8228f071-bcee-4ec8-905a-2a059a2cc4fb)" />
  //           </svg>
  //         </div>
  //         <div className="mx-auto max-w-md px-6 sm:max-w-3xl lg:max-w-7xl lg:px-8">
  //           <div className="relative overflow-hidden rounded-2xl bg-rose-500 px-6 py-10 shadow-xl sm:px-12 sm:py-20">
  //             <div aria-hidden="true" className="absolute inset-0 -mt-72 sm:-mt-32 md:mt-0">
  //               <svg
  //                 className="absolute inset-0 h-full w-full"
  //                 preserveAspectRatio="xMidYMid slice"
  //                 xmlns="http://www.w3.org/2000/svg"
  //                 fill="none"
  //                 viewBox="0 0 1463 360"
  //               >
  //                 <path
  //                   className="text-rose-400 text-opacity-40"
  //                   fill="currentColor"
  //                   d="M-82.673 72l1761.849 472.086-134.327 501.315-1761.85-472.086z"
  //                 />
  //                 <path
  //                   className="text-rose-600 text-opacity-40"
  //                   fill="currentColor"
  //                   d="M-217.088 544.086L1544.761 72l134.327 501.316-1761.849 472.086z"
  //                 />
  //               </svg>
  //             </div>
  //             <div className="relative">
  //               <div className="sm:text-center">
  //                 <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
  //                   Start today joining the alpha
  //                 </h2>
  //                 <p className="mx-auto mt-6 max-w-2xl text-lg text-rose-100">
  //                   Insert your email and our agent will guide you through the process of starting using our alpha for Redact
  //                 </p>
  //               </div>
  //               <form action="#" className="mt-12 sm:mx-auto sm:flex sm:max-w-lg">
  //                 <div className="min-w-0 flex-1">
  //                   <label htmlFor="cta-email" className="sr-only">
  //                     Email address
  //                   </label>
  //                   <input
  //                     id="cta-email"
  //                     type="email"
  //                     value={registerEmail}
  //                     onChange={(e) => setRegisterEmail(e.target.value)}
  //                     className="block w-full rounded-md border border-transparent px-5 py-3 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-rose-500"
  //                     placeholder="Enter your email"
  //                   />
  //                 </div>
  //                 <div className="mt-4 sm:mt-0 sm:ml-3">
  //                   <button
  //                     type="submit"
  //                     onClick={handleSubmit}
  //                     className="block w-full rounded-md border border-transparent bg-gray-900 px-5 py-3 text-base font-medium text-white shadow hover:bg-black focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-rose-500 sm:px-10"
  //                   >
  //                     Join the alpha
  //                   </button>
  //                 </div>
  //               </form>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </main>

  //     {/* Footer section */}
  //     <footer className="mt-24 bg-gray-900 sm:mt-12">
  //       <div className="mx-auto max-w-md overflow-hidden py-12 px-6 sm:max-w-3xl lg:max-w-7xl lg:px-8">
  //         <p className="mt-8 text-center text-base text-gray-400">
  //           &copy; 2024 Redact, Inc. All rights reserved.
  //         </p>
  //       </div>
  //     </footer>
  //   </div>
  // );
};

export default LandingPage;
