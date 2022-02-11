import React from 'react'
import ChapterNav from '../../components/ChapterNav'

import { ChapterNavItem } from '../../types'

const models_for_sale: ChapterNavItem[] = [
  {
    link: '/models-for-sale/model-1',
    icon: '/static/imgs/icons/tinyhouse-model-1.png',
    label: 'Model 1',
  },
  {
    link: '/models-for-sale/model-2',
    icon: '/static/imgs/icons/tinyhouse-model-2.png',
    label: 'Model 2',
  },
]

function ModelsForSale() {
  return (
    <div>
      <ChapterNav models={models_for_sale} />
    </div>
  )
}

export default ModelsForSale
