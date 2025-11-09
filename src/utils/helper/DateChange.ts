export const DateChange = (dateString: string | undefined): string => {
  if (!dateString) return "";
  const date = new Date(dateString);

  return new Intl.DateTimeFormat("fa-IR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
};