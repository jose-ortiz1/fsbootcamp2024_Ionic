import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonIcon, IonItem, IonButton} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { logoApple, heart, star, wifi} from 'ionicons/icons';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.page.html',
  styleUrls: ['./icon.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonIcon, IonItem, IonButton, RouterLink, RouterModule]
})
export class IconPage implements OnInit {

  constructor() {
    addIcons({logoApple, heart, star, wifi});
   }

  ngOnInit() {
  }

}
