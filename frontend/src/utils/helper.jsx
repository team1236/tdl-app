import dayjs from "dayjs";
export const formatDate = (isoString) => {
  return dayjs(isoString).format("DD/MM/YYYY hh:mm a");
};

export const formatDateTime = (isoString) => {
  const date = dayjs(isoString);

  const formattedDate = date.format("DD/MM/YY");
  const formattedTime = date.format("h:mm A");

  return { formattedDate, formattedTime };
};
