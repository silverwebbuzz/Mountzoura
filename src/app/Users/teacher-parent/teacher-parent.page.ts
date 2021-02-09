import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-teacher-parent',
  templateUrl: './teacher-parent.page.html',
  styleUrls: ['./teacher-parent.page.scss'],
})
export class TeacherParentPage implements OnInit {

  constructor(private router: Router,
    private statusBar: StatusBar) { }
  

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.statusBar.show();
    this.statusBar.styleDefault();
    this.statusBar.backgroundColorByHexString('#FFFFFF');
  }

  next() {
    this.router.navigate(['/login']);
  }

  teacher(teacher) {
    this.router.navigate(['terms'],{ queryParams: { 
      teacher: teacher, 
     } });
  }

  parent(parent) {
    this.router.navigate(['terms'],{ queryParams: { 
      parent: parent, 
     } });
  }

}
