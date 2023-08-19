import type { NextApiRequest, NextApiResponse } from 'next'

const blogContent = [
  {
    image:
      'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
    title: 'Consectetur adipiscing elit',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pellentesque massa eu nibh dapibus, non ornare eros condimentum. Donec in tortor vitae dolor volutpat tempus condimentum sed ante. Donec sit amet mollis nunc. Fusce sodales lectus sit amet ipsum euismod pellentesque. Duis nec purus blandit, varius turpis eu, tincidunt quam. Donec id neque nec nulla vestibulum cursus non vitae purus. Vivamus non diam turpis. Phasellus vitae ante elementum, posuere diam quis, blandit arcu. Ut tincidunt, ex sed cursus mattis, sapien felis eleifend sapien, et convallis purus arcu id sem.',
    author: 'Abil Yunos',
    date: 'May 25, 2023'
  },
  {
    image:
      'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
    title: 'yuh',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pellentesque massa eu nibh dapibus, non ornare eros condimentum. Donec in tortor vitae dolor volutpat tempus condimentum sed ante. Donec sit amet mollis nunc. Fusce sodales lectus sit amet ipsum euismod pellentesque. Duis nec purus blandit, varius turpis eu, tincidunt quam. Donec id neque nec nulla vestibulum cursus non vitae purus. Vivamus non diam turpis. Phasellus vitae ante elementum, posuere diam quis, blandit arcu. Ut tincidunt, ex sed cursus mattis, sapien felis eleifend sapien, et convallis purus arcu id sem.',
    author: 'Abil Yunos',
    date: 'May 25, 2023'
  },
  {
    image:
      'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
    title: 'hmm',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pellentesque massa eu nibh dapibus, non ornare eros condimentum. Donec in tortor vitae dolor volutpat tempus condimentum sed ante. Donec sit amet mollis nunc. Fusce sodales lectus sit amet ipsum euismod pellentesque. Duis nec purus blandit, varius turpis eu, tincidunt quam. Donec id neque nec nulla vestibulum cursus non vitae purus. Vivamus non diam turpis. Phasellus vitae ante elementum, posuere diam quis, blandit arcu. Ut tincidunt, ex sed cursus mattis, sapien felis eleifend sapien, et convallis purus arcu id sem.',
    author: 'Abil Yunos',
    date: 'May 25, 2023'
  },
  {
    image:
      'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
    title: 'title',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pellentesque massa eu nibh dapibus, non ornare eros condimentum. Donec in tortor vitae dolor volutpat tempus condimentum sed ante. Donec sit amet mollis nunc. Fusce sodales lectus sit amet ipsum euismod pellentesque. Duis nec purus blandit, varius turpis eu, tincidunt quam. Donec id neque nec nulla vestibulum cursus non vitae purus. Vivamus non diam turpis. Phasellus vitae ante elementum, posuere diam quis, blandit arcu. Ut tincidunt, ex sed cursus mattis, sapien felis eleifend sapien, et convallis purus arcu id sem.',
    author: 'Abil Yunos',
    date: 'May 25, 2023'
  },
  {
    image:
      'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
    title: 'abil love',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pellentesque massa eu nibh dapibus, non ornare eros condimentum. Donec in tortor vitae dolor volutpat tempus condimentum sed ante. Donec sit amet mollis nunc. Fusce sodales lectus sit amet ipsum euismod pellentesque. Duis nec purus blandit, varius turpis eu, tincidunt quam. Donec id neque nec nulla vestibulum cursus non vitae purus. Vivamus non diam turpis. Phasellus vitae ante elementum, posuere diam quis, blandit arcu. Ut tincidunt, ex sed cursus mattis, sapien felis eleifend sapien, et convallis purus arcu id sem.',
    author: 'Abil Yunos',
    date: 'May 25, 2023'
  }
]

export default function handler (req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    res.status(200).json(blogContent)
  } else {
    res.status(400).json({ message: 'Unsupported method' })
  }
}
