package ch05;

public class ManualCar extends Car{

	@Override
	public void drive() {
		System.out.println("기어봉을 P->D");
		System.out.println("액셀을 밞습니다.");
		System.out.println("핸드을 조향합니다.");
	}

	@Override
	public void stop() {
		System.out.println("브레이크를 밟습니다.");
		System.out.println("기어봉을 D->P");
		System.out.println("사이드브레이크를 겁니다.");
	}
	
}
