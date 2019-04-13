function time(func, timesToRun, intervalBetween) {
	//Setup default variables.
	func = func || new Function()
	timesToRun = timesToRun || 1

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
			console.log(`Run #${i}: ${(endTime - startTime) / 1000}`)
    	}, intervalBetween)
	}
}
