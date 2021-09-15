type ListCommonType = {
  status: Status;
  listings: Array<CompactListing>;
  fetch: (filters?: Filters) => void;
};
