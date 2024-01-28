/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Jad's Portfolio",
  description:
    "A passionate web developer with 3 years of experience building apps to improve lives of organizations, teams and individuals.",
  og: {
    title: "Jad Saad Portfolio",
    type: "website",
    //Todo
    url: "http://ashutoshhathidara.com/",
  },
};

//Home Page
const greeting = {
  title: "Jad Saad",
  logo_name: "JadSaad",
  subTitle:
    "A passionate web developer with 3 years of experience building apps to improve lives of organizations, teams and individuals.",
  resumeLink:
    "https://docs.google.com/document/d/1OgeFKDobyxJNhFUCk39lDBdLuVcYIO4c63Ktkzsx6Bs/edit?usp=sharing",
  portfolio_repository: "https://github.com/jadmsaad/portfolio",
  githubProfile: "https://github.com/jadmsaadaot",
};

const socialMediaLinks = [
  /* Your Social Media Link */

  {
    name: "Github",
    link: "https://github.com/jadmsaadaot",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/jad-m-saad/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:jad.m.saad@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Over 3 years of experience building web applications",
        "⚡ Frontend",
        "⚡ Backend",
        "⚡ Cloud",
      ],
      softwareSkills: [
        {
          skillName: "TypeScript",
          fontAwesomeClassname: "devicon:typescript",
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "devicon:javascript",
        },
        {
          skillName: "React",
          fontAwesomeClassname: "logos:react",
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "logos:python",
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "logos:java",
        },
        {
          skillName: "Nodejs",
          fontAwesomeClassname: "logos:nodejs",
        },
        {
          skillName: "Flask",
          fontAwesomeClassname: "simple-icons:flask",
        },
        {
          skillName: "SpringBoot",
          fontAwesomeClassname: "simple-icons:springboot",
          style: {
            color: "#6CB52C",
          },
        },
        {
          skillName: "Express",
          fontAwesomeClassname: "simple-icons:express",
        },
        {
          skillName: "Angular",
          fontAwesomeClassname: "devicon:angular",
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "devicon:git",
        },
        {
          skillName: "Github Actions",
          fontAwesomeClassname: "devicon:githubactions",
        },
        {
          skillName: "Jest",
          fontAwesomeClassname: "logos:jest",
        },
        {
          skillName: "Cypress",
          fontAwesomeClassname: "devicon:cypressio",
        },
        {
          skillName: "JUnit",
          fontAwesomeClassname: "devicon:junit-wordmark",
        },
        {
          skillName: "C++",
          fontAwesomeClassname: "devicon:cplusplus",
        },
        {
          skillName: "C#",
          fontAwesomeClassname: "devicon:csharp",
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Hosting and maintaining applications on virtual machine instances integrated with database clusters on OpenShift",
        "⚡ AWS Certified",
        "⚡ Lab hands-on experience with AWS Services: IAM, RDS, DynamoDB, Aurora, EFS, AWS Lambda, S3, SNS, Redshift, API Gateway, CodePipeline, EBS",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },

        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
        {
          skillName: "OpenShift",
          fontAwesomeClassname: "logos:openshift",
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/layman_brother/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/layman_brother",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/ashutosh_1919",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "http://codeforces.com/profile/layman_brother",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@ashutosh391",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/laymanbrother",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Concordia University",
      subtitle: "M.Eng Electrical and Computer Engineering",
      logo_path: "concordia-logo.png",
      alt_name: "Concordia",
      duration: "2018 - 2020",
      descriptions: [
        "⚡ Completed my Master's degree with a focus on Communications Engineering and Signal Processing, emphasizing advanced topics" +
          " in Fiber Optic Communication Systems, Digital Video Processing, Higher Layer Telecommunication Protocols and Software Engineering.",
        "⚡ Applied theoretical knowledge to real-world scenarios through hands-on projects, such as " +
          "creating a software application following engineering principals, creating a CDN, and implementing video and image encoding algorithms.",
        "⚡ Developed strong analytical and problem-solving skills through coursework in Probability and Stochastic Processes and Medical Image Processing.",
      ],
      website_link: "https://www.concordia.ca/",
    },
    {
      title: "American University of Science and Technology",
      subtitle: "B.S Computer and Communications Engineering",
      logo_path: "aust-logo.png",
      alt_name: "AUST",
      duration: "2014 - 2018",
      descriptions: [
        "⚡ Obtained a solid foundation in Computer and Communications Engineering, covering essential topics" +
          " like Digital Communication Systems, Wireless Communications, and Computer Networks.",
        "⚡ Applied theoritical knowledge through hands on projects in lab expositions.",
        "⚡ Acquired practical and theoritical skills in Computer Programming and Computer Networks which laid the groundwork for my current role as a software developer.",
      ],
      website_link: "https://www.aust.edu.lb/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Solutions Architect",
      subtitle: "- AWS",
      logo_path: "aws_logo.png",
      certificate_link:
        "https://www.credly.com/badges/430a2909-4970-48b9-bcc8-b73d1eb49675/public_url",
      alt_name: "AWS",
      color_code: "#dd6b10",
    },
    {
      title: "Project Management",
      subtitle: "- Google",
      logo_path: "google_logo.png",
      certificate_link:
        "https://coursera.org/share/023d419dfc5d7171d0b34a8c77490f6d",
      alt_name: "deeplearning.ai",
      color_code: "#0C9D5899",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "",
  description:
    "Full-Stack Developer with 3+ years of professional experience designing, developing, maintaining and testing web applications. I have successfully delivered several applications. I'm an expert in React TypeScript and Python Flask. I'm AWS-certified and project management certified.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Application Developer",
          company: "AOT Technologies",
          company_url: "https://www.linkedin.com/company/aot-technologies",
          logo_path: "aot_technologies_logo.png",
          duration: "Oct 2021 - Present",
          location: "Victoria, British Columbia",
          description:
            "Led the development of the Modern Engagement Tool application to transform B.C.'s public engagement, resulting in improved decision-making, reduced rejected comments, and more valuable data insights." +
            "\n\nLed front-end development in React for the EAO Project Tracker, a modernized project tracker and compliance tool that streamlines workflows and enhances decision-making." +
            "\n\nDeveloped BC Freedom of Information app, cutting processing time, digitizing workflows, and enhancing user experience." +
            "\n\nMentored junior developers, instilling best code practices and emphasizing code reusability; guided them in leveraging existing components, leading to efficient feature development and consistent code quality." +
            "\n\nDeveloped full-stack applications leveraging technologies such as React, Angular, Material UI, Python Flask, PostgreSQL, KeyCloak, Docker and OpenShift.",
          color: "#0879bf",
        },
        {
          title: "Junior Developer",
          company: "KLF Group",
          company_url: "https://www.linkedin.com/company/klf-media-inc./",
          logo_path: "klf_logo.png",
          duration: "Aug 2020 - Sep 2021",
          location: "Montreal, Quebec",
          description:
            "Developed and maintained the in-house warehouse web application, facilitating client interactions, optimizing employee user experience, and streamlining in-house operations." +
            "\n\nCollaborated with managers to investigate and identify solutions to improve user experience efficiency." +
            "\n\nResearched, analyzed, and successfully integrated third-party APIs, expanding the application's capabilities and enhancing overall functionality." +
            "\n\nConducted comprehensive code reviews, ensuring high code quality, identifying weaknesses, and maintaining adherence to coding standards." +
            "\n\nDeveloped full-stack applications, utilizing technologies such as React, Material UI, Java, SpringBoot, PostgreSQL and AWS.",
          color: "#9b1578",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "I have used the latest technology tools to create highly impactful projects.",
  avatar_image_path: "projects_image.svg",
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
};
