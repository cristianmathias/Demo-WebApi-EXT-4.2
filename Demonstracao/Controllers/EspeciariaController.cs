using System;
using System.Collections.Generic;
using System.Web.Http;

namespace Demonstracao.Controllers
{
    public class EspeciariaController : ApiController
    {
        // GET api/especiaria
        public IEnumerable<Especiaria> Get()
        {
            return new List<Especiaria>()
                {
                    new Especiaria()
                    {Id = 1, Nome = "Melange", Data = DateTime.Now, Valor = 50, Comestivel = true},
                    new Especiaria()
                    {Id = 2, Nome = "Pó de pirinpinpin", Data = DateTime.Now, Valor = 5, Comestivel = false}
                };
        }

        // GET api/especiaria/5
        public Especiaria Get(int id)
        {
            return new Especiaria() { Id = 2, Nome = "Pó de pirinpinpin", Data = DateTime.Now, Valor = 5, Comestivel = false };
        }

        // POST api/especiaria
        public void Post([FromBody]Especiaria value)
        {
            
        }

        // PUT api/especiaria/5
        public void Put(int id, [FromBody]Especiaria value)
        {
            
        }

        // DELETE api/especiaria/5
        public void Delete(int id)
        {
            id = id + 2;
        }
    }

    public class Especiaria
    {
        public int Id { get; set; }
        public string Nome { get; set; }
        public DateTime Data { get; set; }
        public int Valor { get; set; }
        public bool Comestivel { get; set; }
    }
}
