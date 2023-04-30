import {
  format,
  formatDuration,
  intervalToDuration,
  closestTo,
  differenceInDays,
} from 'date-fns';
import type {
  Experience,
  ExperienceTypes,
  JobTitles,
} from '@/modules/resume/types';
import { ExperienceTypesOptions } from '../constants';

export const getISODate = (dt?: Date): Date => {
  if (!dt) {
    dt = new Date();
  }
  return new Date(dt.valueOf() + dt.getTimezoneOffset() * 60 * 1000);
};

export const showDate = (value: Date | undefined) => {
  const isoDate = getISODate(value);

  if (differenceInDays(isoDate, getISODate()) === 0) {
    return 'Present';
  }

  return format(isoDate, 'MMM yyyy');
};

export const period = ({ start, end }: { start: Date; end: Date }) => {
  const startISO = getISODate(start);
  const endISO = getISODate(end);
  const duration = intervalToDuration({
    start: startISO,
    end: endISO,
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
      acc.startDatesArray.push(getISODate(curr.startDate));
      acc.endDatesArray.push(getISODate(curr.endDate));
      return acc;
    },
    {
      startDatesArray: [],
      endDatesArray: [],
    },
  );

  const startDate = closestTo(getISODate(new Date(0)), startDatesArray);
  const endDate = closestTo(getISODate(), endDatesArray);

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

  const startDate = closestTo(getISODate(new Date(0)), startDatesArray);
  const endDate = closestTo(getISODate(), endDatesArray);

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
