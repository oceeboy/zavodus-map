import { HistoryItemProps, Section } from "../types";

const groupByMonth = (history: HistoryItemProps[]): Section[] => {
  const grouped: { [key: string]: HistoryItemProps[] } = {};

  history.forEach((item) => {
    const date = new Date(item.date);
    const monthYear = date.toLocaleString("en-US", {
      month: "long",
      year: "numeric",
    });

    if (!grouped[monthYear]) {
      grouped[monthYear] = [];
    }
    grouped[monthYear].push(item);
  });

  return Object.keys(grouped).map((key) => ({
    title: `${key} Navigation History`,
    data: grouped[key],
  }));
};

export { groupByMonth };
