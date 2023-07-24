using EduAppApi.Data;
using EduAppApi.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json.Linq;
using System.Runtime.InteropServices.JavaScript;
using System.Text.Json;

namespace EduAppApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StudentController : ControllerBase
    {
        private ApplicationDbContext _context;
        public StudentController(ApplicationDbContext context) { 
      
         _context = context;
        }

      [HttpGet(Name = "GetStudents")]
      public async Task<ActionResult<IEnumerable<object>>> GetStudents()
      {
         var students = await _context.Students.ToListAsync();
         var rnd = new Random();
         var studentss = new List<object>();
         int i = 1;
         foreach(var student in students)
         {
            studentss.Add(new
            {
               id = i,
               student.FirstName,
               student.MiddleName,
               student.LastName,
               student.Gender,
               student.DateofBirth,
               student.Address
            });
            i++;
         }
        

         return studentss;
      }

      //[HttpGet(Name = "GetStudents")]
      //public IActionResult GetStudents()
      //{
      //   return Ok(_context.Students);
      //}
   }
}
