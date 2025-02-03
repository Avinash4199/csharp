using WhyDelegatesDemo;

namespace WhyDelegatesDemo
{
    internal class Program
    {
        private static void Main(string[] args)
        {
            List<Employee> employees = new List<Employee>()
            {
            new Employee(){Empid = 1,Name="Lekhana",experienceinyears=2,salary=50000 },
             new Employee(){Empid = 1,Name="Tasleema",experienceinyears=6,salary=80000 },
              new Employee(){Empid = 1,Name="Harika",experienceinyears=5,salary=50000 },
               new Employee(){Empid = 1,Name="Madhavilatha",experienceinyears=7,salary=80000 },
                new Employee(){Empid = 1,Name="Poojitha",experienceinyears=3,salary=50000 },
                 new Employee(){Empid = 1,Name="Sony",experienceinyears=8,salary=90000 }
             };
            DelPromote delpromote = new DelPromote(IsPromote);//created instance for delegate ,set the target method

            Employee.PromoteEMployee(employees, delpromote);//calling the method Promote Employee
        }

        static bool IsPromote(Employee emp)
        {
            if (emp.salary > 70000)
            {
                return true;
            }
            return false;
        }
    }
}