export const state = () => ({
  designs: [
    {
      id: '1',
      label: 'Bubbles',
      image: '/image/design/bubbles.svg',
    },
    {
      id: '2',
      label: 'Leaf',
      image: '/image/design/leaf.svg',
    },
    {
      id: '3',
      label: 'Glamorous',
      image: '/image/design/glamorous.svg',
    },
    {
      id: '4',
      label: 'Happy Intersection',
      image: '/image/design/happy-intersection.svg',
    },
    {
      id: '5',
      label: 'Hideout',
      image: '/image/design/hideout.svg',
    },
    {
      id: '6',
      label: 'Jigsaw',
      image: '/image/design/jigsaw.svg',
    },
    {
      id: '7',
      label: 'Overcast',
      image: '/image/design/Overcast.svg',
    },
    {
      id: '8',
      label: 'Overlapping Circles',
      image: '/image/design/overlapping-circles.svg',
    },
    {
      id: '9',
      label: 'Plus',
      image: '/image/design/plus.svg',
    },
    {
      id: '10',
      label: 'Random Shapes',
      image: '/image/design/random-shapes.svg',
    },
    {
      id: '11',
      label: 'Squares',
      image: '/image/design/squares.svg',
    },
    {
      id: '12',
      label: 'Tic Tac Toe',
      image: '/image/design/tic-tac-toe.svg',
    },
    {
      id: '13',
      label: 'Topography',
      image: '/image/design/topography.svg',
    },
    {
      id: '14',
      label: 'Wiggle',
      image: '/image/design/wiggle.svg',
    },
    {
      id: '15',
      label: 'X Equals',
      image: '/image/design/x-equals.svg',
    },
  ],
})

export const getters = {
  DESIGNS(state) {
    return state.designs
  },
}
