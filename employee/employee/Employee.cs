namespace ClassMethodStaticDemo
{
    internal class Employee
    {
        private int id;
        private string? name;
        private string? dpt;
        private decimal sal;

        public Employee(int id, string? name, string? dpt, decimal sal)
        {
            this.id = id;
            this.name = name;
            this.dpt = dpt;
            this.sal = sal;
        }

        public string EmpId { get; internal set; }
        public string EmpName { get; internal set; }
    }
}