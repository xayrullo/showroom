import { ICollection } from "./index";
import type { LanguageCode } from "./../utils/constants";

export interface ICategory {
  _id: string;
  name: {
    [key in LanguageCode]: string;
  };
  image: {
    source_url: string;
    alt: string;
  };
  position: number;
  is_main: boolean;
  created_at: string;
}

export interface ICollection {
  _id: string;
  name: {
    [key in LanguageCode]: string;
  };
  image: {
    source_url: string;
    alt: string;
  };
  position: number;
  is_main: boolean;
  created_at: string;
}

export interface IResponse<T> {
  statusCode: number;
  code: number;
  message: string;
  data: T;
}

export interface IPageContent {
  type: string;
  value_url: {
    source_url: string;
    alt: string;
  };
  page_direction: string;
  direction_id: string;
  title: {
    [key in LanguageCode]: string;
  };
  description: {
    [key in LanguageCode]: string;
  };
  _id: string;
}

export interface IGetTheLook {
  image: {
    source_url: string;
    alt: string;
  };
  name: {
    [key in LanguageCode]: string;
  };
  product_ids: string[];
  _id: string;
}

export interface IHome {
  _id: string;
  page_content: IPageContent[];
  category_ids: string[];
  collection_direction: string;
  collection_direction_ids: string[];
  get_the_look: IGetTheLook[];
  created_at: string;
  about_content: {
    source_url: string;
    alt: string;
  };
  collection_background: {
    source_url: string;
    alt: string;
  };
  collection_name: {
    [key in LanguageCode]: string;
  };
  categories: ICategory[];
  collections: ICollection[];
}
