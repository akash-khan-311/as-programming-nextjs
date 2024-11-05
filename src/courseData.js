const courses = [
  {
    title: "Web Design and Development",
    category: "Design",
    description:
      "Explore the essentials of web design and development, covering HTML, CSS, and responsive design techniques. Ideal for aspiring web developers, this course equips you with the skills to create visually appealing and functional websites optimized for various devices and browsers.",
    price: 5000,
    duration: 5,
    level: "Beginner",
    img: "https://i.ibb.co/RP15Fpj/Screenshot-2.png",
    status: "Approved",
    instructor: {
      name: "Akash Khan",
      email: "hokito7672@atebin.com",
      avatar: null,
    },
  },
  {
    title: "Digital Marketing Essentials",
    category: "Marketing",
    description:
      "Discover the key strategies and tools of digital marketing, including SEO, SEM, social media marketing, and email campaigns. Learn how to effectively reach and engage your target audience, drive traffic, and convert leads into customers in the dynamic digital landscape.",
    price: 3000,
    duration: 4,
    level: "Beginner",
    img: "https://i.ibb.co/5rmQHJ3/images.jpg",
    status: "Approved",
    instructor: {
      name: "Akash Khan",
      email: "hokito7672@atebin.com",
      avatar: null,
    },
  },
  {
    title: "Graphic Design Mastery",
    category: "Graphics Design",
    description:
      "Embark on a creative journey with our Graphic Design Mastery course. This course is tailored for aspiring graphic designers who want to turn their creativity into a professional skill. Starting with the basics of design principles and color theory, you'll learn how to create visually appealing and effective designs. The course extensively covers industry-standard tools like Adobe Photoshop, Illustrator, and InDesign, providing you with the skills needed to handle any design project. You'll explore various design techniques, from logo creation to complex layouts for print and digital media. Throughout the course, you'll work on real-world projects that will help you build a professional portfolio. Our experienced instructors will provide personalized feedback and guidance to help you refine your skills. By the end of this course, you'll be ready to tackle any graphic design challenge with confidence.",
    price: 25000,
    duration: 8,
    level: "Advanced",
    img: "https://i.ibb.co/K9hrvNn/maxresdefault.jpg",
    status: "Approved",
    instructor: {
      name: "Akash Khan",
      email: "hokito7672@atebin.com",
      avatar: null,
    },
  },
  {
    title: "Advanced Java Programming",
    category: "Programming",
    description:
      "Elevate your Java programming skills with our Advanced Java Programming course. This course is designed for developers who already have a basic understanding of Java and want to delve deeper into its advanced features. You'll start by revisiting core concepts to ensure a solid foundation before moving on to more complex topics. Learn about multithreading and concurrency to write efficient and high-performance applications. Explore networking in Java to create networked applications and understand how to work with databases using JDBC. The course also covers design patterns and best practices, ensuring your code is robust and maintainable.",
    price: 15000,
    duration: 7,
    level: "Advanced",
    img: "https://i.ibb.co/806q57N/What-is-Advance-JAVA.png",
    status: "Approved",
    instructor: {
      name: "Akash Khan",
      email: "hokito7672@atebin.com",
      avatar: null,
    },
  },
  {
    title: "Python for Cybersecurity",
    category: "Cyber Security",
    description:
      "This comprehensive course equips you with the knowledge and tools to navigate the world of ethical hacking using Python. You'll delve into network security concepts, exploring vulnerabilities in systems and learning how to identify and exploit them responsibly using Python libraries. The course covers techniques like web scraping, penetration testing, and social engineering simulations, all within a legal and ethical framework. By the end, you'll gain a deeper understanding of cybersecurity threats and how to mitigate them using Python's powerful capabilities.",
    price: 16000,
    duration: 7,
    level: "Advanced",
    img: "https://i.ibb.co/98yR3MR/Benefits-of-Python-for-Cybersecurity.jpg",
    status: "Approved",
    instructor: {
      name: "Akash Khan",
      email: "hokito7672@atebin.com",
      avatar: null,
    },
  },
  {
    title: "Build Your First Game with Python (Pygame)",
    category: "Game Development",
    description:
      "Get hands-on experience creating a simple 2D game using the Pygame library. Learn game development concepts and apply Python programming skills in a fun way.",
    price: 20000,
    duration: 7,
    level: "Beginner",
    img: "https://i.ibb.co/xmm8SWh/How-To-Get-Started-In-Game-Development.png",
    status: "Approved",
    instructor: {
      name: "Akash Khan",
      email: "hokito7672@atebin.com",
      avatar: null,
    },
  },
  {
    title: "Web Development with JavaScript and React",
    category: "Programming",
    description:
      "This course propels you into the world of front-end web development using JavaScript, the ubiquitous language that powers web interactivity, and React, a popular JavaScript library for building dynamic user interfaces.",
    price: 12000,
    duration: 5,
    level: "Intermediate",
    img: "https://i.ibb.co/J3KrsR9/banner-webp-da06d145-93f9-4df9-8c7e-1e2c332c3a4a.webp",
    status: "Approved",
    instructor: {
      name: "Akash Khan",
      email: "hokito7672@atebin.com",
      avatar: null,
    },
  },
  {
    title: "Build Modern Web Apps with Next js",
    category: "Web Design",
    description:
      "This course dives deep into Next.js, a powerful framework built on top of React that simplifies building modern and performant web applications. You'll learn how to leverage Next.js features to create fast, SEO-friendly, and scalable web experiences.",
    price: 3500,
    duration: 4,
    level: "Beginner",
    img: "https://i.ibb.co/w0J8vgq/1-Qv-BBMu-Ht-WJJcsu7-Lxg-Ymfw.webp",
    status: "Approved",
    instructor: {
      name: "Akash Khan",
      email: "hokito7672@atebin.com",
      avatar: null,
    },
  },
  {
    title: "SEO Fundamentals",
    category: "Marketing",
    description:
      "Learn the fundamentals of SEO (Search Engine Optimization) and how to apply it to improve your website's visibility and ranking on search engines. This course is designed for beginners and covers everything from keyword research to on-page and off-page optimization, technical SEO, and analytics. By the end of the course, you'll have a solid understanding of SEO principles and practical skills to implement SEO strategies effectively.",
    price: 15000,
    duration: 5,
    img: "https://i.ibb.co/G2VL5vz/1695344262163.jpg",
    status: "Approved",
    instructor: {
      name: "Akash Khan",
      email: "hokito7672@atebin.com",
      avatar: "https://i.ibb.co/F8mWrZ9/my-Photo-ai2to-Yhk.png",
    },
    level: "Beginner",
  },
  {
    title: "Web Development Bootcamp",
    category: "Web Development",
    description:
      "This Web Development Bootcamp is a comprehensive program designed to equip you with the skills and knowledge to become a proficient web developer. Whether you are a beginner or looking to advance your skills, this bootcamp covers everything you need to know about web development, from front-end to back-end technologies.",
    price: 13000,
    duration: 6,
    level: "Beginner",
    img: "https://i.ibb.co/CMBRTZs/Complete-Web-Development-Bootcamp.webp",
    status: "Approved",
    instructor: {
      name: "Akash Khan",
      email: "hokito7672@atebin.com",
      avatar: "https://i.ibb.co/F8mWrZ9/my-Photo-ai2to-Yhk.png",
    },
  },
  {
    title: "WordPress Development Course",
    category: "Web Development",
    description:
      "WordPress is an excellent open-source platform.  It is the simplest and most popular way for businesses to create quality websites. WordPress development is the building and maintenance of WordPress websites.\n\nAs of 2022, there are around 1.3 billion websites on the internet. Out of these, there are currently 708 million sites that use WordPress. With over 2 million downloads every year, this number is expected to grow exponentially.\n\nThough WordPress development was initially only meant for blogging and online publishing, businesses can adapt WordPress to build various websites.\n\nLet’s learn why so many websites choose WordPress over other alternatives.",
    price: 15000,
    duration: 6,
    level: "Beginner",
    img: "https://i.ibb.co/80vhXBR/2-8.jpg",
    status: "Approved",
    instructor: {
      name: "Akash Khan",
      email: "hokito7672@atebin.com",
      avatar: "https://i.ibb.co/F8mWrZ9/my-Photo-ai2to-Yhk.png",
    },
  },
];

export const getCourses = () => {
  return courses;
};

export const getCourseById = (id) => {
  const course = courses.find((course) => course._id === id);
  return course;
};
