import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, NavController, IonItem, IonLabel, IonList, IonInput } from '@ionic/angular/standalone';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-input',
  templateUrl: './input.page.html',
  styleUrls: ['./input.page.scss'],
  standalone: true,
  imports: [IonInput, IonList, IonLabel, IonItem, IonButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, RouterModule]
})
export class InputPage implements OnInit {

  navController: NavController = inject(NavController);

  constructor() { }

  ngOnInit() {
  }

  moveBack(){
    this.navController.back();
  }

}
