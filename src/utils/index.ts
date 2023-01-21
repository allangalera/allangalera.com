import { format, formatDuration, intervalToDuration } from "date-fns";

export const resumeShowDate = (value: string | null) => {
  if (!value) {
    return "Present";
  }
  return format(new Date(value), "MMMM yyyy");
};

export const resumePeriod = ({
  start,
  end,
}: {
  start: string;
  end: string | null;
}) => {
  let endDate = new Date();
  const startDate = new Date(start);
  if (end) endDate = new Date(end);
  console.log({ startDate, endDate });
  const duration = intervalToDuration({
    start: startDate,
    end: endDate,
  });
  return formatDuration(duration, { format: ["years", "months"] });
};
