import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        SearchRoutingModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [SearchComponent]
})
export class SearchModule { }