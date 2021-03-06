# 星露谷(Stardew Valley)遊戲手把

# 關鍵字

- Golang
- Beego
- React
- WebSocket
- Material-UI

# 說明

此專案提供星露谷(Stardew Valley)遊戲的遊戲手把，將程式部屬在 Windows系統下，即可利用手機藉由瀏覽器控制 Windows系統，藉此作為遊戲手把。

release執行檔啟動後，開啟瀏覽器輸入網址 localhost:8080即可。

# 下載執行檔案(release)
https://github.com/lya79/stardew_valley_controller/blob/master/release_stardew_valley_controller.7z

# 預覽
電腦瀏覽器畫面
![image](https://github.com/lya79/stardew_valley_controller/blob/master/pc.png)
手機瀏覽器畫面
![image](https://github.com/lya79/stardew_valley_controller/blob/master/info.png)

# 安裝

STEP 1. 專案 clone至 GOPATH的 src目錄底下

STEP 2. [安裝 beego套件](https://beego.me/)

STEP 3. [安裝 Node.js](https://nodejs.org/en/)

# 附錄

## 測試執行後端
切換至 todo_app/serivce/
```sh
$ cd service
```

啟動後端服務
```sh
$ bee run
```

## 安裝前端相關模組
切換至 todo_app/web/
```sh
$ cd web
```

啟動前端服務
```sh
$ npm install
```


## 測試執行前端
切換至 todo_app/web/
```sh
$ cd web
```

啟動前端服務
```sh
$ npm run start
```