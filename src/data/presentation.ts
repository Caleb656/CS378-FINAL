type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
  profile?: string;
};

const presentation: Presentation = {
  mail: "CalebSteinman@live.com",
  title: "Hi, I’m Caleb 👋",
  // profile: "/profile.webp",
  description:
    "I am currently studying Computer Science at Eastern Washington University. I am in my senior year and currently working as a Software Engineer Intern at Schweitzer Engineering Laboratories. When I am not learning about new technologies, I enjoy playing video games, reading, practicing guitar, and watching good TV shows and movies. The posts attached to this website will be about the good shows and movies I have watched recently.",
  socials: [
    {
      label: "Github",
      link: "https://github.com/Caleb656",
    },
    {
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/caleb-steinman-820437208",
    },
  ],
};

export default presentation;
