package ch13;

public class Book {
	
	private static int number = 100;
	
	private String name;
	private String author;
	private int price;
	private int bookNumber;
	
	public Book(String name, String author, int price) {
		this.name = name;
		this.author = author;
		this.price = price;
		this.bookNumber = number++;
		
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getAuthor() {
		return author;
	}

	public void setAuthor(String author) {
		this.author = author;
	}

	public int getPrice() {
		return price;
	}

	public void setPrice(int price) {
		this.price = price;
	}

	public int getBookNumber() {
		return bookNumber;
	}

	public void setBookNumber(int bookNumber) {
		this.bookNumber = bookNumber;
	}
	
	public void showInfo() {
		System.out.println("책이름은"+name);
		System.out.println("책저자는"+author);
		System.out.println("책가격"+price);
		System.out.println("책번호"+bookNumber);
		
	}
}
