export const DateTimeChange = (dateString: string | undefined): string => {
  if (!dateString) return "";

  // جدا کردن بخش تاریخ و ساعت
  const [datePart, timePart] = dateString.split("T");
  if (!datePart) return "";

  let formattedDate = "";
  const [yearStr, monthStr, dayStr] = datePart.split("-");

  if (!yearStr || !monthStr || !dayStr) return "";

  const yearNum = parseInt(yearStr, 10);

  if (yearNum > 2000) {
    // تاریخ میلادی، تبدیل به شمسی با Intl
    const dateObj = new Date(dateString);
    if (isNaN(dateObj.getTime())) return "";
    formattedDate = new Intl.DateTimeFormat("fa-IR", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(dateObj);
  } else {
    formattedDate = `${yearStr}/${monthStr}/${dayStr}`;
  }

  let formattedTime = "00:00 ق.ظ";
  if (timePart) {
    const [hours, minutes] = timePart.split(":");
    let hourNum = parseInt(hours, 10);
    const period = hourNum >= 12 ? "ب.ظ" : "ق.ظ";

    if (hourNum === 0) hourNum = 12;
    else if (hourNum > 12) hourNum -= 12;

    formattedTime = `${hourNum
      .toString()
      .padStart(2, "0")}:${minutes} ${period}`;
  }

  return `${formattedDate} ساعت ${formattedTime}`;
};
