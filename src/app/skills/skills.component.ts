import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  skillsSection = {
    title: "What I do💁‍♂️",
    subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
    skills: [
      "⚡ Develop highly interactive Front end / User Interfaces for your web applications",
      "⚡ Creating application backend in Spring boot",
      "⚡ Proficient in Terraform for infrastructure as code (IaC) automation",
      "⚡ Skilled in Ansible for configuration management and deployment automation",
      "⚡ Experienced in Docker for containerization of applications",
      "⚡ familiar with Jenkins and GitLab CI for continuous integration and continuous delivery (CI/CD)",
      "⚡ Skilled in Kubernetes for container orchestration",
      "⚡ Proficient in Git and GitHub/GitLab for version control and collaborative development"
    ]
  };
  constructor() { }

  ngOnInit(): void {
  }

}
