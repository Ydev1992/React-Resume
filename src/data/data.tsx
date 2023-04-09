import {
  AcademicCapIcon,
  CalendarIcon,
  DownloadIcon,
  FlagIcon,
  MapIcon,
  OfficeBuildingIcon,
  SparklesIcon,
} from '@heroicons/react/outline';

// import GithubIcon from '../components/Icon/GithubIcon';
// import InstagramIcon from '../components/Icon/InstagramIcon';
// import LinkedInIcon from '../components/Icon/LinkedInIcon';
// import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
// import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';
//import EmailIcon from '../components/Icon/EmailIcon';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Software engineer',
  description: "Portfolio site built with James Tomas",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = typeof SectionId[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm James Tomas.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        <strong  className="text-stone-100">Senior blockchain developer</strong>  with 5+ years of experience
        in developing decentralized applications using Solidity, Rust
        Ethereum, and Hyperledger Fabric.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
      Strong technical skills combined with the ability to effectively communicate with cross-functional teams.
      <br />
      <strong className = "text-stone-100">Passionate about developing innovative blockchain solutions that drive business growth.</strong>
      </p>
    </>
  ),
  actions: [
    {
      href: 'https://drive.google.com/file/d/1Qd5SDviNjM4Ht1PrwDxcr4Y6Dr54bcDS/view?usp=share_link',
      text: 'Resume',
      primary: true,
      Icon: DownloadIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `With an entrepreneurial mindset and passion for creating cohesive, engaging experiences over 7 years. Enjoy contributing to all aspects of product creation, while being closely embedded in a team, or positioned as a sole contributor.`,
  aboutItems: [
    {label: 'Location', text: 'Winnipeg, Canada', Icon: MapIcon},
    {label: 'Age', text: '28', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Canadian / Japanese', Icon: FlagIcon},
    {label: 'Interests', text: 'Motorcycles, Squash, Banjos', Icon: SparklesIcon},
    {label: 'Study', text: 'University of Winnipeg', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Instant Domains, inc.', Icon: OfficeBuildingIcon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 8,
      },
      {
        name: 'Japanese',
        level: 4,
      },
      {
        name: 'French',
        level: 3,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 10,
      },
      {
        name: 'Typescript',
        level: 9,
      },
      {
        name: 'GraphQL',
        level: 8,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 10,
      },
      {
        name: 'Django',
        level: 9,
      },
      {
        name: 'Golang',
        level: 7,
      },
    ],
  },
  {
    name: 'Smart Contract',
    skills: [
      {
        name: 'Solidity',
        level: 10,
      },
      {
        name: 'Rust',
        level: 9,
      },
      {
        name: 'Golang',
        level: 7,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  // {
  //   title: 'Project title 1',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://timbaker.me',
  //   image: porfolioImage1,
  // },
  {
    title: 'tofuNft Marketplace',
    description: "TofuNFT Marketplace is a digital platform for buying and selling unique non-fungible tokens (NFTs) that are inspired by Japanese culture, specifically tofu. The platform provides a secure and user-friendly interface for creators to list their NFTs for sale and for buyers to purchase them using cryptocurrency.",
    url: 'https://tofunft.com/',
    image: porfolioImage2,
  },
  {
    title: 'MOMENTEUM swap',
    description: "MOMENTEUM Swap's primary feature is its automated market maker (AMM) algorithm, which ensures liquidity for even the most obscure trading pairs. Users can also add liquidity to the platform and earn rewards in the form of MOMENT tokens, which can be used for trading or staking on the platform.",
    url: 'https://momenteum.app/',
    image: porfolioImage3,
  },
  // {
  //   title: 'Project title 4',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://timbaker.me',
  //   image: porfolioImage4,
  // },
  {
    title: 'Front-End Project',
    description: "The front-end includes features such as a dashboard displaying current trends in innovation, a directory of startups and entrepreneurs, and a library of resources that can be filtered by topic.",
    url: 'https://innovaccion.app/',
    image: porfolioImage5,
  },
  // {
  //   title: 'Project title 6',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://timbaker.me',
  //   image: porfolioImage6,
  // },
  // {
  //   title: 'Project title 7',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://timbaker.me',
  //   image: porfolioImage7,
  // },
  {
    title: 'Full-Stack Project',
    description: "We built Gameplan Apps to replace outdated methods of personal training and fitness course creation, for influencers, coaches, and trainers.To make fitness efficient.Our purpose at Gameplan Apps is to help influencers, trainers, and coaches reach new clients, build stronger relationships with their existing ones, and grow their revenue.",
    url: 'https://www.gameplanapps.com/',
    image: porfolioImage10,
  },
  {
    title: 'AXIE Marketplace',
    description: "The Axie Infinity Marketplace is a web-based platform that enables users to buy, sell, and trade Axies, the digital creatures used in the popular blockchain-based game Axie Infinity. The marketplace provides various features, including filters to sort Axies by rarity, level, breed, and other attributes, making it easy for users to find the perfect Axie to fit their needs.",
    url: 'https://app.axieinfinity.com/',
    image: porfolioImage8,
  },
  // {
  //   title: 'Project title 9',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://timbaker.me',
  //   image: porfolioImage9,
  // },
  {
    title: 'Stacking Project',
    description: 'KuCoin Staking is a platform that allows users to earn rewards for holding certain cryptocurrencies on the KuCoin exchange. The staking service provides users with an opportunity to earn passive income by participating in the validation of transactions on the blockchain network of supported coins, such as Polkadot (DOT), Cosmos (ATOM), and Tezos (XTZ). ',
    url: 'https://www.kucoin.com/staking',
    image: porfolioImage11,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'September 2012 - May 2016',
    location: 'Winnipeg, Manitoba',
    title: 'COMPUTER SCIENCE',
    content: <p>My experience at the <strong className = "text-stone-900">University of Winnipeg</strong>
      was challenging, rewarding, and equipped me with the knowledge and skills necessary to pursue a career
      in computer science with confidence.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'March 2010 - Present',
    location: 'Awesome Development Company',
    title: 'Senior UX Engineer',
    content: (
      <p>
        Describe work, special projects, notable achievements, what technologies you have been working with, and
        anything else that would be useful for an employer to know.
      </p>
    ),
  },
  {
    date: 'March 2007 - February 2010',
    location: 'Garage Startup Studio',
    title: 'Junior bug fixer',
    content: (
      <p>
        Describe work, special projects, notable achievements, what technologies you have been working with, and
        anything else that would be useful for an employer to know.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Aaron Hill',
      text: ' James is senior developer with comments on the quality of code written, ability to troubleshoot and solve complex technical problems, depth of knowledge in relevant technologies, and overall efficiency of work',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Henry Scott',
      text: 'James contributions to group projects or problem-solving, willingness to share knowledge and expertise with others. As well as provides constructive criticism and feedback to team members.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Client',
      text: 'James is a passionate learner who is always sensitive to new technologies and is not afraid to learn new technology, ignoring all experiences for better solutions.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: "Have a project for me? Any questions about something I've built? I'd love to hear from you, give me a shout by email or by using the form below if you'd like to get in contact with me.",
  items: [
    {
      type: ContactType.Email,
      text: 'flyn.rider0x@gmail.com',
      href: 'mailto:flyn.rider0x@gmail.me',
    },
    {
      type: ContactType.Location,
      text: 'Winnipeg, Manitoba, Canada',
      href: 'https://www.google.ca/maps/place/Winnipeg,+MB+R3C+4T6,+Canada/@49.8871837,-97.1314859,18z/data=!4m6!3m5!1s0x52ea714dd4ddd633:0x806e02a270afb160!8m2!3d49.8866758!4d-97.1306036!16s%2Fg%2F1tf653xr',
    },
    // {
    //   type: ContactType.Instagram,
    //   text: '@tbakerx',
    //   href: 'https://www.instagram.com/tbakerx/',
    // },
    {
      type: ContactType.Github,
      text: 'olaf119',
      href: 'https://github.com/olaf119',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  //{label: 'Github', Icon: GithubIcon, href: 'https://github.com/olaf119'},
  //{label: 'Email', Icon: EmailIcon, href: ''},
  //{label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/8553186/tim-baker'},
  //{label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/timbakerx/'},
  //{label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/tbakerx/'},
  //{label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/TimBakerx'},
];
