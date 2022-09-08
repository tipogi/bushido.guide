import { motion, useMotionValue } from 'framer-motion';
import { quotes } from '~/constants/bushido';

interface IQuoutesProps {
  dotNumber: number
}

const h1Animation = {
  animate:{ y: 0 },
  transition: {
    duration: 1,
    ease: 'easeInOut',
    type: 'spring'
  }
}

const h5Animation = {
  animate:{ x: 0 },
  transition: {
    duration: 1,
    ease: 'easeInOut',
    type: 'spring'
  }
}

export default function Quotes({ dotNumber }: IQuoutesProps) {

  const renderQuotes = () => {
    return quotes.map(({ headline, secondary}, index) => {
      const selectedDot = dotNumber === index;
      const motionH1Props = {
        id: 'headline',
        initial: { y: -1500 }
            
      }
      const motionH5Props = {
        id: 'secondary',
        initial: { x: -2500 }
      }
      if (selectedDot) {
        Object.assign(motionH1Props, h1Animation);
        Object.assign(motionH5Props, h5Animation)
      }
      
      return (
        <div key={`quote-${index}`} id='quote-container'>
          <motion.h1 {...motionH1Props }>
            { headline }
          </motion.h1>
          <motion.h5 { ...motionH5Props }>
            { secondary }
          </motion.h5>
        </div>
      )
    })
  }


  return (
    <div id='quotes-block'>
      { renderQuotes() }
    </div>
  )
  
}