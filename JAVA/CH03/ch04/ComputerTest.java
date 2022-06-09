package ch04;

public class ComputerTest {

	public static void main(String[] args) {
		Computer desktop = new Desktop();
		
		desktop.turnOff();
		desktop.display();
		
		Computer mynotebook = new MyNoteBook();
		mynotebook.turnOff();
		mynotebook.display();
		mynotebook.typing();

	}

}
