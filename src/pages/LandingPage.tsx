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
        <Hero handleSignUp={handleSignUp} registerEmail={registerEmail} setRegisterEmail={setRegisterEmail} />
        <Sponsors />
        <Features />
        <Cta handleSignUp={handleSignUp} registerEmail={registerEmail} setRegisterEmail={setRegisterEmail} />
        <Testimonials />
        <Pricing />
        <Signup handleSignUp={handleSignUp} registerEmail={registerEmail} setRegisterEmail={setRegisterEmail} />
        <FAQ />
        <Footer />
        <ScrollToTop />
      </div>
    </>
  )
};

export default LandingPage;
