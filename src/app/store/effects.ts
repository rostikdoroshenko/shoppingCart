import {ContentService} from "../services/content.service";
import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {actions} from "./actions";
import {catchError, map, of, switchMap} from "rxjs";

@Injectable()
export class Effects {
  constructor(private actions$: Actions,
              private contentService: ContentService,
  ) {
  }

  loadContent$ = createEffect(
    () => this.actions$
      .pipe(
        ofType(actions.loadContent),
        switchMap(() => this.contentService.fetchContent()
          .pipe(
            map((content) => {
              return actions.loadedContentSuccess({content});
            }),
            catchError((error) => of(actions.loadedContentError({error})))
          )),
      )
  );
}
