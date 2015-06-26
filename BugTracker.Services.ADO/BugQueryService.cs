using BugTracker.Domain;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Text;
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

                    var sql = new StringBuilder();
                    sql.AppendLine("SELECT b.Id, b.Title, b.Status, b.CreatedDate, b.LastActivityDate");
                    sql.AppendLine("FROM Bug b");
                    sql.AppendLine("ORDER BY LastActivityDate DESC, CreatedDate DESC");

                    cmd.CommandText = sql.ToString();

                    try
                    {
                        conn.Open();
                        using (var reader = await cmd.ExecuteReaderAsync())
                        {
                            while (await reader.ReadAsync())
                            {
                                var newBug = new Bug
                                {
                                    Id = int.Parse(reader["Id"].ToString()),
                                    Title = reader["Title"].ToString(),
                                    Status = (BugStatus)Enum.Parse(typeof(BugStatus), reader["Status"].ToString()),
                                    CreatedDate = DateTime.Parse(reader["CreatedDate"].ToString()),
                                    LastActivityDate = DateTime.Parse(reader["LastActivityDate"].ToString())
                                };

                                retVal.Add(newBug);
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
