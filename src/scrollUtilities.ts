// This function is used to scroll to a specific element on the page. It takes in the element ID and the header ID as parameters. 
//It then calculates the height of the header and scrolls to the element minus the header height. 
//This is to ensure that the element is not hidden behind the header.


const scrollToElement = (elementID: string, headerID?: string) => {
    const element = document.getElementById(elementID);
    let headerHeight = 0;
    if (headerID){
        headerHeight = getHeaderHeight(headerID);
    }
    
    if (element) {
        const scrollToPosition = element.offsetTop - headerHeight;
        
        window.scrollTo({
            top: scrollToPosition,
            behavior: 'smooth',
        });
    }
};

// This function is used to get the height of the header. It takes in the header ID as a parameter and returns the height of the header.
// If the header is not found, it returns 0.
const getHeaderHeight = (headerID: string) => {
    const headerDiv = document.getElementById(headerID);
    if (headerDiv) {
        const headerHeight = headerDiv.getBoundingClientRect().height;
        return headerHeight;
    }
    return 0;
};
export default scrollToElement;