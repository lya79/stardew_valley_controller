package routers

import (
	"github.com/astaxie/beego"
	"github.com/astaxie/beego/context/param"
)

func init() {

    beego.GlobalControllerRouter["stardew_valley_controller/service/controllers:Controllers"] = append(beego.GlobalControllerRouter["stardew_valley_controller/service/controllers:Controllers"],
        beego.ControllerComments{
            Method: "Action",
            Router: `/action`,
            AllowHTTPMethods: []string{"get"},
            MethodParams: param.Make(),
            Filters: nil,
            Params: nil})

}
