internal class Program
{
    private static void Main(string[] args)
    {
        Console.WriteLine("enter rows");
        int rows = int.Parse(Console.ReadLine());
        Console.WriteLine("enter coloumns");
        int cols = int.Parse(Console.ReadLine());
        int[,] mtrx = new int[rows, cols];
        for (int i = 0; i < rows; i++)
        {
            for (int j = 0; j < cols; j++)
            {
                Console.WriteLine($"Element[{i},{j}]");
                mtrx[i, j] = int.Parse(Console.ReadLine());
            }
        }
        for (int i = 0; i < rows; i++)
        {
            for (int j = 0; j < cols; j++)
            {
                Console.Write(mtrx[i, j] + " ");
            }
            Console.WriteLine();
        }
        int sum = 0;
        for (int i = 0; i < rows; i++)
        {
            for (int j = 0; j < cols; j++)
            {
                {
                    sum += mtrx[i, j];
                }
            }
            Console.WriteLine("sum" + sum);
        }
    }
}
                