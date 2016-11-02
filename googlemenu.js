var items = [
{name: 'Hide Sheets', functionName: 'hideSheets'},
{name: 'Show Sheets', functionName: 'showSheets'},
{name: 'Delete Sheets', functionName: 'deleteSheets'}
];
ss.addMenu('Bulk-sheet', items);
}
}
function deleteSheets() {
var deleteSheetsContaining = Browser.inputBox("Delete sheets with names containing:");
for (var i = 0; i < sheetsCount; i++){
var sheet = sheets[i];
var sheetName = sheet.getName();
Logger.log(sheetName);
if (sheetName.indexOf(deleteSheetsContaining.toString()) !== -1){
Logger.log("DELETE!");
ss.deleteSheet(sheet);
}
}
}
function hideSheets() {
var hideSheetsContaining = Browser.inputBox("Hide sheets with names containing:");
for (var i = 0; i < sheetsCount; i++){
var sheet = sheets[i];
var sheetName = sheet.getName();
Logger.log(sheetName);
if (sheetName.indexOf(hideSheetsContaining.toString()) !== -1){
Logger.log("HIDE!");
sheet.hideSheet();
}
}
}
function showSheets() {
var showSheetsContaining = Browser.inputBox("Show sheets with names containing:");
for (var i = 0; i < sheetsCount; i++){
var sheet = sheets[i];
var sheetName = sheet.getName();
Logger.log(sheetName);
if (sheetName.indexOf(showSheetsContaining.toString()) !== -1){
Logger.log("SHOW!");
sheet.showSheet();
}
}
}
