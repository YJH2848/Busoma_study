package ch13;

public class BookArrTest {
	public static void main(String[] args) {
		Book[] library = new Book[5];
		
		library[0] = new Book("»ï±¹Áö1", "Ä§Âø¸Ç", 12000);
		library[1] = new Book("»ï±¹Áö2", "Ä§Âø¸Ç", 12000);
		library[2] = new Book("»ï±¹Áö3", "Ä§Âø¸Ç", 12000);
		library[3] = new Book("»ï±¹Áö4", "Ä§Âø¸Ç", 12000);
		library[4] = new Book("»ï±¹Áö5", "Ä§Âø¸Ç", 12000);
		
		for(Book book : library) {
			book.showInfo();
			System.out.println("==============================");
		}
	}
}
