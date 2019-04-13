function time(func, timesToRun, intervalBetween) {
	//Setup default variables.
	func = func || new Function()
	timesToRun = timesToRun || 10

	let result = {
		averageTime: 0,
		times: []
	}
	//Setup compiled so we don't have to re-create a new function every time we run it.
	compiled = new Function(func)

	//Run the function multiple times, and take the time it took each time.
	for (let i=0; i<timesToRun; i++) {
		setTimeout(() => {
			let startTime = new Date()
			compiled()
			let endTime = new Date()
			result.times.push((endTime - startTime) / 1000)
			console.log(`Run #${i + 1}: ${(endTime - startTime) / 1000}`)
    		}, intervalBetween)
	}
	
	//Get the sum of all the times.
	for (let o=0; o<result.times.length; o++) {
		//result.averageTime += result.time[o]
		alert(result.times[o])
	}
	//Get the average of all the numbers.
	result.averageTime /= result.times.length
	
	return result
}
