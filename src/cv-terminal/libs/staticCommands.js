export const staticCommands = (data) => [
  {
    "command": "about",
    "description": "Displays information about me",
    "responseType": "code",
    "value": JSON.stringify(data.bio, null, 2).split("\n")
  },
  {
    "command": "experience",
    "description": "Display the list of my professional experience",
    "responseType": "table",
    "headers": [
      "Year",
      "Role",
      "Company",
      "Description"
    ],
    "rows": data.experience.map(item => [
      `${item.years.to}<br/>${item.years.from}`,
      item.roles.join('<br/>'),
      `<a href=\"${item.company.link}\" target=\"blank\">${item.company.name}</a><br/>${item.location.city}, ${item.location.country}`,
      `<ul>${item.responsibilities.map(resp => `<li>${resp}</li>`).join('')}</ul>`
    ])
  },
  {
    "command": "education",
    "description": "Display the list of academic experience",
    "responseType": "table",
    "headers": [
      "Year",
      "Degree",
      "University / Department",
      "Description"
    ],
    "rows": data.education.map(item => [
      `${item.years.to}<br/>${item.years.from}`,
      `${item.degree}<br/>${item.area}`,
      `<a href=\"${item.university.link}\" target=\"blank\">${item.university.name} University</a><br/><a href=\"${item.department.link}\" target=\"blank\">${item.department.name}</a>`,
      `<ul>${item.topics.map(topic => `<li>${topic}</li>`).join('')}</ul>`
    ])
  },
  {
    "command": "skills",
    "description": "Display the list of my skills",
    "responseType": "list",
    "value": data.skills
  }
];