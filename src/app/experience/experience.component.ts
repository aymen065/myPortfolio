import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  public workExperiences = {
    viewExperiences: true,
    experience: [
      
      {
        role: "internship",
        company: "Misfat",
        color: "#3781c2",
        companylogo: "https://play-lh.googleusercontent.com/lF9kXudbaWd9reQtOQ4tqv04JEstv5820LbmMs4JpX0ed27rU33rNcOudmBk-Qrjx08",
        date: "Jun 2022 – Aug 2022",
        desc: "I have completed 2 months internship in web developement",
        // descBullets: [
        //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        // ]
      },
      
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    ]
  };

  constructor() { }

  ngOnInit(): void {
  }

}
