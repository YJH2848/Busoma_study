package ch10;

public class Gasstation {
	private int money;
	private String address;
	private int gasAccount;
	
	public Gasstation(String address) {
		this.address = address;
		gasAccount = 10;
	}
	
	public int oiling(int liter) {
		this.gasAccount -= liter;
		this.money += liter*6000;
		return liter*6000;
	}
	public void showInfo() {
		System.out.println(address+"지에 주유소의 남은 기름은 "+gasAccount+"리터 이고 남은 돈은 "+money+"입니다.");
	}
}
