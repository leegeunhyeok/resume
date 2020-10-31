export interface BoxProps {
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
}

export type ContentType = 'text' | 'image';
export interface Content {
  type: ContentType;
  data: string;
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
