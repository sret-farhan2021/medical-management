import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  implements OnInit {
  constructor() { }

  ngOnInit(): void {
    const closeBtn = document.querySelector<HTMLButtonElement>('#close');
    const ham = document.querySelector<HTMLButtonElement>('#ham');
    const nav = document.querySelector<HTMLElement>('.side-nav');
    
    if (closeBtn && ham && nav) {
      closeBtn.addEventListener('click', () => {
        nav.style.display = "none";
        ham.style.display = "block";
      });
      
      ham.addEventListener('click', () => {
        nav.style.display = "block";
        ham.style.display = "none";
      });
    }
  }
}
