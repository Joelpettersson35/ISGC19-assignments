
 export interface Params{
    path: string;
    value: string
  }

export interface Book {
    id: number;
    title: string;
    description: string;
    published_year: string;
    author: string;
    category: string;
  }

export interface ErrorMsg{
    status: number
    message: string
}

