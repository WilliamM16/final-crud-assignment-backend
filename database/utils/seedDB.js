const { Employee, Task } = require('../models');

const seedDB = async () => {
	const dummyEmployee = await Employee.create({
		firstname: "Max",
		lastname: "Fence",
		department: "Finance"
	});
	const dummyEmployee2 = await Employee.create({
		firstname: "Sonia",
		lastname: "Ann",
		department:"Media"
	});

	const dummyTask = await Task.create({
		description: "preperation",
        prioritylevel: "low",
        completionstatus: "0%"
	});

	await dummyTask.setEmployee(dummyEmployee);
	
}

module.exports = seedDB;