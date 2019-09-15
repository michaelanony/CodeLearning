package classLearning;

/**
 * 继承：多个类有共同的成员变量和成员方法，抽取到另外一个类中（父类），
 * 在让多个类去继承这个父类，我们的多个类就可以获取到父类中到成员。
 *  Java只支持单一继承
 *  子类只能获取父类非私有成员
 *  成员变量就近获取
 *
 */
public class ExtendsDemo1 {
    public static void main(String[] args) {
        Dota d = new Dota();
        d.start();
        LOL l = new LOL();

    }
}
class Game{
    String name;
    double version;
    public void start(){
        System.out.println("start...");
    }
    public void stop(){
        System.out.println("Ending...");
    }
}
class Dota extends Game{

}

class LOL extends Game {

}
