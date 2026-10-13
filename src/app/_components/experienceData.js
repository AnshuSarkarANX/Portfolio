// Single source of truth for the Experience section.
// Consumed by both the mobile accordion (WorkExAccordian) and the
// desktop scroll slider (WorkEx) — edit here, both update.

export const experiences = [
  {
    id: "webaxd",
    group: "internships",
    title: "Frontend Developer Intern - WEBAXD",
    duration: "Jun - Aug, 2024",
    present: false,
    points: [
      "Developed a Javascript algorithm to improve the loading speed by 90%",
      "Designed and implemented new features for better user experience",
      "Successfully delivered multiple projects",
    ],
  },
  {
    id: "pearl",
    group: "internships",
    title: "Frontend Developer Intern  - Pearl Thoughts",
    duration: "Oct - Nov, 2024",
    present: false,
    points: [
      "Built a Doctor’s Appointment oooo Booking app with an intuitive, user-friendly UI.",
      "Implemented full CRUD functionality for appointments using REST APIs.",
      "Enhanced user experience with a responsive and seamless interface.",
    ],
  },
  {
    id: "cvdragon",
    title: "Frontend Developer - cvDragon",
    duration: "Dec, 2024 - Jan, 2026",
    present: false,
    className: "lg:w-[min(75vw,1200px)]",
    points: [
      "Built an event management system with dynamic forms, supporting multi-user registration, payment gateway integration, and automated ticket generation",
      "Developed a centralised task system replacing manual email workflows, enabling instant CSV report generation and reducing processing time from months to seconds",
      "Built a multi-role Upasak system handling allocation across 400+ Sabhas through admin-controlled workflows",
      "Developed a bulk messaging feature to send targeted messages to up to 2000 users with push notifications using OneSignal",
      "Worked on a hotel management system including inventory interfaces and CSV-based data migration tools",
    ],
  },
  {
    id: "pephub",
    title: "Software Development Engineer - PepHub Consultancy",
    duration: "Feb - Sep, 2026",
    present: false,
    className: "lg:w-[80vw]",
    points: [
      "Developed a community-driven platform that enables users to create groups, organize events, manage participation, and coordinate activities through a centralized workflow",
      "Developed scalable REST APIs, JWT-based authentication, database models using Prisma ORM, and business workflows supporting e-commerce operations and customer account management",
      "Implemented performance optimizations, including virtualization and reusable UI patterns, to improve rendering efficiency and user experience when handling large datasets",
    ],
  },
];

// Buckets experiences by `group` so entries sharing a group render inside a
// single slider column. Entries without a group each become their own column.
export const experienceColumns = experiences.reduce((columns, experience) => {
  const key = experience.group ?? experience.id;
  (columns[key] ??= []).push(experience);
  return columns;
}, {});