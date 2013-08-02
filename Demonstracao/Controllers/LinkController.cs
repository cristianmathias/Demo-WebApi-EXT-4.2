using System.Collections.Generic;
using System.Web.Http;

namespace Demonstracao.Controllers
{
    public class LinkController : ApiController
    {
        // GET api/link
        public IEnumerable<ItemDoMenuDaAplicacao> Get()
        {
            var itensDoMenu = new List<ItemDoMenuDaAplicacao>();

            var menuPessoas = new ItemDoMenuDaAplicacao
            {
                text = "Financeiro",
                expanded = true,
                leaf = false
                ,
                children = new List<ItemDoMenuDaAplicacao>
                                                  {
                                                      new ItemDoMenuDaAplicacao() { id = "listagemDeEspeciaria", text = "Especiárias", leaf = true },
                                                      new ItemDoMenuDaAplicacao() { id = "listarFornecedor", text = "Objetos lendários", leaf = true }
                                                  }
            };

            var menuContribuicoes = new ItemDoMenuDaAplicacao
            {
                text = "Seres mágicos",
                expanded = true,
                leaf = false
                ,
                children = new List<ItemDoMenuDaAplicacao>
                                                  {
                                                      new ItemDoMenuDaAplicacao() { id = "listagemDeUnicornio", text = "Unicórnio", leaf = true },
                                                      new ItemDoMenuDaAplicacao() { id = "formularioDeServiços", text = "Fadas", leaf = true }
                                                  }
            };

            itensDoMenu.Add(menuPessoas);
            itensDoMenu.Add(menuContribuicoes);

            return itensDoMenu;
        }

        public class ItemDoMenuDaAplicacao
        {
            public string text { get; set; }

            public bool expanded { get; set; }

            public bool leaf { get; set; }

            public IList<ItemDoMenuDaAplicacao> children { get; set; }

            public string id { get; set; }
        }

    }
}
