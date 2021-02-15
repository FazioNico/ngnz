import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngnz-index-page',
  templateUrl: './index-page.component.html',
  styleUrls: ['./index-page.component.scss']
})
export class IndexPageComponent {


  download() {
    const blob = new Blob(['{"name": "test"}']);
    const blobUrl = URL.createObjectURL(blob);

    // Create a link element
    const link = document.createElement('a');
  
    // Set link's href to point to the Blob URL
    link.href = blobUrl;
    (link.download as any) = 'myfile.json';
  
    // Append link to the body
    document.body.appendChild(link);

    // Dispatch click event on the link
    // This is necessary as link.click() does not work on the latest firefox
    link.dispatchEvent(
      new MouseEvent('click', { 
        bubbles: true, 
        cancelable: true, 
        view: window 
      })
    );
  
    // Remove link from body
    document.body.removeChild(link);
  }
}
