package ch02;

public class VIPCustomer extends Customer{
	public VIPCustomer(String name) {
		this.name = name;
		this.salesRatio = 0.1;
		this.bonusRatio = 0.05;
		this.bonusPoint = 0.05;
		this.grade = "none";
	}
	
	

}
