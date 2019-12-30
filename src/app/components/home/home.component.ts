import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  hamburgerClose: Boolean = false;
  constructor(private myElement: ElementRef) { }

  ngOnInit() {
  }
 // Toggle hamburger
 toggleHamburger() {
  this.hamburgerClose = !this.hamburgerClose;
}
showstory() {
  // document.getElementById("storyview").scrollIntoView({ behavior: 'smooth', block: 'start' });
  const id = 'storyview';
  const yOffset = -10; 
  const element = document.getElementById(id);
  // const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
  // window.scrollTo({top: y, behavior: 'smooth'});
  //IE
  document.getElementById('storyview').scrollTop = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
  const element1 = document.querySelector('#storyview');
  element1.scrollIntoView({ behavior: 'smooth', block: 'center', inline:'start'});    
  // document.getElementById("storyview").style.margin = "2% 0%";
  
}
showservice() {
  // document.getElementById("serviceview").scrollIntoView({ behavior: 'smooth', block: 'start' });
  const id = 'serviceview';
  const yOffset = -10; 
  const element = document.getElementById(id);
  // const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
  // window.scrollTo({top: y, behavior: 'smooth'});
  //IE
  document.getElementById('serviceview').scrollTop = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
  const element1 = document.querySelector('#serviceview');
  element1.scrollIntoView({ behavior: 'smooth', block: 'center', inline:'center'});
}
showblog() {
  // document.getElementById("blogview").scrollIntoView({ behavior: 'smooth', block: 'start' });
  const id = 'blogview';
  const yOffset = -10; 
  const element = document.getElementById(id);
  // const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
  // window.scrollTo({top: y, behavior: 'smooth'});  
   //IE
   document.getElementById('blogview').scrollTop = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
   const element1 = document.querySelector('#blogview');
   element1.scrollIntoView({ behavior: 'smooth', block:'center', inline:'nearest'});
}
showappt() {
  // document.getElementById("apptview").scrollIntoView({ behavior: 'smooth', block: 'start' });
  const id = 'apptview';
  const yOffset = -10; 
  const element = document.getElementById(id);
  // const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
  // window.scrollTo({top: y, behavior: 'smooth'});
   //IE
   document.getElementById('apptview').scrollTop = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
   const element1 = document.querySelector('#apptview');
   element1.scrollIntoView({ behavior: 'smooth', block: 'center'});
}
//Partner with us Section
showpartner() {
  // document.getElementById("apptview").scrollIntoView({ behavior: 'smooth', block: 'start' });
  const id = 'partnerview';
  const yOffset = -10; 
  const element = document.getElementById(id);
  // const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
  // window.scrollTo({top: y, behavior: 'smooth'});
   //IE
   document.getElementById('partnerview').scrollTop = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
   const element1 = document.querySelector('#partnerview');
   element1.scrollIntoView({ behavior: 'smooth', block: 'center'});
}
showhire() {
  // document.getElementById("apptview").scrollIntoView({ behavior: 'smooth', block: 'start' });
  const id = 'hireview';
  const yOffset = -10; 
  const element = document.getElementById(id);
  // const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
  // window.scrollTo({top: y, behavior: 'smooth'});
   //IE
   document.getElementById('hireview').scrollTop = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
   const element1 = document.querySelector('#hireview');
   element1.scrollIntoView({ behavior: 'smooth', block: 'center'});
}
showtesti() {
  // document.getElementById("apptview").scrollIntoView({ behavior: 'smooth', block: 'start' });
  const id = 'testimonialview';
  const yOffset = -10; 
  const element = document.getElementById(id);
  // const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
  // window.scrollTo({top: y, behavior: 'smooth'});
   //IE
   document.getElementById('testimonialview').scrollTop = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
   const element1 = document.querySelector('#testimonialview');
   element1.scrollIntoView({ behavior: 'smooth', block: 'center'});
}
}
