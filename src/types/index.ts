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
}

export interface ActivityData {
  title: string;
  date: string;
  tag: string;
}

export interface Item {
  label: string;
  tag: string;
}

export interface DockPhoto {
  source: string;
  title: string;
}

export interface DockMenu {
  name: string;
  hobby: string[];
  photo: DockPhoto;
}
