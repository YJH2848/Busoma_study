package ch11;

public class Employee {
	static int number = 1000;
	private String name;
	private int employeeNumber;
	
	
	public String getName() {
		return name;
	}


	public void setName(String name) {
		this.name = name;
	}


	public int getEmployeeNumber() {
		return employeeNumber;
	}


	public void setEmployeeNumber() {
		employeeNumber = number;
		number++;
	}


	public Employee(String name) {
		this.name = name;
		
	}
	public void showInfo() {
		System.out.println(name+"님의 사번은"+employeeNumber+"입니다.");
	}
}
