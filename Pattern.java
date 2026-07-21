package study;
//             simple add mul

// public class main {
//     public static void main(String[] args) {
        // System.out.print("Hello World 1");


        // int a = 12;
        // int b = 34;
        // int sum = a+b;
        // System.out.println(sum);

        // int diff = b-a;

        // System.out.println(diff);

        // int mul = a * b ;
        // System.out.println(mul);







//                   import 



// import java.util.*;
// public class main {
//     public static void main(String[] args) {
//         Scanner sc = new Scanner(System.in);
//         String name = sc.next();
//         System.out.println(name);

//     }
// }





//.          Line


// import java.util.*;
// public class main {
//     public static void main(String[] args) {
//         Scanner sc = new Scanner(System.in);
//         String name = sc.nextLine();     // nextInt()      //nextFloat()
//         System.out.println(name);

//     }
// }




// QUE  take 2 variable 'a' & 'b' and print their sum

//.          NOTE : sum is not in bracket becz its print sum not no.

// import java.util.*;
// public class main {
//     public static void main(String[] args) {
//         Scanner sc = new Scanner(System.in);
//         int a = sc.nextInt();
//         int b = sc.nextInt();
//         int sum = a +b;

//         System.out.println(sum);

//     }
// }




//.                conditional statement


// import java.util.*;
// public class Conditions {
//     public static void main(String[] args) {
//         Scanner sc = new Scanner(System.in);
//         int age = sc.nextInt();
        

//         if(age>=18){
            

//         System.out.println("Adult");

//         }
//         else{
//             System.out.println("Not Adult");
//         }

//     }
// }






//.                  even and odd number


// import java.util.*;
// public class Conditions {
//     public static void main(String[] args) {
//         Scanner sc = new Scanner(System.in);
//         int x = sc.nextInt();

//         if(x%2==0){
//             System.out.println("Even");
//         }
//         else{
//             System.out.println("Odd");
//         }


//     }
// }





//.           largest of 3 number. equal , a is greater , a is lesser


// import java.util.*;
// public class Conditions {
//     public static void main(String[] args) {
//         Scanner sc = new Scanner(System.in);
//         int a = sc.nextInt();
//         int b = sc.nextInt();

//         if (a==b){
//             System.out.println("Equal");
//         }
//         else if(a>b){
//             System.out.println("A is greater");
//         }
//         else{
//             System.out.println("A is lesser");
//         }
        
//     }
// }





//.             button


// import java.util.*;
// public class Conditions {
//     public static void main (String[] args) {
//         Scanner sc = new Scanner(System.in);
//         int button = sc.nextInt();

//         if (button==1){
//             System.out.println("Hello");
//         }
//         else if(button==2){
//             System.out.println("Namaste");
//         }
//         else if(button==3){
//             System.out.println("Bonjour");
//         }
//         else{
//             System.out.println("Invalid Button");
//         }
//     }
// }






//.               switch case

// import java.util.*;
// public class Conditions{
//     public static void main(String[] args) {
//         Scanner sc = new Scanner (System.in);
//         int button = sc.nextInt();

//         switch(button){
//             case 1:
//                 System.out.println("Hello");
//                 break;
//             case 2:
//                 System.out.println("Namaste");
//                 break;
//             case 3:
//                 System.out.println("Bonjour");
//                 break;
//             default:
//                 System.out.println("Invalid Button");
//         }
//     }
// }






//                 for loop




// public class Loops {
//     public static void main(String[] args) {
//         for ( int counter =0; counter<11; counter=counter+1)
//         System.out.print(counter);
//     }
// }





//               while condition


// public class Loops {

//     public static void main(String[] args) {
//         int i = 0;
//         while (i<11) {
//             System.out.println(i);
//             i=i+1;
//         }
//     }
// }





//.       do while loop


// public class Loops {
//     public static void main(String[] args) {
//         int i =0;
//         do{
//             System.out.print(i++);

