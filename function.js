function handler(event) {
    var request = event.request;
    var host = request.headers.host.value
    var uri = request.uri;
    if (!host.startsWith('www.')) {
        var location = 'https://www.' + host + uri;
        if (uri !== null && !uri.includes('.')) {
            location += '/';
        }
        return redirect(location);
    }
    if (uri.endsWith('/')) {
        request.uri += 'index.html';
    } else if (!uri.includes('.')) {
        return redirect(uri + '/');
    }
    return request;
}

function redirect(location) {
    var response = {
        statusCode: 301,
        statusDescription: 'Moved Permanently',
        headers: {
            "location": { "value": location }
        }
    }
    return response;
}