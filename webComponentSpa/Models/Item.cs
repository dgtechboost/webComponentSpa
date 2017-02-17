using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace webComponentsSpa.Models
{
    public class Item
    {
         #region constructors

        /// <summary>
        ///     default constructor
        /// </summary>
        public Item()
        {
        }

        /// <summary>
        /// Initializes a new instance of the Item class.
        /// </summary>
        /// <param name="id">The identifier.</param>
        /// <param name="name">The name.</param>
        /// <param name="description">The description.</param>
        /// <param name="price">The price.</param>
        /// <param name="imageId">The image identifier.</param>
        /// <param name="quantity">The quantity</param>
        public Item(int id, string name, string description, double price, int imageId, int quantity)
        {
            this.Id = id;
            this.Description = description;
            this.Name = name;
            this.Price = price;
            this.ImageId = imageId;
            this.Quantity = quantity;
        }

        #endregion

        #region properties and indexers

        /// <summary>
        ///     Gets or sets the id of the item.
        /// </summary>
        /// <value>
        ///     The id.
        /// </value>
        public int Id { get; set; }

        /// <summary>
        ///     Gets or sets the name of the item.
        /// </summary>
        /// <value>
        ///     The name.
        /// </value>
        public string Name { get; set; }

        /// <summary>
        ///     Gets or sets the description of the item.
        /// </summary>
        /// <value>
        ///     The description.
        /// </value>
        public string Description { get; set; }

        /// <summary>
        ///     Gets or sets the price of the item.
        /// </summary>
        /// <value>
        ///     The price.
        /// </value>
        public double Price { get; set; }

        /// <summary>
        ///     Gets or sets the image id for the item
        /// </summary>
        /// <value>
        ///     The image id.
        /// </value>
        public int ImageId { get; set; }

        /// <summary>
        ///     Gets or sets the quantity for the item
        /// </summary>
        /// <value>
        ///     The quantity.
        /// </value>
        public int Quantity { get; set; }

        #endregion
    }
}