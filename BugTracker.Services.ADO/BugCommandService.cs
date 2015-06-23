using BugTracker.Domain;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BugTracker.Services.ADO
{
    public class BugCommandService : ServiceBase, IBugCommandService
    {
        public async Task<int> AddNewBugAsync(Bug newBug)
        {
            using (var conn = new SqlConnection(ConnectionString))
            {
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandType = CommandType.Text;
                    cmd.Parameters.Add("@title", SqlDbType.VarChar).Value = newBug.Title;
                    cmd.Parameters.Add("@description", SqlDbType.VarChar).Value = newBug.Description;
                    cmd.Parameters.Add("@status", SqlDbType.TinyInt).Value = (byte)BugStatus.New;
                    // Don't use @@IDENTITY!
                    cmd.CommandText = "INSERT INTO Bug (Title, Description, Status) VALUES (@title, @description, @status); SELECT SCOPE_IDENTITY();";

                    try
                    {
                        await conn.OpenAsync();
                        var newid = (decimal)(await cmd.ExecuteScalarAsync());
                        return (int)newid;
                    }
                    catch
                    {
                        throw;
                    }
                }
            }
        }

        public async Task UpdateStatusAsync(int bugID, BugStatus newStatus)
        {
            using (var conn = new SqlConnection(ConnectionString))
            {
                using (var cmd = conn.CreateCommand())
                {
                    var retVal = new List<Bug>();

                    cmd.CommandType = CommandType.Text;
                    cmd.Parameters.Add("@bugID", SqlDbType.Int).Value = bugID;
                    cmd.Parameters.Add("@newStatus", SqlDbType.TinyInt).Value = (int)newStatus;
                    cmd.CommandText = "UPDATE Bug SET Status=@newStatus WHERE Id=@bugID";

                    try
                    {
                        conn.Open();
                        await cmd.ExecuteNonQueryAsync();
                    }
                    catch
                    {
                        throw;
                    }
                }
            }
        }
    }
}
