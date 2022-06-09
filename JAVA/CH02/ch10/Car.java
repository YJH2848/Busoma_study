package ch10;

public class Car {
	private String name;
	public Car(String name) {
		this.name = name;
	}
	
	public int take(Gasstation gasstation) {
		return gasstation.oiling(3);
	}
}
