using System.Collections.Generic;
using System.Web.Http;

namespace Demonstracao.Controllers
{
    public class UnicornioController : ApiController
    {
        // GET api/unicornio
        public IEnumerable<Unicornio> Get()
        {
            return new List<Unicornio>()
                {
                    new Unicornio()
                    {Id = 1, Cor = "Vermelho", Idade = 15, Nome = "Rainbow Dash", QuantidadeDeChifres = 1},
                    new Unicornio()
                    {Id = 2, Cor = "Rosa", Idade = 12, Nome = "Swetie pie", QuantidadeDeChifres = 1}
                };
        }

        // GET api/unicornio/5
        public Unicornio Get(int id)
        {
            return new Unicornio() { Id = 1, Cor = "Rosa", Idade = 12, Nome = "Swetie pie", QuantidadeDeChifres = 1 };
        }

        // POST api/unicornio
        public void Post([FromBody]Unicornio value)
        {
            
        }

        // PUT api/unicornio/5
        public void Put(int id, [FromBody]Unicornio value)
        {
            
        }

        // DELETE api/unicornio/5
        public void Delete(int id)
        {
            id = id + 2;
        }
    }

    public class Unicornio
    {
        public int Id { get; set; }
        public string Nome { get; set; }
        public int Idade { get; set; }
        public int QuantidadeDeChifres { get; set; }
        public string Cor { get; set; }
    }
}
