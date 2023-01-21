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
  const startDate = new Date(start);
  let endDate = new Date();

  if (end) {
    endDate = new Date(end);
  }

  const duration = intervalToDuration({
    start: startDate,
    end: endDate,
  });

  return formatDuration(duration, { format: ["years", "months"] });
};
