import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skill-progress',
  templateUrl: './skill-progress.component.html',
  styleUrls: ['./skill-progress.component.scss']
})
export class SkillProgressComponent implements OnInit {

  techStack = {
    viewSkillBars: true,
    experience: [
      {
        Stack: "Backend",
        progressPercentage: "75%"
      },
      {
        Stack: "Frontend",
        progressPercentage: "60%"
      },
      
      {
        Stack: "Programming",
        progressPercentage: "60%"
      },
      {
        Stack: "Docker",
        progressPercentage: "50%"
      },
      {
        Stack: "jenkins/gitlab Ci",
        progressPercentage: "30%"
      }
      ,
      {
        Stack: "Ansible/Terraform",
        progressPercentage: "30%"
      }
    ]
  };
  constructor() { }

  ngOnInit(): void {
  }

  progressStyle(percentage:string){
    return {    width: percentage}
  }

}
