﻿import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";


interface Note {
  id?: number;
  name?: string;
  text?: string;
}

@Injectable()
export class DataService {
  private url = "/api/notes";

  constructor(private http: HttpClient) {
  }

  getNotes() {
    return this.http.get(this.url);
  }

  getNote(id: number) {
    return this.http.get(this.url + '/' + id);
  }

  createNote(note: Note) {
    return this.http.post(this.url, note);
  }
  updateNote(note: Note) {
    return this.http.put(this.url, note);
  }
  deleteNote(id: number) {
    return this.http.delete(this.url + '/' + id);
  }
}
