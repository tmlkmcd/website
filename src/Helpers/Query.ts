type QueryObject = {
  [key: string]: string
}

export default abstract class Query {
  static getQueryString() {
    return document.location.href.split('?')[1];
  }

  static parseQuery(): QueryObject {
    const params: QueryObject = {};
    const s = Query.getQueryString();

    if (!s) return params;

    s.split('&')
      .forEach((q) => {
        const [key, value] = q.split('=');
        params[key] = value;
      })

    return params;
  }
}
