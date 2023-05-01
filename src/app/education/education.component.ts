import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  timeline = [
    // {
    //   heading: "Infosys",
    //   duration: "Present",
    //   subtitle: "",
    //   content: "Upcoming Full stack develover at Infosys!",
    //   className1: "mar-left",
    //   className2: "prt_about_learnbox_right"
    // },
    {
      heading: "Computer Science & Engineering",
      duration: "2023",
      subtitle: "FST Manar University, Tunisia",
      content: "",
      className1: "",
      className2: ""
    },
    {
      heading: "High school diploma",
      duration: "2019",
      subtitle: "Secondary Public School , jedaida-mannouba",
      content: "Successfully completed in 2019 .\n" +
        "",
      className1: "",
      className2: ""
    }
    ];

  constructor() { }

  ngOnInit(): void {
  }

}
