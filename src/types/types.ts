export interface IDataEntries {
  columns: string[];
  data: IPerson[] | undefined;
}

export interface IPerson {
  id: string;
  firstName: string;
  lastName: string;
  city: string;
}
