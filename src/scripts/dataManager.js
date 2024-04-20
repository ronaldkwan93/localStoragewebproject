// Declare JS data that we want to store
let cssThemes = [

];

let pageTheme = "dark";



/**
 * Retrieve, assign and return the latest stored CSS theme from the browser localStorage
 * @returns 
 */
function getStoredCssThemes(){
    let rawJsonStringCssThemes = localStorage.getItem("cssThemes");
	cssThemes = JSON.parse(rawJsonStringCssThemes);
	// Return the updated data 
	return cssThemes;
}


/**
 * Retrieve, assign and return the latest stored page theme from the browser localStorage
 * @returns 
 */
function getStoredPageTheme() {
    pageTheme = localStorage.getItem("pageTheme");
    return pageTheme;
}


// Create/Update local storage
function setCssThemeToStorage(){
    let dataAsJsonString = JSON.stringify(cssThemes);
    localStorage.setItem("cssThemes", dataAsJsonString)
}

function setPageThemeToStorage(){
    localStorage.setItem("pageTheme", pageTheme);
}


if(localStorage.getItem("pageTheme") && localStorage.getItem("cssThemes").length > 0) {
    getStoredCssThemes();
    getStoredPageTheme();
} else {
    setCssThemeToStorage();
    setPageThemeToStorage();
}
// Delete localstorage