import {Injectable, NgZone} from '@angular/core';
// import {Subject} from 'rxjs/Subject';
// import {DrugListParamsType} from '../../enum/drug-list-param-type.enum';
import {Router} from '@angular/router';
import { Subject } from 'rxjs';
declare const JSApplet: any;
@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  JSMEApplet$ = new Subject<any>();
  constructor(private router: Router,
    private zone: NgZone) { 
    this.zone.runOutsideAngular(() => {
      window['jsmeOnLoad'] = () => {
        console.log('JSME init');
        this.JSMEApplet$.next(JSApplet);
      };
    });
  }

  private _globalLoading = new Subject<boolean>();
  loadingStatus$ = this._globalLoading.asObservable();

  setLoading(status: boolean): void {
    this._globalLoading.next(status);
  }
}
