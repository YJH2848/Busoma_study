package ch05;

public abstract class Car {
	public void startCar() {
		System.out.println("브레이크를 밞습니다.");
		System.out.println("시동을 겁니다.");
	}
	public void turnOff() {
		System.out.println("브레이크를 밞습니다.");
		System.out.println("시동을 끕니다.");
	}
	public abstract void drive();
	public abstract void stop();
	
	public void run() {
		startCar();
		drive();
		stop();
		turnOff();
	}
}
