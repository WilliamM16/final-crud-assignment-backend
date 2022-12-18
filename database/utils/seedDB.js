const { Employee, Task } = require('../models');

const seedDB = async () => {
	const dummyEmployee = await Employee.create({
		firstname: "Max",
		lastname: "Fence",
		department: "finance"
	});
	const dummyEmployee2 = await Employee.create({
		firstname: "Sonia",
		lastname: "Nemona"
	});

	const dummyTask = await Task.create({
		description: "finance description",
        prioritylevel: "1",
        completionstatus: "WIP"
	});

	await dummyTask.setEmployee(dummyEmployee);
	
}

module.exports = seedDB;