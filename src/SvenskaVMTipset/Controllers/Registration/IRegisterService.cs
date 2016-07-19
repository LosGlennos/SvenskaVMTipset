using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SvenskaVMTipset.Controllers.Registration
{
    interface IRegisterService
    {
        bool RegisterUser(RegisterModel registerModel);
    }
}
