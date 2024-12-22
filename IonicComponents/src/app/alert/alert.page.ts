import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, NavController, IonItem, IonAlert, AlertController } from '@ionic/angular/standalone';


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

  alertController: AlertController = inject(AlertController);
  

  alertButtons = ['Accept', 'Cancel'];
  saveButtons = ['Save', 'Cancel'];
  advancedButton = [
    {
      text: "Cancel",
      role: 'cancel',
      handler: () => {
        console.log('Cancel clicked');
      }
    },
    {
      text: "Accept",
      role: 'accept',
      handler: () => {
        console.log('Accept clicked');
      }
    }
  ];
  
  alertInputs = [
    {
      placeholder : "Enter your name",
      type: "text",
    },
    {
      placeholder: "Enter your email",
      type: "email",
    },
    {
      placeholder: "Enter your age",
      type: "number",
      min: 1,
      max: 100,
    },
    {
      type: "textarea",
      placeholder: "Tell us about yourself",
    },
    // {
    //   label: "I agree to the terms and conditions",
    //   type: "checkbox",
    //   //value: "terms",
    // }
  ];

  radioInputs = [
    {
      label: "Male",
      type: "radio",
      //value: "male",
    },
  ]

  constructor() { }

  ngOnInit() {
  }

  moveBack(){
    this.navController.back();

  }

  showAlert(isOpen: boolean){
    this.isAlertOpen = isOpen;
  }

  async alertControl(){
    const alert =  await this.alertController.create({
      header: 'Alert',
      message: 'This is an example using Control Alert.',
      buttons: this.alertButtons

    });

    alert.present();
  }

  showResult(event: any){
    console.log(event);
  }

}
