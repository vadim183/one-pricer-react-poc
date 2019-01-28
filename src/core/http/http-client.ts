import { injectable } from 'inversify';
import { from, Observable } from 'rxjs';

@injectable()
export class HttpClient {
    public get<TResult>(url: string): Observable<TResult> {
        return from(
            fetch(url)
                .then(response => {
                    return response.json();
                })
                .catch(reason => {
                    throw new Error(reason);
                })
        );
    }
}
