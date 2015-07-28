var projects = {},
	projectsData = require('./../projects.json');

projects.getAll = function() {
	//Join all projects
};

projects.getProjects = function() {
	return projectsData.projects;
};

projects.getExperiments = function() {
	return projectsData.experiments;
};

projects.getById = function(projects, id) {
	//Takes project array and return project by id	
}; 

projects.getBySkill = function() {
	//Get projects by Skill
};

module.exports = projects;