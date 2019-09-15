package java_class;

public class abstractDemo1 {
    public static void main(String[] args) {
        Dog d = new Dog();
        d.barking();
    }}
abstract class Animal{
    String name = "DOG";
    final int num = 10;

    public void run(){};
}
class Dog extends Animal{
    public void barking(){
        System.out.println(name);
    }
}

