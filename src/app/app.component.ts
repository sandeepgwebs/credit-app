import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: ''
    },
    {
      title: 'Profile',
      url: '/userprofile',
      icon: ''
    },
    {
      title: 'Log in',
      url: '/login',
      icon: ''
    },
    {
      title: 'sign up',
      url: '/signup',
      icon: ''
    },
    {
      title: 'OTP',
      url: '/enterotp',
      icon: ''
    },
    {
      title: 'List',
      url: '/list',
      icon: ''
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
