export class Filter {
    source: string;
    pageNumber: string;
    pageSize: string;
    criteriaSearch: string;
    loadLocal: boolean;

  public constructor(init?: Partial<Filter>) {
    Object.assign(this, init);
  }
}
