import { Component, OnInit, OnDestroy,
  AfterViewInit,
  EventEmitter,
  Input,
  Output } from '@angular/core';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit, AfterViewInit, OnDestroy  {
isLoggedIn:boolean = localStorage.getItem('authToken')?true:false;
  constructor() { }
  text:string;
  ngOnInit() {
    tinymce.init({
      skin_url: 'assets/skins/lightgray',
      // other settings
      selector: "textarea#my-editor-id"
    });
  }
  @Input() elementId: String;
  @Output() onEditorKeyup = new EventEmitter<any>();

  editor;

  ngAfterViewInit() {
    tinymce.init({
      selector: '#' + this.elementId,
      plugins: ['link', 'paste', 'table'],
      skin_url: 'assets/skins/lightgray',
      setup: editor => {
        this.editor = editor;
        editor.on('keyup', () => {
          const content = editor.getContent();
          this.onEditorKeyup.emit(content);
        });
      },
    });
  }

  ngOnDestroy() {
    tinymce.remove(this.editor);
  }

}


