import { Component, OnInit, Input } from '@angular/core';
import { setTimeout } from 'timers';

@Component({
  selector: 'app-app-text-scramble',
  templateUrl: './app-text-scramble.component.html',
  styleUrls: ['./app-text-scramble.component.css']
})
export class AppTextScrambleComponent implements OnInit {

  constructor(){

  }

  ngOnInit(){

  }


  // oldText: string = "";
  // newText: string = "";

  value: string = "";

  // chars: string = '!<>-_\\/[]{}—=+*^?#________'
  // phrases: string[] = [];
  // constructor() { }
  // queue: any[] = [];

  // resolve: any = "";
  // frame: number = 0;

  // counter: number = 0;
  // ngOnInit(): void {
  //   this.phrases = ["first", "second"];
  //   // console.log(this.phrases);
  //   this.value = this.phrases[1];
  //   this.counter = 0;
    
  //   // this.oldText = this.phrases[0];
  //   // this.newText = this.phrases[1];
  //   // setInterval(this.next, 800);
  //   this.next();
  // }

  // next(){
  //   // console.log("ohh man ",this.phrases);
  //   this.setText(this.phrases[this.counter]).then(() => {
  //     // console.log("tyooooooooooooooooooooo");
  //     if(this.phrases.includes(this.value)){
  //       setTimeout(this.next.bind(this),800);
  //       // this.frame = 0;
  //       // this.counter = 0;
  //       // this.queue = [];

  //     }
  //     else
  //       setTimeout(this.next.bind(this),800);
  //     // this.next();
  //   });
  //   this.counter = (this.counter + 1) % this.phrases.length;
  //   // console.log("in next, count: ",this.counter);
  // }

  // setText(newText: string) {
  //   const oldText = this.value;
  //   const length = Math.max(oldText.length, newText.length);
  //   // const promise = new Promise((resolve) => this.resolve = resolve);
  //   return new Promise((resolve,reject)=>{
  //     this.queue = [];
  //     for (let i = 0; i < length; i++) {
  //       const from = oldText[i] || '';
  //       const to = newText[i] || '';
  //       const start = Math.floor(Math.random() * 40);
  //       const end = start + Math.floor(Math.random() * 40);
  //       this.queue.push({ from, to, start, end });
  //     }
  //     this.update();
  //     resolve("");
  //   })
  // }

  // update() {
  //   let output = '';
  //   let complete = 0;
  //   for (let i = 0, n = this.queue.length; i < n; i++) {
  //     let { from, to, start, end, char } = this.queue[i];
  //     if (this.frame >= end) {
  //       complete++;
  //       output += to;
  //     } else if (this.frame >= start) {
  //       if (!char || Math.random() < 0.28) {
  //         char = this.randomChar();
  //         this.queue[i].char = char;
  //       }
  //       output += `<span class="dud">${char}</span>`;
  //     } else {
  //       output += from;
  //     }
  //     this.value = output;
  //   }
  //   this.value = output;
  //   if (complete === this.queue.length) {
  //     return;
  //   } else {
  //     this.frame++
  //   }
  // }

  // randomChar() {
  //   return this.chars[Math.floor(Math.random() * this.chars.length)]
  // }

}
