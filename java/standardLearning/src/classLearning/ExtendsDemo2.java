package classLearning;

import java.awt.desktop.SystemSleepEvent;

/**
 *  super可以获取父类成员变量和方法
 **/
public class ExtendsDemo2 {
    public static void main(String[] args) {
        kid ks = new kid();
        ks.show();
    }
}
class PCGame{
   String name = "dad";
}

class kid extends PCGame{
    String name = "kid";

    public void show(){
        String name = "inside";
        System.out.println(name);
        System.out.println(this.name);
        System.out.println(super.name);
    }
}
