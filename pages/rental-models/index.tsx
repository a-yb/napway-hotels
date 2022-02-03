import type { NextPage } from 'next'
import ChapterNav from '../../components/ChapterNav'

import type { ChapterNavItem } from '../../components/ChapterNav/index'

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
      RENTAL MODELS PAGE
    </div>
  )
}

export default RentalModels
