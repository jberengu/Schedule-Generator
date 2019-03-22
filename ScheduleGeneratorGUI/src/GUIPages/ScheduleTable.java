// Our package
package GUIPages;

// Packages to import 
import javax.swing.JFrame; 
import javax.swing.JScrollPane; 
import javax.swing.JTable; 
  
public class ScheduleTable { 
    // frame 
    JFrame f; 
    // Table 
    JTable j; 
  
    // Constructor 
    ScheduleTable(String[][] data) 
    { 
        // Frame initiallization 
        f = new JFrame(); 
  
        // Frame Title 
        f.setTitle("Department Schedule"); 
  
        // Column Names 
        String[] columnNames = { "Instructors", "Course(s)", "Times/Days of Classes", "Rm. No.", "M", "T", "W", "Th", "F" };
  
        // Initializing the JTable 
        j = new JTable(data, columnNames); 
        j.setBounds(30, 40, 200, 300); 
  
        // adding it to JScrollPane 
        JScrollPane sp = new JScrollPane(j); 
        f.add(sp); 
        // Frame Size 
        f.setSize(500, 200); 
        // Frame Visible = true 
        f.setVisible(true); 
    } 
  
    // Driver  method 
    public static void main(String[] args) 
    { 
        String[][] data = {
            { null, null, null, null, null, null, null, null, null }
        };
        
        new ScheduleTable(data); 
    } 
}