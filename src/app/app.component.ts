import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    styleUrls:['./app.component.less']
})

export class AppComponent implements OnInit  {


    ngOnInit(){
    }
}

/*
Добавлять/удалять города
Сохранять локально данные
Автоматически запрашивать погоду по координатам пользователя - это город/место по умолчанию.
Результат разработки сохранить на github с локальными коммитами.
* */