import { Component } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {Store} from "@ngrx/store";
import {changeLang, langSelector} from "../reducers/languager";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {

  currentLang$ = this.store.select(langSelector);

  constructor(public translate: TranslateService, private store: Store) {
    translate.setDefaultLang('en');
    translate.use('en');
  }

  changeLanguage(){
    this.store.dispatch(changeLang());
    this.currentLang$.subscribe(s => this.translate.use(s));
  }

  isExpanded = false;

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
}
