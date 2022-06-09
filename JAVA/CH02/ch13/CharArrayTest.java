package ch13;

public class CharArrayTest {

	public static void main(String[] args) {
		char[] alphabets = new char[26];
		
		for(int i = 0; i<alphabets.length; i++) {
			alphabets[i] = (char)(65+i);
		}
		for(char a : alphabets) {
			System.out.print(a+" ");
		}
	}

}
