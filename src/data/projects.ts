export type Project = {
  title: string;
  techs: string[];
  link: string;
  isComingSoon?: boolean;
};

const projects: Project[] = [
  {
    title: "Java Chess",
    techs: ["Java 17", "Java Swing", "Java AWT"],
    link: "https://github.com/Caleb656/JAVA-CHESS",
  },
  {
    title: "Grocery List Manager",
    techs: ["SwiftUI"],
    link: "NA",
    isComingSoon: true
  }
];

export default projects;
