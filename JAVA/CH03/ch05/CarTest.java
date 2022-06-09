package ch05;

public class CarTest {
	public static void main(String[] args) {
		Car ai = new AICar();
		ai.run();
		
		Car manual = new ManualCar();
		manual.run();
	}
}
