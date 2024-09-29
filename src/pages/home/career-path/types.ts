export interface ICareerPath {
  id: number;
  designation: string;
  duration: string;
  interval: string;
  company: ICompany;
}

export interface ICompany {
  name: string;
  link: string;
  location: string;
  logo: string;
}
