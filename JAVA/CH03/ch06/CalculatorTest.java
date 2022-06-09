package ch06;

public class CalculatorTest {

	public static void main(String[] args) {
		int num1 =10;
		int num2 =2;
		Calc cal = new CompleteCalc();
		
		System.out.println(num1+"+"+num2+"="+cal.add(num1, num2));
		System.out.println(num1+"-"+num2+"="+cal.substract(num1, num2));
		System.out.println(num1+"*"+num2+"="+cal.times(num1, num2));
		System.out.println(num1+"/"+num2+"="+cal.divide(num1, num2));
		

	}

}
