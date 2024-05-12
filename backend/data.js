const mongoose = require('mongoose');
const Course = require('./models/Course');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/dbE', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Sample course data
const courseData = [
  {
    course_name: 'Introduction to Computer Science',
    course_outline: 'This course provides an overview of computer science fundamentals.',
    total_units: 3,
    total_students: 50,
    created_by: new mongoose.Types.ObjectId('6070d0c1234567890abcdef0'), // Replace with a valid ObjectId
    active: true,
    cKey: true,
  },
  {
    course_name: 'Data Structures and Algorithms',
    course_outline: 'This course covers the fundamental data structures and algorithms used in computer science.',
    total_units: 4,
    total_students: 30,
    created_by: new mongoose.Types.ObjectId('6070d0c1234567890abcdef1'), // Replace with a valid ObjectId
    active: true,
    cKey: true,
  },
  {
    course_name: 'Web Development Fundamentals',
    course_outline: 'This course introduces the basics of web development, including HTML, CSS, and JavaScript.',
    total_units: 2,
    total_students: 75,
    created_by: new mongoose.Types.ObjectId('6070d0c1234567890abcdef2'), // Replace with a valid ObjectId
    active: true,
    cKey: true,
  },
  {
    course_name: 'Database Systems',
    course_outline: 'This course covers the design, implementation, and management of database systems.',
    total_units: 3,
    total_students: 40,
    created_by: new mongoose.Types.ObjectId('6070d0c1234567890abcdef3'), // Replace with a valid ObjectId
    active: true,
    cKey: true,
  },
  {
    course_name: 'Mobile App Development',
    course_outline: 'This course focuses on the development of mobile applications for popular platforms.',
    total_units: 4,
    total_students: 60,
    created_by: new mongoose.Types.ObjectId('6070d0c1234567890abcdef4'), // Replace with a valid ObjectId
    active: true,
    cKey: true,
  },
];

// Insert the sample data into the database
Course.insertMany(courseData)
  .then((courses) => {
    console.log('Courses inserted:', courses);
    mongoose.connection.close();
  })
  .catch((error) => {
    console.error('Error inserting courses:', error);
    mongoose.connection.close();
  });