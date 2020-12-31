export interface InputRef {
  getValue(): string;
}

export interface InputData {
  id: string;
  slug: string;
  title: string;
  type: 'text' | 'textarea';
}
