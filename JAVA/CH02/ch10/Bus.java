package ch10;

public class Bus {
	private String number;
	private int money;
	private int passengerCount;
	
	
	public Bus(String number) {
		this.number = number;
	}
	
	public void take(int money) {
		this.money += money;
		this.passengerCount++;
	}
	
	public void showInfo() {
		System.out.println(number+"번 버스의 승객수는"+passengerCount+"이고, 남은 돈은"+money+"입니다.");
	}
}
