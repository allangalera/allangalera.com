import {
  format,
  formatDuration,
  intervalToDuration,
  closestTo,
  differenceInDays,
  parseISO,
} from 'date-fns';
import type {
  Experience,
  ExperienceTypes,
  JobTitles,
} from '@/modules/resume/types';
import { ExperienceTypesOptions } from '../constants';

export const showDate = (date?: string | Date) => {
  let isoDate;
  if (date instanceof Date) {
    isoDate = date ?? parseISO(new Date().toISOString());
  } else {
    isoDate = date ? parseISO(date) : parseISO(new Date().toISOString());
  }

  if (differenceInDays(isoDate, parseISO(new Date().toISOString())) === 0) {
    return 'Present';
  }

  return format(isoDate, 'MMM yyyy');
};

export const period = ({ start, end }: { start: Date; end: Date }) => {
  const duration = intervalToDuration({
    start,
    end,
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
      acc.startDatesArray.push(parseISO(curr.startDate));
      acc.endDatesArray.push(
        curr.endDate
          ? parseISO(curr.endDate)
          : parseISO(new Date().toISOString()),
      );
      return acc;
    },
    {
      startDatesArray: [],
      endDatesArray: [],
    },
  );

  const startDate = closestTo(
    parseISO(new Date(0).toISOString()),
    startDatesArray,
  );
  const endDate = closestTo(parseISO(new Date().toISOString()), endDatesArray);

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

  const startDate = closestTo(
    parseISO(new Date(0).toISOString()),
    startDatesArray,
  );
  const endDate = closestTo(parseISO(new Date().toISOString()), endDatesArray);

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
