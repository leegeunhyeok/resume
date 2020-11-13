export interface BoxProps {
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
}

export interface TagData {
  tag: string;
  label: string;
}

export interface ProjectData {
  name: string;
  date: string;
  image: string;
  description: string;
  tag: string[];
  url?: string;
}

export interface ActivityData {
  title: string;
  from: string;
  to?: string;
  tag: string;
}

export interface SocialData {
  icon: string;
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

export interface Template {
  name: string;
  email: string;
  photo: string;
  introduce: string;
  social: SocialData[];
  skill: SkillData[];
  hobby: string[];
  introText: string[];
}
