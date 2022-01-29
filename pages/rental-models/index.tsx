import type { NextPage } from 'next'
import ChapterNav from '../../components/ChapterNav'

import type { ChapterNavItem } from '../../components/ChapterNav/index'

const rental_models: ChapterNavItem[] = [
  {
    link: '/rental-models/napway',
    icon: '/static/imgs/icons/tiny-house.png',
    label: 'Napway',
  },
  {
    link: '/rental-models/dormy',
    icon: '/static/imgs/icons/tiny-house-1.png',
    label: 'Dormy',
  },
  {
    link: '/rental-models/nature',
    icon: '/static/imgs/icons/tiny-house-2.png',
    label: 'Nature',
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
