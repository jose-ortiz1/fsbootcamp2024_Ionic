import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, NavController, IonItem, IonToast, ToastController } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { globe } from 'ionicons/icons';


@Component({
  selector: 'app-toast',
  templateUrl: './toast.page.html',
  styleUrls: ['./toast.page.scss'],
  standalone: true,
  imports: [IonToast, IonItem, IonButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class ToastPage implements OnInit {

  navController: NavController = inject(NavController);
  toastController: ToastController = inject(ToastController);
  isToastOpen = false;
  

  toastButtons = [
    {
      text: 'More info',
      role: 'info',
      handler: () => {
        console.log('More info clicked!');
      }
    },
    {
      text: 'Close',
      role: 'cancel',
      handler: () => {
        console.log('Close clicked!');
      }
    }
  ];

  constructor() {
    addIcons({globe});
   }

  ngOnInit() {
  }

  moveBack(){
    this.navController.back();  

  }

  setOpen(isOpen: boolean){
    this.isToastOpen = isOpen;
  }

  async displayToast(){
    const toast = await this.toastController.create({
      message:'This is my toast message',
      duration: 2000,
      position: 'top'
    });

    toast.present();
  }

  setRoleMsg(event:any){
    const { role } = event.detail;
    console.log(`Dismissed with role: ${role}`);
  }

}
