package ch02;

public class Customer {
	protected int id;
	protected String name;
	protected String grade;
	protected double bonusPoint;
	protected double bonusRatio;
	protected double salesRatio;
	protected static int number= 100;
	
	public Customer() {}
	public Customer(String name) {
		this.name = name;
		this.salesRatio = 0;
		this.bonusRatio = 0.01;
		this.grade ="silver";
		this.id = number++;
		this.bonusPoint = 10;
		
	}
	public void calcPrice(int price) {
		
		System.out.println(price+"물건을 구매시 "+(price-(int)(price*salesRatio))+"원을 지불합니다.");
		System.out.println("적립은"+(int)price*bonusRatio+"원 적립됩니다.");
	}
	public void showInfo() {
		System.out.println(name+"님의 등급은"+grade+"이고 "+name+"님의 세일율은 "+salesRatio+"% 보너스는 "+bonusRatio+"% 이고 보너스포인트"+bonusPoint+"% 이다");
		
	}
}
