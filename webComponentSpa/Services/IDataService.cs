using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using webComponentsSpa.Models;

namespace webComponentsSpa.Services
{
    /// <summary>
    /// Interface for DataService class
    /// </summary>

    public interface IDataService
    {
        #region public methods

        /// <summary>
        /// Alls the products.
        /// </summary>
        /// <returns></returns>
        List<Item> AllItems();

        #endregion

    }
}
