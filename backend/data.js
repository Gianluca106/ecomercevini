import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Francesco',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'John',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
  products: [
    {
      // _id: '1',
      name: 'Pinot nero',
      slug: 'Pinot nero vino rosso',
      category: 'Vino Rosso',
      image: '/images/p1.jpg', // 679px × 829px
      price: 120,
      countInStock: 10,
      brand: 'Pinot',
      rating: 2.5,
      numReviews: 10,
      description: 'Vino di alta qualità',
    },
    {
      // _id: '2',
      name: 'Sauvignon',
      slug: 'Sauvignon vino bianco',
      category: 'Vino bianco',
      image: '/images/p2.jpg',
      price: 250,
      countInStock: 20,
      brand: 'Sauvignon',
      rating: 5.0,
      numReviews: 10,
      description: 'Vino bianco',
    },
    {
      // _id: '3',
      name: 'Merlot',
      slug: 'Merlot vino rosso',
      category: 'Vino Rosso',
      image: '/images/p3.jpg',
      price: 25,
      countInStock: 15,
      brand: 'Merlot',
      rating: 4.5,
      numReviews: 14,
      description: 'Vino rosso di antichi vitigni',
    },
    {
      // _id: '4',
      name: 'Ribolla gialla',
      slug: 'Ribolla gialla vino bianco',
      category: 'Vino Bianco',
      image: '/images/p4.jpg',
      price: 65,
      countInStock: 5,
      brand: 'Ribolla gialla',
      rating: 3.5,
      numReviews: 10,
      description: 'Vino bianco proveniente da ribolla',
    },
  ],
};
export default data;