//         } while (i<11);
//     }
// }



 //. QUE         print the sum of 1st n natural no. 

// import java.util.*;

// public class Loops {
 
//     public static void main(String[] args) {
//         Scanner sc = new Scanner(System.in);
//         int n = sc.nextInt();

//         int sum = 0;
//         for(int i=1; i<=n; i++)
//             sum = sum +i;{

    
//     System.out.print(sum);
//             }
//         }
//  }





// QUE    print the table of a no. i/p by the user



// import java.util.*;

// public class Loops {

//     public static void main(String[] args) {
//         Scanner sc = new Scanner(System.in);
//         int n = sc.nextInt();

//         for (int i = 1; i<11; i++)
//         {
//             System.out.println(i*n);
//         }
//     }
// }






//.       print the pattern.    //NESTED LOOP


// public class Pattern {
//     public static void main(String[] args) {
//         int n = 4;
//         int m = 5;

//         for (int i =1; i<=4; i++)
//         {
//             for ( int j=1; j<=5; j++)
//             {
//                 System.out.print("*");
//             }
//             System.out.println();

//         }
//     }
// }






// QUE 2            


// public class Pattern {
//     public static void main(String[] args) {
//         int n = 4;
//         int m = 5;

//         for (int i =1; i<=n; i++)
//         {
//             for ( int j=1; j<=m; j++)
//             {

//                 if( i==1 || j==1 || i==n || j==m) {
//                 System.out.print("*");
//                 } else {
//                     System.out.print(" ");
//                 }
//             }
//             System.out.println();

//         }
//     }
// }




//         pyramid star]



// public class Pattern {
//     public static void main(String[] args) {
//         int n =4;

//         for (int i = 1; i<=n; i++)
//         {
//             for (int j=1; j<=i; j++)
//             {
//                 System.out.print("*");
//             }
//             System.out.println();
//         }
//     }
// }






// QUES 4          INVERTED PYARIMID




// public class Pattern {
//     public static void main(String[] args) {
//         int n = 4;

//         for (int i=n;i>=1; i--){
//             for (int j=1; j<=i;j++) {
//                 System.out.print("*");
//             }
//             System.out.println();
//         }
//     }
// }





//.  QUE 5.     inverted half pyramid



// public class Pattern {
//     public static void main(String[] args) {
//         int n=4;
//         for (int i=1;i<=n ; i++) {
//             for (int j=1; j<=n-i; j++) {
//                 System.out.print(" ");
//             }

//             for (int j=1; j<=i;j++) {
//                 System.out.print("*");
//             }
//             System.out.println();
//         }
//     }

// }




//   HALF PYRAMID WITH NO.



// public class Pattern {
//     public static void main(String[] args) {
//         int n=5;
//         for (int i=1;i<=n ; i++) {
//             for (int j=1; j<=i; j++) {
//                 System.out.print(j+" ");
            
//             }
//             System.out.println();
//         }
//     }

// }




//. INVERTED HALF PYRAMID WITH NO.





// public class Pattern {
//     public static void main(String[] args) {
//         int n=5;
//         for (int i=1;i<=n ; i++) {
//             for (int j=1; j<=n-i+1; j++) {
//                 System.out.print(j+" ");
            
//             }
//             System.out.println();
//         }
//     }

// }



//.        FLOYD'S TRIANGLE



// public class Pattern {
//     public static void main(String[] args) {
//         int n=5;
//         int number =1 ;

//         for (int i=1;i<=n ; i++) {
//             for (int j=1; j<=i; j++) {
//                 System.out.print(number+" ");
//                 number++;
            
//             }
//             System.out.println();
//         }
//     }

// }








//       0-1 TRIANGLE









// public class Pattern {
//     public static void main(String[] args) {
//         int n=5;

//         for (int i=1;i<=n ; i++) {
//             for (int j=1; j<=i; j++) {
//                 int sum = i+j;
//                 if (sum %2==0) {
//                     System.out.print("1");
//                 } else {
//                     System.out.print("0");
//                 }
            
