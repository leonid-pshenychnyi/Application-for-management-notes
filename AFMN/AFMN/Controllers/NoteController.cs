using System.Collections.Generic;
using System.Linq;
using AFMN.Models;
using AFMN.Models.Repository;
using Microsoft.AspNetCore.Mvc;
using Moq;

namespace AFMN.Controllers
{
    [ApiController]
    [Route("api/notes")]
    public class NoteController : Controller
    {
        private NoteRepository Notes;

        public NoteController(NoteRepository noteRepository)
        {
            Notes = noteRepository;
        }

        [HttpGet]
        public IEnumerable<Note> Get()
        {
            return Notes.GetAll();
        }

        [HttpGet("{id}")]
        public Note Get(long id)
        {
            return Notes.Get(id);
        }

        [HttpPost]
        public IActionResult Post(Note note)
        {
            if (ModelState.IsValid)
            {
                Notes.Create(note);
                return Ok(note);
            }

            return BadRequest(ModelState);
        }

        [HttpPut]
        public IActionResult Put(Note note)
        {
            if (ModelState.IsValid)
            {
                Notes.Update(note);
            }

            return BadRequest(ModelState);
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(long id)
        {
            Notes.Delete(id);
            return Ok(id);
        }
    }
}