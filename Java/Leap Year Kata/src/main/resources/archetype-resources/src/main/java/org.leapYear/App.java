package $org.example;

/** Hello world! */
public class App {
  public static void main(String[] args) {
    int year = 1997;
    System.out.println(checkLeapYear(year));
  }

  public static boolean checkLeapYear(int year) {
    if (year % 4 != 0) {
      return false;
    } else if (year % 4 == 0) {
      return true;
    } else if (year % 400 == 0) {
      return true;
    } else if (year % 100 == 0 && year % 400 != 0) {
      return false;
    }
  }
}
