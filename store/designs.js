export const state = () => ({
  designs: [
    {
      id: '1',
      label: 'Architect',
      image: '/image/design/architect.svg',
    },
    {
      id: '2',
      label: 'Bubbles',
      image: '/image/design/bubbles.svg',
    },
    {
      id: '3',
      label: 'Falling Triangles',
      image: '/image/design/falling-triangles.svg',
    },
    {
      id: '4',
      label: 'Glamorous',
      image: '/image/design/glamorous.svg',
    },
    {
      id: '5',
      label: 'Happy Intersection',
      image: '/image/design/happy-intersection.svg',
    },
    {
      id: '6',
      label: 'Hideout',
      image: '/image/design/hideout.svg',
    },
    {
      id: '7',
      label: 'Jigsaw',
      image: '/image/design/jigsaw.svg',
    },
    {
      id: '8',
      label: 'Overcast',
      image: '/image/design/Overcast.svg',
    },
    {
      id: '9',
      label: 'Overlapping Circles',
      image: '/image/design/overlapping-circles.svg',
    },
    {
      id: '10',
      label: 'Plus',
      image: '/image/design/plus.svg',
    },
    {
      id: '11',
      label: 'Random Shapes',
      image: '/image/design/random-shapes.svg',
    },
    {
      id: '12',
      label: 'Squares',
      image: '/image/design/squares.svg',
    },
    {
      id: '13',
      label: 'Tic Tac Toe',
      image: '/image/design/tic-tac-toe.svg',
    },
    {
      id: '14',
      label: 'Topography',
      image: '/image/design/topography.svg',
    },
    {
      id: '15',
      label: 'Wiggle',
      image: '/image/design/wiggle.svg',
    },
    {
      id: '16',
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
