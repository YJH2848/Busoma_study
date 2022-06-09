package ch07;

public class student {
	int number;
	String name;
	Subject math;
	Subject korean;
	
	public student(int number, String name) {
		this.number = number;
		this.name = name;
		math = new Subject();
		korean = new Subject();
		
	}
	
	public void setKoreanScore(String name, int score) {
		korean.subjectName = name;
		korean.subjectScore = score;
	}
	public void setmathScore(String name, int score) {
		math.subjectName = name;
		math.subjectScore = score;
	}
	
	public void showStudentScore() {
		int sum = korean.subjectScore + math.subjectScore;
		
		System.out.println("학생의 총점은 "+sum+"입니다.");
	}
	
}

