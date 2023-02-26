import type { ExperienceTypesOptions } from "@/modules/resume/constants";

export type ExperienceTypes =
  (typeof ExperienceTypesOptions)[keyof typeof ExperienceTypesOptions];

export type BaseJobTitle = {
  title: string;
  skills: string[] | never[];
  description?: string;
  location: string;
};

export type JobPermanence = {
  endDate?: Date;
  startDate: Date;
};

export type JobTitles = BaseJobTitle & JobPermanence;

export type Experience = {
  company: string;
  type?: ExperienceTypes;
  linkedin?: string;
  jobTitles: JobTitles[];
};
