import { Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
// Using PDFJS lib.
// Doc: https://github.com/mozilla/pdf.js
import { getDocument, GlobalWorkerOptions } from 'pdfjs-dist';
import { GetViewportParameters, PDFDocumentProxy } from 'pdfjs-dist/types/display/api';
import PDFJSWorker from 'pdfjs-dist/build/pdf.worker.entry';

GlobalWorkerOptions.workerSrc = PDFJSWorker;

@Component({
  selector: 'ngnz-pdf-flip',
  templateUrl: `./pdf-flip-book.component.html`,
  styles: [`

  :host {
    display: block;
    width: 100%;
    height: auto;
    overflow: hidden;
    position: relative;
  }
  /* :host canvas {
    max-width: 60vw;
  } */

  /**
  * objetParent = element.offsetParent
  */
  `],
})
export class PdfFlipComponent implements OnInit {

  @ViewChild('canvas', {static: true, read: ElementRef}) public canvas: ElementRef<HTMLCanvasElement>;
  @Input() public pdfURL: string;
  @Input() public currentPage = 1;
  @Input() public zoom: GetViewportParameters = {
    scale: 1,
  };
  @Input() public isControlsVisible = true;
  public pdf: PDFDocumentProxy = null;

  constructor(public ref: ElementRef<HTMLElement>, private _renderer: Renderer2) {}

  async ngOnInit() {
    const pdf: PDFDocumentProxy = await getDocument(this.pdfURL).promise;
    this.pdf = pdf;
    await this._render();
  }

  private async _render() {
    
    // this._renderer.
    const height = this.ref.nativeElement.clientHeight;
    const width = this.ref.nativeElement.clientWidth;
    const page = await this.pdf.getPage(this.currentPage);
    const ctx = this.canvas.nativeElement.getContext('2d');
    const viewport: any = page.getViewport(this.zoom);
    console.log('-->', this.ref.nativeElement.clientWidth, viewport);
    this.canvas.nativeElement.width = viewport.width;
    this.canvas.nativeElement.height = viewport.height;
    page.render({
        canvasContext: ctx,
        viewport: viewport
    });
  }

  actions(type: string, payload?: any){
    switch (true) {
      case type === 'go_previous':
        this._previouse();  
        break;
    
      case type === 'go_next': 
        this._next();
        break;

      case type === 'go_to': 
        if ((payload?.keyCode || payload?.which) !== 13) return;
        console.log(type, payload?.keyCode || payload?.which, this.currentPage);
        this._to(Number(this.currentPage));
        break;

      case type === 'zoom_in': 
        this._zoomIn();
        break;

      case type === 'zoom_out': 
        this._zoomOut();
        break;
      
      default:
        break;
    }
  }

  private _previouse() {
    if(this.pdf === null|| this.currentPage === 1)
      return;
    --this.currentPage
    this._render();
  }

  private _next() {
    if(this.pdf === null|| this.currentPage > this.pdf._pdfInfo.numPages)
      return;
    ++this.currentPage
    this._render();
  }

  private _to(desiredPage: number) {
    if(desiredPage >= 1 && desiredPage <= this.pdf._pdfInfo.numPages) {
        this.currentPage = desiredPage;
        this._render();
    }
  }

  private _zoomIn() {
    this.zoom.scale = this.zoom.scale + 0.2;
    this._render();
  }

  private _zoomOut() {
    this.zoom.scale = this.zoom.scale - 0.2;
    this._render();
  }
}
