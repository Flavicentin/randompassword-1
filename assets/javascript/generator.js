
var words4 = [];
var words5 = [];
var words6 = [];
var words7 = [];
var words8 = [];
var words9 = [];
var words10 = [];
var words11 = [];
var words12 = [];

getWords(4, words4);
getWords(5, words5);
getWords(6, words6);
getWords(7, words7);
getWords(8, words8);
getWords(9, words9);
getWords(10, words10);
getWords(11, words11);
getWords(12, words12);

function getWordsOfLength(length) {
	if (length === 4) {
		return words4;
	} else if (length === 5) {
		return words5;
	} else if (length === 6) {
		return words6;
	} else if (length === 7) {
		return words7;
	} else if (length === 8) {
		return words8;
	} else if (length === 9) {
		return words9;
	} else if (length === 10) {
		return words10;
	} else if (length === 11) {
		return words11;
	} else if (length === 12) {
		return words12;
	} else {
		return [];
	}
}

function getXWordsFromList(x, list) {
	var result = [];
	for (var i = 0; i < x; i++) {
		var word = list[Math.floor(Math.random() * list.length)];

		if (result.includes(word)) {
			i--;
		} else {
			result[i] = (word);
		}
	}
	return result;
}

// takes minimum and maximum password length and desired length of each output list as parameters
// returns an array of word arrays
function getWordLists(minLength, maxLength, listLength) {
	var wordLists = [];

	var possibleLengths = [];
	for (var i = 2; i <= 4; i++) { // 2 and 5 can be substituted for other limits if need be
		if ((maxLength / i) >= 4 && (minLength / i <= 12)) {
			possibleLengths.push(i);
		}
	}

	if (possibleLengths.length === 0) {
		return wordLists;
	}

	var numLists = possibleLengths[Math.floor(Math.random() * possibleLengths.length)];
	var min = 0;
	var max = 0;
	for (var i = 0; i < numLists; i++) {
		if (max >= maxLength) {
			return []; // abort, abort!
		}
		var wordPool = [];
		var poolMax = 4;
		var poolMin = maxLength;
		for (var j = Math.max(4, Math.floor(minLength / numLists)); j <= Math.min(12, Math.ceil(maxLength / numLists)); j++) {
			if (j > maxLength - max) break;
			if (j > poolMax) poolMax = j;
			if (j < poolMin) poolMin = j;
			if (i === numLists - 1 && min + j < minLength) continue;
			if (poolMax + max > maxLength) {
				return wordLists; // whoops, don't go too far
			}

			var list = getWordsOfLength(j);
			for (var k = 0; k < list.length; k++) {
				wordPool.push(list[k]);
			}
			
		}
		max += poolMax;
		min += poolMin;
		wordLists[i] = (getXWordsFromList(listLength, wordPool));
	}
	return wordLists;
}

export { getWordsOfLength, getXWordsFromList, getWordLists };
