import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonIcon, IonItem, NavController } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { logoApple, heart, star, wifi} from 'ionicons/icons';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-button',
  templateUrl: './button.page.html',
  styleUrls: ['./button.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButton, IonIcon, IonItem, RouterModule, RouterLink ]
})
export class ButtonPage implements OnInit {

  navController: NavController = inject(NavController);

  constructor() { 
    addIcons({logoApple, heart, star, wifi});
  }

  ngOnInit() {
  }

  moveBack(){
    this.navController.back();
  }

}
