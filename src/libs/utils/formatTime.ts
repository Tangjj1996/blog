import dayjs from "dayjs";

export function formatDate(time: string | Date) {
  return dayjs(time).format("YYYY-MM-DD");
}

export function formDateTime(time: string | Date) {
  return dayjs(time).format("YYYY-MM-DD HH:mm:ss");
}
