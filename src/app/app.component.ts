import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'app-crud-item-example';
    innerWidth: any;
    showMenu = true;

    ngOnInit() {
        this.innerWidth = window.innerWidth;
        if (innerWidth <= 640) {
            this.showMenu = false;
        }
    }

}
