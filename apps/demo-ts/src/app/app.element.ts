import { NzCopyToClopboardOptions } from '@ngnz/nz-copy-to-clipboard';
import './app.element.css';
// import * as HTML from './app.element.html';


export class AppElement {
  public root: HTMLElement;
  public copyToClipboardFunction: (text: string, ops: NzCopyToClopboardOptions) => Promise<boolean>;
  
  constructor(rootSelector) {
    this.root = document.querySelector(rootSelector);
    this._init();
  }

  private async _init() {
    this._render();
    this._attachEvents();
    this.copyToClipboardFunction = await import(
      '@ngnz/copy-to-clipboard'
    ).then(
      copyToClipboardFunction => copyToClipboardFunction.copyToClipboardFunction
    );
  }
  private _render() {
    this.root.innerHTML = `
      <div>
        <span>✂️</span>
        <h1>@ngnz/copy-to-clipboard</h1>
        <p>Copy content text to clopboard + display alert to confirme.</p>
      </div>
      <div>
        <p>
          <b>Copy Text from HTML</b>
        </p>
        <pre copyTxt>Text to copy</pre>
        <button id="copyTxt">copy</button>    
      </div>
      <div>
        <p>
          <b>Copy Input Value</b>
        </p>
        <input copyValue type="text" />
        <button id="copyValue">copy</button>    
      </div>
      <div>
        <p>
          <b>Copy Text from HTML and display confirmation in "console.log()"</b>
        </p>
        <pre copyTxtCustom>Text with confirm inside console.log()</pre>
        <button id="copyTxtCustom">copy</button>
      </div>
    `;
  }

  private _attachEvents(){
    this.root.querySelector('#copyTxt').addEventListener('click', ()=> {
      const elementToCopy = this.root.querySelector('pre[copyTxt]');
      const text = elementToCopy?.textContent;
      this.copyToClipboardFunction(text, null);
    });
    this.root.querySelector('#copyValue').addEventListener('click', ()=> {
      const elementToCopy: HTMLInputElement = this.root.querySelector('input[copyValue]');
      const text = elementToCopy?.value;
      this.copyToClipboardFunction(text,null);
    });
    this.root.querySelector('#copyTxtCustom').addEventListener('click', ()=> {
      const elementToCopy = this.root.querySelector('pre[copyTxtCustom]');
      const text = elementToCopy?.textContent;
      this.copyToClipboardFunction(text,{
        // custom logic to display confirmation copy to clipboard
        handler: (text) =>{
          console.log('Custom function to display confirmation: ', text);
        }
      });
    })
  }
}
new AppElement('ngnz-root')
//customElements.define('ngnz-root', AppElement);
