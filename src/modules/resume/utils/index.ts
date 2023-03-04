import {
  format,
  formatDuration,
  intervalToDuration,
  closestTo,
} from 'date-fns';
import type {
  Experience,
  ExperienceTypes,
  JobTitles,
} from '@/modules/resume/types';
import { ExperienceTypesOptions } from '../constants';

export const showDate = (value: Date | undefined) => {
  if (!value) {
    return 'Present';
  }
  return format(value, 'MMM yyyy');
};

export const period = ({ start, end }: { start: Date; end: Date }) => {
  const duration = intervalToDuration({
    start: start,
    end: end,
  });

  return formatDuration(duration, { format: ['years', 'months'] });
};

export const getEndDate = (date: Date | undefined) => {
  return date ? date : new Date();
};

export const calculateJobStartandEndDate = (jobTitles: JobTitles[]) => {
  const { startDatesArray, endDatesArray } = jobTitles.reduce<{
    startDatesArray: Date[];
    endDatesArray: Date[];
  }>(
    (acc, curr) => {
      acc.startDatesArray.push(new Date(curr.startDate));
      acc.endDatesArray.push(getEndDate(curr.endDate));
      return acc;
    },
    {
      startDatesArray: [],
      endDatesArray: [],
    },
  );

  const startDate = closestTo(new Date(0), startDatesArray);
  const endDate = closestTo(new Date(), endDatesArray);

  if (!startDate || !endDate) {
    throw new Error('[utils][calculateJobStartandEndDate]: wrong date format');
  }

  return {
    startDate,
    endDate,
  };
};

export const calculateWholeExperienceTime = (experiences: Experience[]) => {
  const { startDatesArray, endDatesArray } = experiences.reduce<{
    startDatesArray: Date[];
    endDatesArray: Date[];
  }>(
    (acc, curr) => {
      const { startDate, endDate } = calculateJobStartandEndDate(
        curr.jobTitles,
      );
      acc.startDatesArray.push(startDate);
      acc.endDatesArray.push(endDate);
      return acc;
    },
    {
      startDatesArray: [],
      endDatesArray: [],
    },
  );

  const startDate = closestTo(new Date(0), startDatesArray);
  const endDate = closestTo(new Date(), endDatesArray);

  if (!startDate || !endDate) {
    throw new Error('[utils][calculateWholeExperienceTime]: wrong date format');
  }

  return {
    startDate,
    endDate,
  };
};

export const getTypeFormat = (value: ExperienceTypes | undefined) => {
  switch (value) {
    case ExperienceTypesOptions.Full:
      return 'Full-time';
    default:
      return '';
  }
};
