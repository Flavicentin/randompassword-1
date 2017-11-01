
// adds all words with the specified number of letters to the provided array
// will not happen instantaneously
function getWords(numLetters, wordArray) {
    var req = new XMLHttpRequest();
    var sURL = "./words_" + numLetters + ".txt";
    req.open("GET", sURL, true);
    req.send(null);
    
    req.onreadystatechange = function () {
        if (req.readyState === 4 && req.status === 200) {
            var type = req.getResponseHeader('Content-Type');
            if (type.indexOf("text") !== 1) {
                var words = req.responseText.split("\n");
                for (var i = 0; i < words.length; i++) {
                    if (words[i] === "" || words[i] === " ") {
                        continue;
                    }
                    wordArray.push(words[i]);
                }
            }
        }
    }
}

export getWords;
