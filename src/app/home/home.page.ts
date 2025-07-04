import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';
import { App } from '@capacitor/app';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage implements OnInit{

  constructor(private browser : InAppBrowser) {}

  ngOnInit(): void {
    const browserInstance = this.browser.create("https://tfc-frontend-ten.vercel.app/","_self",
      "location=no,hidenavigationbuttons=true,hideurlbar=true,zoom=no")
    browserInstance.on("exit").subscribe(evt => {
      App.exitApp()
    }) 
  }
}
