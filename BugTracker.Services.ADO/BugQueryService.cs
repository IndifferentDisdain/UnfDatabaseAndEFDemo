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

        public async Task<Bug> GetBug(int id)
        {
            using (var conn = new SqlConnection(ConnectionString))
            {
                using (var cmd = conn.CreateCommand())
                {
                    Bug retVal = null;

                    cmd.CommandType = CommandType.Text;

                    cmd.Parameters.Add("@bugID", SqlDbType.Int).Value = id;

                    var sql = new StringBuilder();
                    sql.AppendLine("SELECT b.Id, b.Title, b.Description, b.Status, b.CreatedDate, b.LastActivityDate");
                    sql.AppendLine("FROM Bug b");
                    sql.AppendLine("WHERE b.Id=@bugID");

                    cmd.CommandText = sql.ToString();

                    try
                    {
                        conn.Open();
                        using (var reader = await cmd.ExecuteReaderAsync())
                        {
                            if (await reader.ReadAsync())
                            {
                                retVal = new Bug
                                {
                                    Id = int.Parse(reader["Id"].ToString()),
                                    Title = reader["Title"].ToString(),
                                    Description = reader["Description"].ToString(),
                                    Status = (BugStatus)Enum.Parse(typeof(BugStatus), reader["Status"].ToString()),
                                    CreatedDate = DateTime.Parse(reader["CreatedDate"].ToString()),
                                    LastActivityDate = DateTime.Parse(reader["LastActivityDate"].ToString()),
                                    Notes = new List<Note>()
                                };
                            }
                        }

                        sql.Clear();
                        sql.AppendLine("SELECT Id, BugId, Text, CreatedDate");
                        sql.AppendLine("FROM Note");
                        sql.AppendLine("WHERE BugId=@bugID");
                        sql.AppendLine("ORDER BY CreatedDate DESC");

                        cmd.CommandText = sql.ToString();

                        using (var reader = await cmd.ExecuteReaderAsync())
                        {
                            while (await reader.ReadAsync())
                            {
                                retVal.Notes.Add(new Note
                                {
                                    Id = int.Parse(reader["Id"].ToString()),
                                    BugId = int.Parse(reader["BugId"].ToString()),
                                    Text = reader["Text"].ToString(),
                                    CreatedDate = DateTime.Parse(reader["CreatedDate"].ToString())
                                });
                            }
                        }

                        return retVal;
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
