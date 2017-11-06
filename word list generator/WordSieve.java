import java.io.*;
import java.util.*;

public class WordSieve {
	
	/* 
	 * Java code used to process a list of words and add the data to a javascript file.
	 * Currently, it removes duplicate words, very common words, and words that include 
	 * characters other than lowercase letters.
	*/
	public static void main(String[] args) {
        String srcPath = "wordlist.txt";
		String filterPath = "commonwords.txt";
		String badPath = "badwords.txt";
        String destName = "words_";

        List<String> words = readFile(srcPath);
		List<String> filter = readFile(filterPath);
		List<String> bad = readFile(badPath);
		
		Iterator<String> it = words.iterator();
		while(it.hasNext()) {
			String word = it.next();
			if (shouldRemove(word, filter, bad)) {
				it.remove();
			}
		}
		
		List<List<String>> wordLists = new ArrayList<List<String>>();
		for (int i = 4; i <= 12; i++) {
			List<String> tempList = new ArrayList<String>();
			for (String word : words) {
				if (word.length() == (i)) {
					tempList.add(word);
				}
			}
			wordLists.add(tempList);
		}
		writeJS(wordLists);
    }
	
	public static boolean shouldRemove(String word, List<String> filter, List<String> bad) {
		if (word.length() < 4) {
			return true;
		}
		if (!word.chars().allMatch(c -> c < 128)) {
			return true;
		}
		if (!word.chars().allMatch(c -> Character.isLetter(c))) {
			return true;
		}
		if (!word.chars().allMatch(c -> Character.isLowerCase(c))) {
			return true;
		}
		if (bad.contains(word)) {
			return true;
		}
		if (filter.contains(word)) {
			return true;
		}
		return false;
	}
	
	public static List<String> readFile(String srcPath) {
		List<String> words = new ArrayList<String>();
		
		try {
			BufferedReader fileReader = new BufferedReader(
					new InputStreamReader(new FileInputStream(srcPath)));
			String line;
			while ((line = fileReader.readLine()) != null) {
				if (!words.contains(line)) {
					words.add(line);
				}
			}
			fileReader.close();
		} catch (IOException e) {
			e.printStackTrace();
		}
		
		return words;
	}
	
	public static void writeFile(List<String> words, String varName, String destPath) {
		try {
			BufferedWriter output = new BufferedWriter(new FileWriter(destPath));
	
			String wordArrayString = "var " + varName + " = [";
			for (String word : words) {
				wordArrayString += ("\"" + word + "\",");
			}
			output.write(wordArrayString + "];" + "\n");

			output.close();
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
	
	public static void writeJS(List<List<String>> wordLists) {
		try {
			BufferedWriter output = new BufferedWriter(new FileWriter("word-lists.js"));
	
			String vars = "";
			for (int i = 0; i < wordLists.size(); i++) {
				String wordArrayString = "var words" + (i + 4) + " = [";
				vars += ("words" + (i + 4) + (i < wordLists.size() - 1 ? ", " : ""));
				for (String word : wordLists.get(i)) {
					wordArrayString += ("\"" + word + "\",");
				}
				output.write(wordArrayString + "];" + "\n");
			}
			
			output.write("\nexport {" + vars + "};");

			output.close();
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
	
}