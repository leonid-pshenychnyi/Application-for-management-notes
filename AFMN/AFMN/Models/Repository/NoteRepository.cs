using System.Collections.Generic;
using System.IO;
using System.Linq;

namespace AFMN.Models.Repository
{
    public class NoteRepository : IRepository
    {
        private ApplicationContext _applicationContext;
        public NoteRepository(ApplicationContext applicationContext)
        {
            _applicationContext = applicationContext;
        }

        public List<Note> GetAll()
        {
            return _applicationContext.Notes;
        }

        public Note Get(long id)
        {
            return _applicationContext.Notes.FirstOrDefault(w => w.Id == id);
        }

        public void Create(Note note)
        {
            var notes = GetAll();
            long maxId = 0;

            if (notes.Any())
            {
                maxId = notes.Max(m => m.Id);
            }

            note.Id = maxId + 1;
            _applicationContext.Notes.Add(note);
        }

        public void Update(Note note)
        {
            var obj = _applicationContext.Notes.FirstOrDefault(x => x.Id == note.Id);
            if (obj != null)
            {
                obj.Name = note.Name;
                obj.Text = note.Text;
            }
        }

        public void Delete(long id)
        {
            var itemToRemove = _applicationContext.Notes.Single(r => r.Id == id);
            if (itemToRemove != null)
            {
                _applicationContext.Notes.Remove(itemToRemove);
            }
        }
    }
}