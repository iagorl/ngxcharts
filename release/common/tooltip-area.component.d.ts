import { EventEmitter, Renderer, TemplateRef } from '@angular/core';
export declare class TooltipArea {
    private renderer;
    anchorOpacity: number;
    anchorPos: number;
    anchorValues: any[];
    lastAnchorPos: number;
    dims: any;
    xSet: any;
    xScale: any;
    yScale: any;
    results: any;
    colors: any;
    showPercentage: boolean;
    tooltipDisabled: boolean;
    tooltipTemplate: TemplateRef<any>;
    hover: EventEmitter<{}>;
    clicked: EventEmitter<{}>;
    tooltipAnchor: any;
    constructor(renderer: Renderer);
    getValues(xVal: any): any[];
    mouseDown(event: any): void;
    mouseMove(event: any): void;
    findClosestPointIndex(xPos: any): number;
    showTooltip(): void;
    hideTooltip(): void;
    getToolTipText(tooltipItem: any): string;
}
