using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using Moq;

namespace AFMN.Models
{
    public class ApplicationContext
    {
        public List<Note> Notes; // Empty database

        public ApplicationContext()
        {
            Notes = new List<Note>
            {
                new Note
                {
                    Id = 1, Name = "First Note",
                    Text = "This is the text of the first note that was created in this application."
                },
                new Note {Id = 2, Name = "Another Note", Text = "Another text of another note."}
            };
        }
    }
}