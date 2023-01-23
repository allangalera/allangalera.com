export type Experience = {
  company: string;
  type?: string;
  linkedin?: string;
  location: string;
  jobTitles: JobTitles[];
};

export type BaseJobTitle = {
  title?: string;
  skills: string[] | never[];
  description?: string;
};

export type JobPermanence = {
  endDate: string | null;
  startDate: string;
};

export type JobTitles = BaseJobTitle & JobPermanence;
