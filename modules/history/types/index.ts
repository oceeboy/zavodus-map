export type HistoryItemProps = {
  id: string;
  startLocation: string;
  endLocation: string;
  date: string;
  duration: string;
};
export type HistoryScreenProps = {
  history: HistoryItemProps[];
};

export type Section = {
  title: string;
  data: HistoryItemProps[];
};
