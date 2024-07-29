import ExplainRedact from '../assets/explain-redact.png';
import ExplainRedactMobile from '../assets/explain-redact-mobile.png';

export const HowItWorks = () => {

  return (
    <div className="relative">
      <div className="relative overflow-hidden rounded-2xl">
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
  )
}
