export type ContentType = 'text' | 'image' | 'link';
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
