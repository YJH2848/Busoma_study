import ch01.MyLinkedList;
import ch01.MyListNode;
public class MyListQueue extends MyLinkedList implements IQueue{

	private MyListNode front, rear;
	
	public MyListQueue() {
		front = null;
		rear = null;
	}
	@Override
	public void enQueue(String data) {
		MyListNode newNode;
		if(isEmpty()) {
			newNode = addElement(data);
			front = newNode;
			rear = newNode;
		}
		else {
			newNode = addElement(data);
			rear = newNode;
		}
	}

	@Override
	public String deQueue() {
		if(isEmpty()) {
			System.out.println("현재 Queue는 비어있습니다.");
			return null;
		}
		String data;
		data = front.getData();
		front = front.next;
		if(front == null) {
			rear = null;
		}
		
		
		return data;
	}

	@Override
	public void printAll() {
		MyListNode temp;
		temp = front;
		while(temp != null) {
			System.out.println("");
		}
		
	}
	
}
