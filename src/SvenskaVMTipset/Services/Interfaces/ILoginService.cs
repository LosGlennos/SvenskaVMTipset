using SvenskaVMTipset.Controllers.Login;

namespace SvenskaVMTipset.Services.Interfaces
{
    public interface ILoginService
    {
        bool Login(LoginModel loginModel);
    }
}