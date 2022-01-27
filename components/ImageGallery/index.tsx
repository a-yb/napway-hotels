import React from 'react'
import ImageGallery from 'react-image-gallery'

type ImageObject = {
  original: string
  thumbnail: string
}

const images: ImageObject[] = [
  {
    original: '/static/imgs/models/dormy/exterior-1.png',
    thumbnail: '/static/imgs/models/dormy/exterior-1_thumbnail.png',
  },
  {
    original: '/static/imgs/models/dormy/exterior-2.png',
    thumbnail: '/static/imgs/models/dormy/exterior-2_thumbnail.png',
  },
  {
    original: '/static/imgs/models/dormy/exterior-3.png',
    thumbnail: '/static/imgs/models/dormy/exterior-3_thumbnail.png',
  },
  {
    original: '/static/imgs/models/dormy/exterior-4.png',
    thumbnail: '/static/imgs/models/dormy/exterior-4_thumbnail.png',
  },
  {
    original: '/static/imgs/models/dormy/exterior-5.png',
    thumbnail: '/static/imgs/models/dormy/exterior-5_thumbnail.png',
  },
  {
    original: '/static/imgs/models/dormy/exterior-6.png',
    thumbnail: '/static/imgs/models/dormy/exterior-6_thumbnail.png',
  },
  {
    original: '/static/imgs/models/dormy/interior-1.png',
    thumbnail: '/static/imgs/models/dormy/interior-1_thumbnail.png',
  },
  {
    original: '/static/imgs/models/dormy/interior-2.png',
    thumbnail: '/static/imgs/models/dormy/interior-2_thumbnail.png',
  },
  {
    original: '/static/imgs/models/dormy/interior-3.png',
    thumbnail: '/static/imgs/models/dormy/interior-3_thumbnail.png',
  },
  {
    original: '/static/imgs/models/dormy/interior-4.png',
    thumbnail: '/static/imgs/models/dormy/interior-4_thumbnail.png',
  },
  {
    original: '/static/imgs/models/dormy/interior-5.png',
    thumbnail: '/static/imgs/models/dormy/interior-5_thumbnail.png',
  },
  {
    original: '/static/imgs/models/dormy/interior-6.png',
    thumbnail: '/static/imgs/models/dormy/interior-6_thumbnail.png',
  },
  {
    original: '/static/imgs/models/dormy/interior-7.png',
    thumbnail: '/static/imgs/models/dormy/interior-7_thumbnail.png',
  },
]

function MyImageGallery() {
  return <ImageGallery items={images} />
}

export default MyImageGallery
