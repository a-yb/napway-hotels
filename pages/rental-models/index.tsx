import type { NextPage } from 'next'
import ReactTooltip from 'react-tooltip'

import ChapterNav from '../../components/ChapterNav'
import NapwayButton from '../../components/NapwayButton'

import type { ChapterNavItem } from '../../types'

const rental_models: ChapterNavItem[] = [
  {
    link: '/rental-models/napway',
    icon: '/static/imgs/icons/Napway.svg',
    label: 'Napway',
  },
  {
    link: '/rental-models/dormy',
    icon: '/static/imgs/icons/Dormy.svg',
    label: 'Dormy',
  },
  {
    link: '/rental-models/flexy',
    icon: '/static/imgs/icons/Flexy.svg',
    label: 'Flexy',
  },
]

const RentalModels: NextPage = () => {
  return (
    <div>
      <ChapterNav models={rental_models} />
      <div className="w-full flex justify-center">
        <NapwayButton disabled={true}>
          <h1>Rent Now</h1>
        </NapwayButton>
      </div>
    </div>
  )
}

export default RentalModels
