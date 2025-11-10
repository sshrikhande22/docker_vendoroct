import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PopupDataService {
private popupData: { [key: string]: string[] } = {
    escalations: [
      "Escalation 1: AI/ML - High Priority",
      "Escalation 2: Serverless - Medium Priority",
      "Escalation 3: Data Analytics - Low Priority"
    ],
    teamGrowthPlan: [
      "Conduct one-on-one meetings with team members",
      "Identify skill gaps and training needs",
      "Set individual performance goals"
    ],
    topPerformers: [
      "Dyawara Sai Chandra",
      "Mounika Kondreddigari",
      "Purushotham Kandi"
    ],
    averagePerformers: [
      "Aayush Goyal",
      "Sandeep Kumar",
      "Dhivagar S"
    ],
    bottomPerformers: [
      "Ankur Kumar",
      "Naman Bhagoliwal",
      "Sangeetha Gopalsamy"
    ]
  };

  constructor() { }

  getPopupData(type: string): string[] {
    return this.popupData[type] || [];
  }
}