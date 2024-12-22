import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonButton, NavController, IonCard, IonCardTitle, IonCardSubtitle, IonImg, IonCardHeader, IonCardContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.page.html',
  styleUrls: ['./cards.page.scss'],
  standalone: true,
  imports: [IonCardContent, IonCardHeader, IonImg, IonCardSubtitle, IonCardTitle, IonCard, IonButton, IonItem, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class CardsPage implements OnInit {

  navController = inject(NavController);

  constructor() { }

  ngOnInit() {
  }

  moveBack(){
    this.navController.back();
  }

}
