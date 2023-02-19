export const omitPrefectureSuffix = (name: string): string => {
  return name.replace(/(?:都|府|県)$/, "");
};
