using BugTracker.Domain;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Threading.Tasks;

namespace BugTracker.Services.ADO
{
    public class BugQueryService : ServiceBase, IBugQueryService
    {
        public async Task<IList<Bug>> GetBugsList()
        {
            using (var conn = new SqlConnection(ConnectionString))
            {
                using (var cmd = conn.CreateCommand())
                {
                    var retVal = new List<Bug>();

                    cmd.CommandType = CommandType.Text;
                    cmd.CommandText = "SELECT Id, Title, Status FROM Bug ORDER BY Id";

                    try
                    {
                        conn.Open();
                        using (var reader = await cmd.ExecuteReaderAsync())
                        {
                            while (await reader.ReadAsync())
                            {
                                retVal.Add(new Bug
                                {
                                    Id = int.Parse(reader["Id"].ToString()),
                                    Title = reader["Title"].ToString(),
                                    Status = (BugStatus)Enum.Parse(typeof(BugStatus), reader["Status"].ToString())
                                });
                            }
                            return retVal;
                        }
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
