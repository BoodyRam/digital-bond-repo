import { Component } from '@angular/core';

@Component({
  selector: 'app-career',
  standalone: true,
  imports: [],
  templateUrl: './career.component.html',
  styleUrl: './career.component.css'
})
export class CareerComponent {
  jobs = [
    {
      id: 1,
      title: 'Frontend Developer',
      location: 'Remote',
      description: 'Build and maintain beautiful user interfaces using Angular.'
    },
    {
      id: 2,
      title: 'Backend Developer',
      location: 'New York, NY',
      description: 'Develop and optimize server-side logic and APIs.'
    },
    {
      id: 3,
      title: 'UI/UX Designer',
      location: 'San Francisco, CA',
      description: 'Design engaging user experiences and create prototypes.'
    }
  ];

  apply(jobId: number) {
    alert(`Applied for job ID: ${jobId}`);
  }
}
