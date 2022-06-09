package ch08;

import ch08.Student;

public class StudentTest {

	public static void main(String[] args) {
		Student mrchoi = new Student(1, "mrchoi", 100);
		Student kim = new Student();
		kim.setNumber(200);
		
		kim.setGrade(3);
		kim.setName("kim");
		
		System.out.println(kim.getNumber());
		mrchoi.showStudentInfo();

	}

}
