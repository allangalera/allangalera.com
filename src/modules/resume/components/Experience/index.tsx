import {
  calculateJobStartandEndDate,
  getTypeFormat,
  period,
  showDate,
} from '@/modules/resume/utils';
import type { Experience } from '@/modules/resume/types';
import { type Component, For, Show } from 'solid-js';
import { FiLinkedin } from 'solid-icons/fi';
import { Tags } from '@/modules/resume/components/Tags';

type ExperienceProps = Experience;

export const ExperienceItem: Component<ExperienceProps> = (props) => {
  const { startDate, endDate } = calculateJobStartandEndDate(props.jobTitles);
  return (
    <div class="rounded-lg border border-zinc-300 dark:border-zinc-700">
      <div class="column flex justify-between gap-2 border-b border-b-zinc-300 p-2 dark:border-b-zinc-700">
        <div class="flex items-center justify-center gap-2">
          <h3 class="flex items-center text-xl leading-tight ">
            {props.company}
          </h3>
          {props.linkedin && (
            <a
              class="  rounded-lg border border-zinc-300 p-2 text-3xl hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-800"
              target="_blank"
              href={props.linkedin}
              aria-label={`${props.company} linkedin profile`}
            >
              <FiLinkedin class="h-auto w-4 md:w-5" />
            </a>
          )}
        </div>
        <div>
          <p class="text-right  text-sm">
            {getTypeFormat(props.type) + ' · '}
            {period({ start: startDate, end: endDate })}
          </p>
          <p class="text-right  text-sm">
            {showDate(startDate)} - {showDate(endDate)}
          </p>
        </div>
      </div>
      <div class="flex gap-2 p-2">
        <div class="flex py-1">
          <div class="m-0 w-min border-r border-r-zinc-300 text-xs dark:border-r-zinc-700"></div>
        </div>
        <div class="flex flex-col gap-4">
          <For each={props.jobTitles}>
            {(jobTitle) => (
              <div class="flex flex-col gap-1">
                <p class="text-lg font-bold  leading-5">{jobTitle.title}</p>
                {jobTitle.description && (
                  <p class="text-base ">{jobTitle.description}</p>
                )}
                <div>
                  <p class="text-sm ">{jobTitle.location}</p>
                  <p class="text-sm ">
                    {showDate(jobTitle.startDate)} -{' '}
                    {showDate(jobTitle.endDate)}
                  </p>
                </div>
                <Show when={jobTitle.tags && jobTitle.tags.length > 0}>
                  <div class="flex gap-2">
                    <For each={jobTitle.tags}>
                      {(tag) => <Tags tag={tag} />}
                    </For>
                  </div>
                </Show>
              </div>
            )}
          </For>
        </div>
      </div>
    </div>
  );
};
