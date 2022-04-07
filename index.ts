import expect from './expect'
import measure from './measure'
import times from 'lodash/times'
import { replace, result } from 'lodash'

expect(findDuplicateWords('one two two three three three'))
	.toEqual(['two', 'three'])

expect(findDuplicateWords(`The death finds everyone,
    everyone loves yourself to death`))
	.toEqual(['death', 'everyone'])

// #region
// Generate test data, which the second test data is twice the size of the first one
const data10k = times(10_000).join(' ')
const data20k = times(20_000).join(' ')

// Measure time spent in milliseconds for each test data
//const time10k = measure(() => { findDuplicateWords(data10k) })
//const time20k = measure(() => { findDuplicateWords(data20k) })

// Expect the function to take 2x longer, given 2x the size of the test data
// Hence linear time performance “O(n)”
//expect(time20k).toBeLessThan(time10k * 2)
// #endregion

/**
 * You must NOT visit any websites other than
 * https://developer.mozilla.org and https://w3schools.com
 */
function findDuplicateWords(input: string): Array<string> {

	// Your implementation goes here

	const names = input.split(" ");

	for(var i=0; i < names.length; i++) {
		names[i] = names[i].replace(',', '');
		names[i] = names[i].replace('\n', '');
	}

	console.log("replacement", names)

	const count = (names : any[]) => names.reduce((result, value) => ({
		...result,
		[value]: (result[value] || 0) + 1
	}), {}); // don't forget to initialize the accumulator

	const duplicates = (dict : {
		[x: string]: number
	}) => Object
		.keys(dict)
		.filter((a) => dict[a] > 1);

	console.log(names)
	console.log(count(names))

	const res = duplicates(count(names))
	console.log("result", res); // ['two', 'three], ["death","everyone"]


	const results = res.filter(element => {
		return element !== '';
	});

	console.log("dadas",results)
	
	return results
}

