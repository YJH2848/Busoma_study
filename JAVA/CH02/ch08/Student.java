package ch08;

public class Student {
		private int grade;
		private String name;
		private int number;
		public Student() {
			
		}
		public Student(int grade, String name, int number) {
			this.grade = grade;
			this.name = name;
			this.number = number;
			
		}
		
		
		public int getGrade() {
			return grade;
		}
		public void setNumber(int number) {
			this.number = number;
		}
		public void setName(String name) {
			this.name = name;
		}
		public void setGrade(int grade) {
			this.grade = grade;
		}
		public int getNumber() {
			return number;
		}
		public void showStudentInfo() {
			System.out.println("학번은 "+number+"이고, 이름은 "+name+"이고, 학년은 "+grade+"입니다");
		
		
		
	}

}
