import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: 'grid-ui',
    templateUrl: './CustomerApp.GridView.html'
})
export class GridComponent{
    gridColumns: Array<any> =  new Array<any>();
    gridData: Array<any> =  new Array<any>();

    @Input("grid-columns")
    set SetGridColumns(_gridColumns: Array<any>){
        this.gridColumns = _gridColumns;
    }

    @Input("grid-data")
    set SetGridData(_gridData: Array<any>){
        this.gridData = _gridData;
    }

    @Output("grid-selected")
    eventEmitter: EventEmitter<any> = new EventEmitter<any>();

    SelectRow(_selectedRow: any){
        this.eventEmitter.emit(_selectedRow);
    }
}