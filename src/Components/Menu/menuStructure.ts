const menuStructure: MenuItem[] = [
  {
    text: 'blog',
    route: '/blog',
    subItems: [
      {
        text: 'tech',
        route: '/category/technology'
      },
      {
        text: 'music',
        route: '/category/music'
      },
      {
        text: 'gaming',
        route: '/category/gaming'
      },
      {
        text: 'fitness',
        route: '/category/fitness'
      }
    ]
  },
  {
    text: 'about',
    route: '/about'
  },
  {
    text: 'music',
    route: '/music'
  },
  {
    text: 'gaming',
    route: '/gaming'
  },
  {
    text: 'contact',
    route: '/contact'
  }
];

export default menuStructure;
