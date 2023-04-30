import {
  calculateJobStartandEndDate,
  getTypeFormat,
  period,
  showDate,
} from '@/modules/resume/utils';
import type { Experience } from '@/modules/resume/types';
import { Component, For, Show } from 'solid-js';
import { FiLinkedin } from 'solid-icons/fi';
import { Tags } from '@/modules/resume/components/Tags';

type ExperienceProps = Experience;

export const ExperienceItem: Component<ExperienceProps> = (props) => {
  const { startDate, endDate } = calculateJobStartandEndDate(props.jobTitles);
  return (
    <div class="rounded-lg border border-zinc-300 dark:border-zinc-700">
      <div class="flex column gap-2 justify-between border-b border-b-zinc-300 dark:border-b-zinc-700 p-2">
        <div class="flex gap-2 items-center justify-center">
          <h3 class="flex items-center text-xl leading-tight text-zinc-900 dark:text-zinc-50">
            {props.company}
          </h3>
          {props.linkedin && (
            <a
              class=" text-zinc-900 dark:text-zinc-50 text-3xl rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 p-2 border border-zinc-300 dark:border-zinc-700"
              target="_blank"
              href={props.linkedin}
              aria-label={`${props.company} linkedin profile`}
            >
              <FiLinkedin class="w-4 md:w-5 h-auto" />
            </a>
          )}
        </div>
        <div>
          <p class="text-sm text-zinc-900 dark:text-zinc-50 text-right">
            {getTypeFormat(props.type) + ' · '}
            {period({ start: startDate, end: endDate })}
          </p>
          <p class="text-sm text-zinc-900 dark:text-zinc-50 text-right">
            {showDate(startDate)} - {showDate(endDate)}
          </p>
        </div>
      </div>
      <div class="flex gap-2 p-2">
        <div class="flex py-1">
          <div class="w-min text-xs m-0 border-r border-r-zinc-300 dark:border-r-zinc-700"></div>
        </div>
        <div class="flex flex-col gap-4">
          <For each={props.jobTitles}>
            {(jobTitle) => (
              <div class="flex flex-col gap-1">
                <p class="text-lg font-bold text-zinc-900 dark:text-zinc-50 leading-5">
                  {jobTitle.title}
                </p>
                {jobTitle.description && (
                  <p class="text-base text-zinc-900 dark:text-zinc-50">
                    {jobTitle.description}
                  </p>
                )}
                <div>
                  <p class="text-sm text-zinc-900 dark:text-zinc-50">
                    {jobTitle.location}
                  </p>
                  <p class="text-sm text-zinc-900 dark:text-zinc-50">
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
