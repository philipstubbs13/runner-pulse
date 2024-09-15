export enum PersonalResultTime {
  Hours = "hours",
  Minutes = "minutes",
  Seconds = "seconds",
}

export const personalResultTimePlaceholders: Record<
  PersonalResultTime,
  string
> = {
  [PersonalResultTime.Hours]: "Select number of hours",
  [PersonalResultTime.Minutes]: "Select number of minutes",
  [PersonalResultTime.Seconds]: "Select number of seconds",
};
