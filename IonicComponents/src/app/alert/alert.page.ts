import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, NavController, IonItem, IonAlert } from '@ionic/angular/standalone';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
  standalone: true,
  imports: [IonAlert, IonItem, IonButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class AlertPage implements OnInit {

  isAlertOpen = false;

  navController: NavController = inject(NavController);
  

  alertButtons = ['Accept', 'Cancel'];

  constructor() { }

  ngOnInit() {
  }

  moveBack(){
    this.navController.back();

  }

  showAlert(isOpen: boolean){
    this.isAlertOpen = isOpen;
  }

}
