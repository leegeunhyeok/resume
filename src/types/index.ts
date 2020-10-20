export type ContentType = 'text' | 'image' | 'link';
export type AppType = ListApp | PageApp | LinkApp;

export interface Content {
  type: ContentType;
  data: string;
}

export interface ListItem {
  tag?: string;
  title: string;
}

export interface List {
  group?: string;
  title: string;
  tag?: string;
  content: Content[];
}

interface App {
  type: string;
  name: string;
  icon: string;
}

export interface ListApp extends App {
  type: 'list';
  items: List[];
}

export interface PageApp extends App {
  type: 'page';
  content: Content[];
}

export interface LinkApp extends App {
  type: 'link';
  url: string;
}

interface DockMemo {
  title: string;
  content: string;
}

interface DockPhoto {
  source: string;
  title: string;
}

export interface DockMenu {
  memo?: DockMemo;
  hobby: string[];
  photo: DockPhoto;
}
