import { Outlet } from 'react-router-dom';

import Directory from '../../components/directory/directory.component';

const Home = () => {
  const categories = [
    {
      id: 1,
      title: 'TESLA',
      imageUrl: 'https://gscarbuy.com/images/virtuemart/manufacturer/resized/images_400x0.png',
    },
    {
      id: 2,
      title: 'AVATR',
      imageUrl: 'https://gscarbuy.com/images/virtuemart/manufacturer/resized/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202022-11-30%20%D0%B2%2021.28.39_400x0.png',
    },
    {
      id: 3,
      title: 'BYD',
      imageUrl: 'https://gscarbuy.com/images/virtuemart/manufacturer/resized/byd111_400x0.jpg',
    },
    {
      id: 4,
      title: 'GEELY',
      imageUrl: 'https://gscarbuy.com/images/virtuemart/manufacturer/resized/Geely_logo.svg_400x0.png',
    },
    {
      id: 5,
      title: 'LOTUS',
      imageUrl: 'https://gscarbuy.com/images/virtuemart/manufacturer/resized/%E6%9C%AA%E5%91%BD%E5%90%8D_400x0.png',
    },
    {
      id: 6,
      title: 'NIO',
      imageUrl: 'https://gscarbuy.com/images/virtuemart/manufacturer/resized/nio_400x0.jpg',
    },
  ];

  return (
    <div>
      <Directory categories={categories} />
      <Outlet />
    </div>
  );
};

export default Home;