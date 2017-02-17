using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using Newtonsoft.Json;
using webComponentsSpa.Models;

namespace webComponentsSpa.Services
{
    public class DataService : IDataService
    {

        #region static fields and constants

        private static List<Item> items = null;

        #endregion

        #region constructors

        /// <summary>
        ///     Initializes a new instance of the DataService class.
        /// </summary>
        public DataService()
        {
            // load the items data.
            this.LoadItemsData();
        }

        #endregion

        #region public methods

        /// <summary>
        ///     Gets all the items from json file
        /// </summary>
        /// <returns></returns>
        public List<Item> AllItems()
        {
            if (DataService.items == null)
            {
                throw new Exception("No products data has been loaded");
            }
            return DataService.items;
        }

        #endregion

        #region private methods

        /// <summary>
        ///     Loads the items data using NewtonSoft library.
        /// </summary>
        private void LoadItemsData()
        {
            using (StreamReader sr = new StreamReader(System.Web.HttpContext.Current.Server.MapPath("~/Artefacts/Items.json")))
            {
                DataService.items = JsonConvert.DeserializeObject<List<Item>>(sr.ReadToEnd());
            }
        }

        /// <summary>
        ///    Loads the items data using NewtonSoft library.
        /// </summary>
        public string SaveData(Item itemToSave)
        {
            var returnVal = string.Empty;

            using (StreamReader sr = new StreamReader(System.Web.HttpContext.Current.Server.MapPath("~/Artefacts/Items.json")))
            {
                DataService.items = JsonConvert.DeserializeObject<List<Item>>(sr.ReadToEnd());

                for (int i = 0; i < items.Count; i++)
                {
                    var it = items[i].Id;
                    if (it == itemToSave.Id)
                    {
                        items[i].Id = itemToSave.Id;
                        items[i].Name = itemToSave.Name;
                        items[i].Description = itemToSave.Description;
                        items[i].Price = itemToSave.Price;
                        items[i].ImageId = itemToSave.ImageId;
                        items[i].Quantity = itemToSave.Quantity;
                    }
                }

            }

            var jsonSerialized = JsonConvert.SerializeObject(items, Formatting.Indented);

            for (int i = 0; i < items.Count; i++)
            {
                var it = items[i].Id;
                if (it == itemToSave.Id)
                {
                    double TOLERANCE = 0.01;
                    if (items[i].Id == itemToSave.Id && items[i].Name == itemToSave.Name
                        && items[i].Description == itemToSave.Description && Math.Abs(items[i].Price - itemToSave.Price) < TOLERANCE
                        && items[i].ImageId == itemToSave.ImageId && items[i].Quantity == itemToSave.Quantity)
                    {
                        returnVal = "OK";
                    }
                    else
                    {
                        return "Something went wrong during the save of the item";
                    }
                }
            }

            File.WriteAllText(System.Web.HttpContext.Current.Server.MapPath("~/Artefacts/Items.json"), jsonSerialized.ToString());
            return returnVal;
        }
        #endregion
    }
}