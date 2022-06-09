package ch14;

public class StudentTest {
	public static void main(String[] args) {
		Student choi = new Student(1117, "choi");
		Student kim = new Student(1212, "kim");
		
		choi.addSubject("OS", 100);
		choi.addSubject("수학", 100);
		
		kim.addSubject("OS", 95);
		kim.addSubject("수학", 80);
		kim.addSubject("영어", 90);
		choi.showInfo();
		kim.showInfo();
	}

}
