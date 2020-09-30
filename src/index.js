
// You should implement your task here.

module.exports = function towelSort (matrix) {

	let sortedMatrix = [];

	if (arguments.length === 0) {
		return [];
	}

	for (let i = 0; i < matrix.length; i++) {		
		for (let j = 0; j < matrix.length; j++) {
			sortedMatrix[i, j] = matrix[i, j];
		}
		if (i % 2 !== 0) {
			matrix[i] = matrix[i].reverse();			
		}	
	}

  return sortedMatrix.flat();

}
