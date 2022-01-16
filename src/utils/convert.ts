export const convertStrippedHtml = (html: string): string => {
    const regexHtml = /<[^>]+>/g;
    const closeTag = /<\/.+?>/g;
    const regexWithSpace = /&nbsp;/g;
    const strippedHtml = html
        .replace(closeTag, ' ')
        .replace(regexHtml, '')
        .replace(regexWithSpace, '')
        .replace(/^\s+|\s+$/gm, '');

    if (!strippedHtml) {
        return 'No addition text';
    }
    return strippedHtml;
};

export const capitalizeFirstLetter = (text: string) => {
    if (text === '') return text;
    return text.charAt(0).toUpperCase() + text.slice(1);
};
