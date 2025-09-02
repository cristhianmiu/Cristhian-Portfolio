import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' 
})
export class ScrollService {


  scrollTo(sectionId: string) {
    setTimeout(() => {
      const element = document.querySelector<HTMLElement>(`#${sectionId}`);
      const header = document.querySelector<HTMLElement>('header');

      if (element) {
        const headerOffset = header ? header.offsetHeight : 0;

        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      } else {
        console.warn(`⚠️ No se encontró el elemento con id="${sectionId}"`);
      }
    });
  }

}
