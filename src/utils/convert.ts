export const convertStrippedHtml = (html: string) : string => {
    const regexHtml = /<[^>]+>/g;
    const strippedHtml = html.replace(regexHtml, '');

    if (!strippedHtml) {
        return 'No addition text';
    }
    return strippedHtml;
};
