import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.scss']
})
export class SocialMediaComponent implements OnInit {
  socialMediaLinks = {

    github: "https://github.com/aymen065",
    linkedin: "https://www.linkedin.com/in/aymen-chaabani-0b9b12229/",
    gmail: "aymen.chaabani@etudiant-fst.utm.tn",
    instagram : "https://www.instagram.com/chaabani.aymeen/",
    facebook: "https://www.facebook.com/aymen.chaabani.94/"
  };
  constructor() { }

  ngOnInit(): void {
  }

}
