import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { cloneDeep, find, random, range } from 'lodash-es';
import { allElements, Category, TableElement } from './elements';

enum allModes {
  ELEMENT_AT_THIS_POSITION = 'ELEMENT_AT_THIS_POSITION',
  FIND_MY_POSITION = 'FIND_MY_POSITION',
  WHO_AM_I = 'WHO_AM_I',
}

interface Mode {
  option: allModes;
  label: string;
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public mainElements: Record<number, Record<number, TableElement>> = {};
  public mainRows: number[] = [];
  public mainColumns: number[] = [];
  public lanthanidesColumns: number[] = [];
  public actinidesColumns: number[] = [];
  public lanthanides: Record<number, TableElement> = {};
  public actinides: Record<number, TableElement> = {};
  public hoveredElement: TableElement;
  public hoveredElementXPosition: string;
  public hoveredElementYPosition: string;
  public nextWhoAmI: TableElement;
  public dropList: TableElement[];

  public dropdownOptions: Mode[] = [
    {
      option: allModes.ELEMENT_AT_THIS_POSITION,
      label: "What's at this position?",
    },
    {
      option: allModes.WHO_AM_I,
      label: 'Who Am I?',
    },
    {
      option: allModes.FIND_MY_POSITION,
      label: 'Find My position?',
    },
  ];
  public mode: allModes;
  public modeLabel: string;
  public modes = allModes;
  public allRandomElements: TableElement[] = [];

  private elemnts = allElements;

  public ngOnInit(): void {
    this.resetMainTable();
  }

  public onElementHover(event: MouseEvent, item: TableElement): void {
    this.hoveredElementXPosition = `${event.pageX - event.offsetX - 16}px`;
    this.hoveredElementYPosition = `${event.pageY - event.offsetY - 16}px`;
    this.hoveredElement = item;
  }

  public onElementLeave(): void {
    this.hoveredElementXPosition = undefined;
    this.hoveredElementYPosition = undefined;
    this.hoveredElement = undefined;
  }

  public setMode(mode?: Mode): void {
    this.mode = mode?.option;
    this.modeLabel = mode?.label;

    if (this.mode === allModes.FIND_MY_POSITION) {
      this.allRandomElements = this.shuffle(cloneDeep(this.elemnts));
    }

    if (!mode) {
      this.resetMainTable();
    }
    this.onElementLeave();
  }

  public selectNextWhoAmI(): void {
    const position = random(0, 117);
    this.nextWhoAmI = find(allElements, { position });
    if (position > 57 && position < 72) {
      // lanthanides
    } else if (position > 89 && position < 104) {
      // actinides
    } else {
      // main table
    }

    // if (section === 1) {
    //   // main elements
    //   const targetRow =
    // } else if (section === 2) {
    //   // lanthanides
    // } else {
    //   // actinides
    // }
    // this.nextWhoAmI = random(0, 117);
    // console.log()
  }

  public drop(event: CdkDragDrop<TableElement[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  private resetMainTable(): void {
    let maxRow = 0;
    let maxCol = 0;
    this.mainElements = {};
    this.lanthanides = {};
    this.lanthanidesColumns = [];
    this.actinides = {};
    this.actinidesColumns = [];

    this.elemnts.forEach((item) => {
      if (item.row > maxRow) {
        maxRow = item.row;
      }

      if (item.column > maxCol) {
        maxCol = item.column;
      }

      if (item.category === Category.LANTHANIDES && item.symbol !== 'La') {
        this.lanthanides[item.column] = { ...item };
        this.lanthanidesColumns.push(this.lanthanidesColumns.length + 1);
      } else if (item.category === Category.ACTINIDES && item.symbol !== 'Ac') {
        this.actinides[item.column] = { ...item };
        this.actinidesColumns.push(this.actinidesColumns.length + 1);
      } else {
        this.mainElements[item.row] = this.mainElements[item.row] || {};
        this.mainElements[item.row][item.column] = { ...item };
      }
    });

    this.mainRows = range(1, maxRow + 1, 1);
    this.mainColumns = range(1, maxCol + 1, 1);
  }

  private shuffle(array: TableElement[]): TableElement[] {
    let currentIndex = array.length;
    let randomIndex: number;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }
}
