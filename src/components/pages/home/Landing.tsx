import { motion } from 'framer-motion'

import './styles/landing.scss';

const quotes = [
  {
    headline: 'We know what happened to organized religion in the wake of the Gunpowder Revolution',
    secondary: 'Technological developments created strong incentives to downsize religious institutions and lower their costs'
  },
  {
    headline: 'Cognitive skills will be rewarded as never before',
    secondary: 'It will be more important to think clearly, as ideas will become a form of wealth'
  },
  {
    headline: 'Those without savings',
    secondary: 'who rely upon government to pay their retirement benefits and medical care will in all probability suffer a fall in living standards'
  },
  {
    headline: 'A close analogy with attempts by the government today to suppress encryption technology',
    secondary: 'The Church attempted to suppress the printing press, most of the new volumes were published in those areas of Europe where the writ of established authority was the weakest'
  }
]

const Landing: React.FC = () => {

  return (
    <div id="landing-view" className="block">
      <div id='bushido-quote-container'>
        <motion.h1 
          id='headline'
          initial={{ y: -500 }}
          animate={{ y: 0 }}
          transition={{
            duration: 2,
            ease: 'easeInOut',
            type: 'spring'
          }}
        >
          { quotes[1].headline }
        </motion.h1>
        <motion.h5 
          id='secondary'
          initial={{ y: 700 }}
          animate={{ y: 0 }}
          transition={{
            duration: 1,
            ease: 'easeInOut',
            type: 'spring'
          }}
        >
        { quotes[1].secondary }
        </motion.h5>
      </div> 
      <div className="custom-shape-divider-bottom-1649918002">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="shape-fill"></path>
        </svg>
      </div>
    </div>
  )
}

export default Landing;