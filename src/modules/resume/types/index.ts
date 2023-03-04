import type { ExperienceTypesOptions } from '@/modules/resume/constants';
type NonEmptyArray<T> = [T, ...T[]];

export type ExperienceTypes =
  (typeof ExperienceTypesOptions)[keyof typeof ExperienceTypesOptions];

export type BaseJobTitle = {
  title: string;
  skills?: NonEmptyArray<string>;
  description?: string;
  location: string;
  tags?: NonEmptyArray<string>;
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
