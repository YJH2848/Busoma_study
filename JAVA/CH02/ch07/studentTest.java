package ch07;

public class studentTest {
	public static void main(String[] args) {
		student choi = new student(100, "choi");
		student kim = new student(101, "kim");
		
		choi.setKoreanScore("국어", 100);
		choi.setmathScore("수학", 100);
		
		kim.setKoreanScore("국어", 90);
		kim.setmathScore("수학", 95);
		
		
		choi.showStudentScore();
		kim.showStudentScore();
		
		
	}
}
