function error() {
    // 监听 js 错误    rhnyrcxzSAXA
    window.onerror = (msg, url, line, column, error) => {
        const xhr = new XMLHttpRequest()
        xhr.open('post', 'http://localhost:3000/reportData')
        xhr.setRequestHeader('Content-Type', 'application/json')
        xhr.send(JSON.stringify({
            msg,
            url,
            line,
            column,
            error: error.stack || ''
        }))
    }
}

if (typeof window === 'object') {
    error()
}