using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace EduAppApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StudentController : ControllerBase
    {
        public StudentController() { }

        [HttpGet(Name = "GetStudents")]
        public string GetStudents()
        {

            return string.Empty;
        }
    }
}
