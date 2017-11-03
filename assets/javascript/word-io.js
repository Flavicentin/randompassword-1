
// adds all words with the specified number of letters to the provided array
// will not happen instantaneously
function getWords(numLetters, wordArray) {
    var req = new XMLHttpRequest();
    var sURL = "../assets/word_banks/words_" + numLetters + ".txt";
    req.timeout = 100;
    req.onreadystatechange = function (e) {
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
        console.log("words_" + numLetters + ".txt : " + req.status + ", " + req.readyState);
        if (e.lengthComputable) {
            var percentComplete = e.loaded / e.total;
            console.log(percentComplete * 100 + "% Loaded");
        } else {
            console.log("Unknown load time");
        }
    }
    req.ontimeout = function (e) {
        //console.log("Request Timed Out");
    };
    req.onprogress = function (e) {
        if (e.lengthComputable) {
            var percentComplete = e.loaded / e.total;
            //console.log(percentComplete * 100 + "% Loaded");
        } else {
            //console.log("Unknown load time");
        }
    };
    req.onerror = function (e) {
        if (e.lengthComputable) {
            var percentComplete = e.loaded / e.total;
            //console.log(percentComplete * 100 + "% Loaded on error");
        } else {
            //console.log("Unknown load time on error");
        }
    }
    req.onloadstart = function (e) {
        if (e.lengthComputable) {
            var percentComplete = e.loaded / e.total;
            console.log(percentComplete * 100 + "% Loaded");
        } else {
            console.log("Unknown load time on start");
        }
    }

    req.open("GET", sURL, true);
    req.send();
};

export {getWords};
