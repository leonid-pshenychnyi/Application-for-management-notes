import {Component, OnInit} from "@angular/core";
import {DataService} from "./note-manager.service";
import {TranslateService} from "@ngx-translate/core";


interface Note {
  id?: number;
  name?: string;
  text?: string;
}

@Component({
  selector: 'app-main',
  templateUrl: 'note.manager.component.html',
  providers: [DataService]
})

export class NoteComponent implements OnInit {

  note: Note;
  notes: Note[];
  tableMode: boolean = true;

  constructor(private dataService: DataService, public translate: TranslateService) {
    translate.setDefaultLang('en');
    translate.use('en');
  }

  ngOnInit() {
    this.loadNotes();
  }

  loadNotes() {
    this.dataService.getNotes()
      .subscribe((data: Note[]) => this.notes = data);
  }

  save() {
    if (this.note.id == null) {
      this.dataService.createNote(this.note)
        .subscribe((data: Note) => this.notes.push(data));
    } else {
      this.dataService.updateNote(this.note)
        .subscribe(data => this.loadNotes());
    }
    this.cancel();
  }

  editNote(p: Note) {
    this.note = p;
  }

  cancel() {
    this.note = {};
    this.tableMode = true;
  }

  delete(p: Note) {
    this.dataService.deleteNote(p.id)
      .subscribe(data => this.loadNotes());
  }

  add() {
    this.cancel();
    this.tableMode = false;
  }
}
