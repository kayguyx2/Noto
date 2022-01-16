export const convertStrippedHtml = (html: string): string => {
    const regexHtml = /<[^>]+>/g;
    const regexWithSpace = /&nbsp;/g;
    const strippedHtml = html.replace(regexHtml, ' ').replace(regexWithSpace, '');

    if (!strippedHtml) {
        return 'No addition text';
    }
    return strippedHtml;
};

export const capitalizeFirstLetter = (text: string) => {
    if (text === '') return text;
    return text.charAt(0).toUpperCase() + text.slice(1);
};