//             }
//             System.out.println();
//         }
//     }

// }








// QUES 10.         BUTTERFLY PATTERN


// public class Pattern {
//     public static void main (String[] args) {
//         int n =5;

//         // upper half
//         for (int i=1; i<=n; i++) {
//             // 1st part
//             for (int j=1; j<=i; j++) {
//                 System.out.print("*");
//             }

//             // spaces
//             int spaces = 2 * (n-i);
//             for (int j=1; j<=spaces; j++) {
//                 System.out.print(" ");
//             }

//             // 2nd part

//             for(int j=1; j<=i; j++) {
//                 System.out.print("*");
//             }
//             System.out.println();
//         }
//         // lower half

//         for (int i=n; i>=1; i--) {
//             // 1st part
//             for (int j=1; j<=i; j++) {
//                 System.out.print("*");
//             }

//             // spaces
//             int spaces = 2 * (n-i);
//             for (int j=1; j<=spaces; j++) {
//                 System.out.print(" ");
//             }

//             // 2nd part

//             for(int j=1; j<=i; j++) {
//                 System.out.print("*");
//             }
//             System.out.println();
//         }

//     }
// }






//    SOLID RHOMBUS PATTERN






// public class Pattern {
//     public static void main(String[] args) {
//         int n=5;

//         for (int i=1; i<=n; i++) {
//             // spaces
//             for (int j=1; j<=n-i; j++) {
//                 System.out.print(" ");
//             }

//             // stars
//             for (int j=1; j<=n; j++) {
//                 System.out.print("*");
//             }
//             System.out.println();
//         }
//     }
// }









//  HOLLOW RHOMBUS PATTERN




// public class Pattern {
//     public static void main(String[] args) {
//         int n=5;

//         for (int i=1; i<=n; i++) {
//             // spaces
//             for (int j=1; j<=n-i; j++) {
//                 System.out.print(" ");
//             }

//             // stars
//             for (int j=1; j<=n; j++) {
//                 if (i==1 || i==n || j==1 || j==n) {
//                     System.out.print("*");
//                 } else {
//                     System.out.print(" ");
//                 }
//             }
//             System.out.println();
//         }
//     }
// }









// number pyramid pattern





// public class Pattern {
//     public static void main(String[] args) {
//         int n=5;

//         for (int i=1; i<=n; i++) {
//             // spaces
//             for (int j=1; j<=n-i; j++) {
//                 System.out.print(" ");
//             }

//             // numbers
//             for (int j=1; j<=i; j++) {
//                 System.out.print(i+" ");
//             }
//             System.out.println();
//         }
//     }
// }







// PATTERN 14.        PALINDROME PATTERN




// public class Pattern {
//     public static void main(String[] args) {
//         int n=5;

//         for (int i=1; i<=n; i++) {
//             // spaces
//             for (int j=1; j<=n-i; j++) {
//                 System.out.print(" ");
//             }

//             // numbers
//             for (int j=i; j>=1; j--) {
//                 System.out.print(j);
//             }

//             for (int j=2; j<=i; j++) {
//                 System.out.print(j);
//             }
//             System.out.println();
//         }
//     }
// }






// PATTERN 15.        DIAMOND PATTERN






public class Pattern {
    public static void main(String[] args) {
        int n=5;

        // upper half
        for (int i=1; i<=n; i++) {
            // spaces
            for (int j=1; j<=n-i; j++) {
                System.out.print(" ");
            }

            // stars
            for (int j=1; j<=(2*i)-1; j++) {
                System.out.print("*");
            }
            System.out.println();
        }

        // lower half
        for (int i=n; i>=1; i--) {
            // spaces
            for (int j=1; j<=n-i; j++) {
                System.out.print(" ");
            }

            // stars
            for (int j=1; j<=(2*i)-1; j++) {
                System.out.print("*");
            }
            System.out.println();
        }
    }
}
