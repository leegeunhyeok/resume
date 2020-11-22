export interface BoxProps {
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
}

export interface TagData {
  id: string;
  color: string;
  label: string;
}

export interface DesktopAppData {
  projects: ProjectTemplate;
  activity: ActivityTemplate;
}

export interface ProjectTemplate {
  tags: {
    [key: string]: TagData[];
  };
  content: ProjectData[];
}

export interface ActivityTemplate {
  tags: {
    [key: string]: TagData[];
  };
  content: ActivityData[];
}

export interface ProjectData {
  name: string;
  date: string;
  image: string;
  description: string;
  textColor?: string;
  tag: string[];
  url?: string;
  star: number;
}

export interface ActivityData {
  title: string;
  from: string;
  to?: string;
  tag: string;
}

export interface SocialData {
  icon?: string;
  label?: string;
  url: string;
}

export interface SkillData {
  color: string;
  label: string;
}

export interface Item {
  label: string;
  tag: string;
}

export interface BaseTemplate {
  name: string;
  email: string;
  photo: string;
  introduce: string;
  social: SocialData[];
  skill: SkillData[];
  hobby: string[];
  introText: string[];
}
