using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using webComponentsSpa.Models;
using webComponentsSpa.Services;

namespace webComponentsSpa.Controllers
{
    public class DashboardController : Controller
    {

        #region constructors

        public DashboardController()
        {
            
        }

        #endregion

        #region public methods

        /// <summary>
        ///     Gets all items
        /// </summary>
        /// <returns></returns>
        /// 
        [HttpGet]
        public JsonResult GetProducts()
        {
  
            var returnItems = new DataService();
            var items = returnItems.AllItems();
            return Json(items, JsonRequestBehavior.AllowGet);
        }

        /// <summary>
        ///     Gets product by Id
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        /// 
        [HttpGet]
        public JsonResult GetProduct(int id)
        {
            var returnItems = new DataService();
            var items = returnItems.AllItems();

            var itemById = items.Single(x => x.Id == id);

            return Json(itemById, JsonRequestBehavior.AllowGet);
        }


        [HttpPost]
        public JsonResult SaveItem(Item item)
        {
            var jsonItems = new DataService();
            var saveInfo = jsonItems.SaveData(item);
            return Json(saveInfo);
        }

        #endregion
    }
}
