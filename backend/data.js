import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Chandrashekhar',
      email: 'mechn1423@gmail.com',
      password: bcrypt.hashSync('1423'),
      isAdmin: true,
    },
    {
      name: 'Jonny',
      email: 'jonny@gmail.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
  products: [
    {
      //_id: '1',
      name: 'Nike Slim shirt',
      slug: 'nike-slim-shirt',
      category: 'Shirts',
      image: '/images/p1.jpg', // 679px x 829px
      price: 120,
      countInStock: 10,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality shirt',
    },
    {
      //_id: '2',
      name: 'Adidas fit shirt',
      slug: 'adidas-fit-shirt',
      category: 'Shirts',
      image: '/images/p2.jpg',
      price: 125,
      countInStock: 20,
      brand: 'Adidas',
      rating: 4.0,
      numReviews: 10,
      description: 'high quality products',
    },
    {
      // _id: '3',
      name: 'Nike Slim Pant',
      slug: 'nike-slim-pant',
      category: 'Pants',
      image: '/images/p3.jpg',
      price: 330,
      countInStock: 0,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 14,
      description: 'high quality product',
    },
    {
      //_id: '4',
      name: 'Adidas Slim Pant',
      slug: 'adidas-slim-pant',
      category: 'Pants',
      image: '/images/p4.jpg',
      price: 47,
      countInStock: 10,
      brand: 'Puma',
      rating: 4.2,
      numReviews: 10,
      description: 'high quality product',
    },
  ],
};

export default data;
