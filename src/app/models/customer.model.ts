export interface Customer {
    id: number,
    name: string,
    age: number,
    profile: string
}

export interface CustomerDTO{
  id: number;
  name?: string | null;
  age: number;
}