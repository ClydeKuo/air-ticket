let util = {

};
util.title = function (title) {
    title = title ? title + ' - Home' : 'AIR TICKETS';
    window.document.title = title;
};

export default util;
