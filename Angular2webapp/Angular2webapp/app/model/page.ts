/**
 * An object used to get/set page information for ngx-datatable
 */
export class Page {
    //The number of elements in the page
    PageSize: number = 0;
    //The total number of elements
    TotalElements: number = 0;
    //The total number of pages
    TotalPages: number = 0;
    //The current page number
    PageNumber: number = 0;
}