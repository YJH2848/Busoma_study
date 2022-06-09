package ch11;

public class EmployeeTest {

	public static void main(String[] args) {
		Employee choi = new Employee("choi");
		Employee kim = new Employee("kim");
		
		choi.setEmployeeNumber();
		kim.setEmployeeNumber();
		
		choi.showInfo();
		kim.showInfo();
	}

}
