import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";

@Component({
    templateUrl: 'app/homepage/homepage.html',
    styleUrls: ['../assets/stylesheets/text1.css', '../assets/stylesheets/style1.css',
        '../assets/stylesheets/media-queries1.css', '../assets/stylesheets/materialize1.css',
        '../assets/stylesheets/materialize.min1.css',]


})

export class HomepageComponent implements OnInit, OnDestroy {
    status;

    private sub;

    constructor(
        private route: ActivatedRoute,
        private router: Router){}

    ngOnInit() {
        var that = this;
        this.sub = this.route.params.subscribe(params => {
            that.status = params['status'];
            console.log('that.status ' + that.status);
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}

