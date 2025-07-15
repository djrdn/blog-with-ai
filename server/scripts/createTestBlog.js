import connectDB from '../configs/db.js';
import Blog from '../models/Blog.js';

const createTestBlog = async () => {
  await connectDB();

  const newBlog = new Blog({
    title: 'Перша публікація',
    subTitle: 'Підзаголовок',
    description: 'Це опис мого першого блогу',
    category: 'Новини',
    image: 'https://example.com/image.jpg',
    isPublished: true,
  });

  await newBlog.save();
  console.log('Блог створено і збережено в базі');
  process.exit(0);
};

createTestBlog();