import { from, Observable } from 'rxjs';

export interface HttpClient {
  get<TResult>(url: string): Observable<TResult>;
}

export const httpClient: HttpClient = {
  get: (url: string) =>
    from(
      fetch(url)
        .then(response => {
          return response.json();
        })
        .catch(reason => {
          throw new Error(reason);
        })
    )
};
