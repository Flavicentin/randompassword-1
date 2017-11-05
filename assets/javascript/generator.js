import { words4, words5, words6, words7, words8, words9, words10, words11, words12 } from './word-lists.js';

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
};

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
};

// takes an array as input, shuffles it, and returns the same array (modifies the input)
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
};
/*
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
		var lengths = [];
		var wordPool = [];
		var poolMax = 4;
		var poolMin = maxLength;
		for (var j = Math.max(4, Math.floor(minLength / numLists)); j <= Math.min(12, Math.ceil((maxLength - (4 / numLists)) / numLists)); j++) {
			if (j > maxLength - max) break;
			if (j > poolMax) poolMax = j;
			if (j < poolMin) poolMin = j;
			if (i === numLists - 1 && min + j < minLength) continue;
			if (poolMax + max > maxLength) {
				return wordLists; // whoops, don't go too far
			}

			lengths.push(j);
			var list = getWordsOfLength(j);
			for (var k = 0; k < list.length; k++) {
				wordPool.push(list[k]);
			}

		}
		console.log(lengths);
		max += poolMax;
		min += poolMin;
		if (wordPool.length > listLength) {
			wordLists[i] = (getXWordsFromList(listLength, wordPool));
		}
	}
	return shuffle(wordLists);
};*/
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

	var ranges = [];
	var totalMin = 0;
	var totalMax = 0;
	for (var i = 0; i < numLists; i++) {
		ranges[i] = [];
		var listMin = Math.max(4, Math.min(12, Math.ceil((minLength - totalMin) / (numLists - i))));
		ranges[i][0] = (listMin);
		totalMin += listMin;

		var listMax = Math.max(listMin, Math.min(12, Math.floor((maxLength - totalMax) / (numLists - i))));
		ranges[i][1] = (listMax);
		totalMax += listMax;
	}

	for (var i = 0; i < numLists; i++) {
		var wordPool = [];
		wordLists[i] = [];
		for (var l = ranges[i][0]; l <= ranges[i][1]; l++) {
			var lengthWords = getWordsOfLength(l);
			for (var j = 0; j < lengthWords.length; j++) {
				wordPool.push(lengthWords[j]);
			}
		}
		var finalList = getXWordsFromList(listLength, wordPool);
		for (var j = 0; j < finalList.length; j++) {
			wordLists[i].push(finalList[j]);
		}
	}
	return shuffle(wordLists);
};

export {getWordsOfLength, getXWordsFromList, getWordLists};
