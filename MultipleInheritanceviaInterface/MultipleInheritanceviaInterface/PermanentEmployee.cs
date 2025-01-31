
namespace WiproDay5
{
    internal class PermanentEmployee : IEmployee
    {
        public int empid { get; set; }
        public string empname { get; set; }
        public int salary { get; set; }

        internal void AttendMeetings()
        {
            throw new NotImplementedException();
        }

        internal void BasicDetails()
        {
            throw new NotImplementedException();
        }

        internal void SalaryDetails()
        {
            throw new NotImplementedException();
        }
    }
}