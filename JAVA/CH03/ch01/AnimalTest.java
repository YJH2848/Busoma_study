package ch01;

public class AnimalTest {
	public static void main(String[] args) {
		Person choi = new Person("choi", "gangseogu");
		Tiger bat = new Tiger("bat", "gangseogu");
		
		choi.walk("µÎ ¹ß");
		choi.drive();
		choi.showInfo();
		
		bat.walk("³× ¹ß");
		bat.hunt();
		bat.showInfo();
	}
}
.
