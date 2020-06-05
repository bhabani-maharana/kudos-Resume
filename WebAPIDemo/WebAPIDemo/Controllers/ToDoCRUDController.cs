using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using WebAPIDemo.Models;

namespace WebAPIDemo.Controllers
{
    public class ToDoCRUDController : Controller
    {
        //GET: CRUD
        public IActionResult Index()
        {
            IEnumerable<ToDoItem> obj = null;
            HttpClient hc = new HttpClient();
            hc.BaseAddress = new Uri("https://localhost:44334/api/ToDoItems");

            var consumeapi = hc.GetAsync("ToDoItems");
            consumeapi.Wait();

            var readdata = consumeapi.Result;
            if (readdata.IsSuccessStatusCode)
            {
                var displaydata = readdata.Content.ReadAsAsync<List<ToDoItem>>();
                displaydata.Wait();
                obj = displaydata.Result;
            }
            return View(obj);
        }

        public ActionResult Create()
        {
            return View();
        }

        [HttpPost]
        public ActionResult Create(ToDoItem toDoItem)
        {
            HttpClient hc = new HttpClient();
            hc.BaseAddress = new Uri("https://localhost:44334/api/ToDoItems");

            var insertrecord = hc.PostAsJsonAsync<ToDoItem>("ToDoItems", toDoItem);
            insertrecord.Wait();

            var savedata = insertrecord.Result;
            if (savedata.IsSuccessStatusCode)
            {
                return RedirectToAction("Index");
            }
            return View("Create");
        }

        public async Task<IActionResult> Details(long id)
        {
            ToDoItem obj = null;
            HttpClient hc = new HttpClient();
            hc.BaseAddress = new Uri("https://localhost:44334/api/");

            var consumeapi = await hc.GetAsync("ToDoItems/" + id.ToString());
            //consumeapi.Wait();

            //var data = consumeapi.Result;
            if (consumeapi.IsSuccessStatusCode)
            {
                var displaydata = await consumeapi.Content.ReadAsAsync<ToDoItem>();
                
                obj = displaydata;
                
            }
            return View(obj); 
        }
    }
}