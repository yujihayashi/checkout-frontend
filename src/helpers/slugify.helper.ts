export default function slugify(str: string) {
    if(!str) return undefined;
    str = str.replace(/^\s+|\s+$/g, ''); // trim
    str = str.toLowerCase();

    // remove accents, swap ñ for n, etc
    const from = 'åàáãäâèéëêìíïîòóöôõùúüûñç·/_,:;';
    const to = 'aaaaaaeeeeiiiiooooouuuunc-/----';

    for (let i = 0, l = from.length; i < l; i++) {
        str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
    }

    str = str
        .replace(/[^a-z0-9: -]/g, '') // remove invalid chars
        .replace(/\s+/g, '-') // collapse whitespace and replace by -
        .replace(/-+/g, '-') // collapse dashes
        .replace(/!/g, '') // remove exclamations
        .replace(/^-+/, '') // trim - from start of text
        .replace(/-+$/, ''); // trim - from end of text

    return str;
}