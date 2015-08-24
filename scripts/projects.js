var projects = {},
	projectsData = require('./../projects.json'),
	projects = projectsData.projects.reverse(),
	experiments = projectsData.experiments.reverse();

projects.getProjects = function() {
	return projects;
};

projects.getExperiments = function() {
	return experiments;
};

projects.getById = function(projects, id) {
	//Takes project array and return project by id	
}; 

projects.getByKey = function(key) {
	var i, j, 
		projects = this.getProjects(),
		matchedProjects = [],
		skills;
		
	if(key === 'projects') {
		return this.getProjects();	
	}	

	if(key === 'experiments') {
		return this.getExperiments();	
	}

	for (i=0; i<projectsData.projects.length; i++) {
		skills = projects[i].skills;

		for(j=0; j<skills.length; j++) {
			skills[j] = skills[j];
			if(skills[j].toLowerCase() === key.toLowerCase()) {
				matchedProjects.push(projects[i]);
				break;
			}
		}
	}

	return matchedProjects;
};

//To store current state of projects navigation
//This information will be used to preserve state
projects.currentState = {}

module.exports = projects;