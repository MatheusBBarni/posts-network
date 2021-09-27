export interface Request<ResultType> {
  count: number;
  next?: string;
  previous?: string;
  results: ResultType
}