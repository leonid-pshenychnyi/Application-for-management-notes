using System.Collections.Generic;

namespace AFMN.Models.Repository
{
    public interface IRepository
    {
        List<Note> GetAll();
        Note Get(long id);
        void Create(Note note);
        void Update(Note note);
        void Delete(long id);
    }
}