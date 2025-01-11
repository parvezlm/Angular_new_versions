import { Injectable } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { RouterStateSnapshot, TitleStrategy } from "@angular/router";

@Injectable({
    providedIn: 'root'
})
export class TitleUpdateStrategyService extends TitleStrategy {
    constructor(private readonly title: Title) {
        super();
    }

    override updateTitle(router: RouterStateSnapshot): void {
        let title = this.buildTitle(router);
        if (title !== undefined) {
            this.title.setTitle(`E-Commerce | ${title}`);
        }
    }
}
