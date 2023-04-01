import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  
  constructor(){

    document.addEventListener('DOMContentLoaded', function() {
      const menubar = document.querySelector('.menubar');
      const links = document.querySelector('.links');
    
      if (menubar && links) {
        menubar.addEventListener('click', function() {
          links.classList.toggle('show');
        });
      }
    });
    
}
}
