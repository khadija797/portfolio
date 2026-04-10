import profile from './profile.png'
import linkedin_icon from './linkedin_icon.png'
import twitter_icon from './twitter_icon.png'
import project_1 from './project_1.jpeg'
import project_2 from './project_2.png'
import project_3 from './project_3.png'
import project_4 from './project_4.png'
import project_5 from './project_5.png'

export const assets = {
  profile,
  linkedin_icon,
  twitter_icon,
}

export const projects = [
  {
    id: 1,
    image: project_1,
    title: "Portfolio Website",
    desc: "Personal portfolio built with React",
  },
  {
    id: 2,
    image: project_2,
    title: "Lolo & Popo",
    desc: "Modern shopping interface",
    link: "https://toys-store-react-frontend.vercel.app/"
  },
  {
    id: 3,
    image: project_3,
    title: "Xpenso",
    desc: "Expense Tracker App",
    link: "https://xpenso-wheat.vercel.app/"
  },
  {
    id: 4,
    image: project_4,
    title: "Flexify",
    desc: "Costume Store UI",
    link: "https://flexify-snowy.vercel.app/"
  },
  {
    id: 5,
    image: project_5,
    title: "Findish",
    desc: "Food Recipe Finder",
    link: "https://food-recipe-finder-vert.vercel.app/"
  },
];