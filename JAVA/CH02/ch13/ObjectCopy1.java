package ch13;

public class ObjectCopy1 {

	public static void main(String[] args) {
		Book[] library = new Book[5];
		Book[] copyLibrary = new Book[5];
		
		library[0] = new Book("»ï±¹Áö1", "Ä§Âø¸Ç", 12000);
		library[1] = new Book("»ï±¹Áö2", "Ä§Âø¸Ç", 12000);
		library[2] = new Book("»ï±¹Áö3", "Ä§Âø¸Ç", 12000);
		library[3] = new Book("»ï±¹Áö4", "Ä§Âø¸Ç", 12000);
		library[4] = new Book("»ï±¹Áö5", "Ä§Âø¸Ç", 12000);
		
		
		copyLibrary[0] = new Book("»ï±¹Áö1", "Ä§Âø¸Ç", 12000);
		copyLibrary[1] = new Book("»ï±¹Áö2", "Ä§Âø¸Ç", 12000);
		copyLibrary[2] = new Book("»ï±¹Áö3", "Ä§Âø¸Ç", 12000);
		copyLibrary[3] = new Book("»ï±¹Áö4", "Ä§Âø¸Ç", 12000);
		copyLibrary[4] = new Book("»ï±¹Áö5", "Ä§Âø¸Ç", 12000);
		
		System.arraycopy(library, 0, copyLibrary, 0, 5);
		copyLibrary[0].setAuthor("»ýÅÃÁãÆä¸®");
		copyLibrary[0].setName("¾î¸°¿ÕÀÚ");
		
		for(Book book : library) {
			book.showInfo();
			System.out.println("==============================");
		}
		System.out.println("***************************");
		for(Book book : copyLibrary) {
			book.showInfo();
			System.out.println("==============================");
		}

	}

}
