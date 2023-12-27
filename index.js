// task-1
function getRequest1(method, url) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.responseType = 'json';

        xhr.onload = () => {
            if (xhr.status >= 400) {
                reject(xhr.response);
            } else {
                resolve(xhr.response);
            }
        }

        xhr.send();
    });
}

document.querySelector('.task-1-btn').addEventListener('click', () => {
    getRequest1('GET', 'https://jsonplaceholder.typicode.com/users')
        .then(data => alert(JSON.stringify(data)));
});


// task-2
function getRequest2(method, url, name) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.responseType = 'json';
        xhr.setRequestHeader('Content-Type', 'application/json');

        xhr.onload = () => {
            if (xhr.status >= 400) {
                reject(xhr.response);
            } else {
                resolve(xhr.response);
            }
        }

        const body = {
            name: name
        }

        xhr.send(JSON.stringify(body));
    });
}

document.querySelector('.task-2-btn').addEventListener('click', (e) => {
    e.preventDefault();
    getRequest2('POST', 'https://jsonplaceholder.typicode.com/users', document.querySelector('.task-value-2').value)
        .then(data => document.querySelector('.task-result-2').textContent = JSON.stringify(data));
});


//task-3
function getRequest3(method, url) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.responseType = 'json';
        xhr.open(method, url);
        xhr.onload = () => {
            if (xhr.status >= 400) {
                reject(xhr.response);
            } else {
                resolve(xhr.response);
            }
        }

        xhr.send();
    })
}

document.querySelector('.task-3-btn').addEventListener('click', () => {
    getRequest3('GET', 'https://jsonplaceholder.typicode.com/users')
        .then(data => {
            data.forEach(el => {
                const div = document.createElement('div');
                div.innerHTML = `
                <div>name: ${el.name}</div>
                <div>id: ${el.id}</div>
            `
                document.querySelector('.task-result-3').append(div);
            });
        });
});


//task-4
function getRequest4(method, url) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.responseType = 'json';
        xhr.setRequestHeader('Content-Type', 'application/json')
        xhr.open(method, url);
        xhr.onload = () => {
            if (xhr.status >= 400) {
                reject(xhr.response)
            } else {
                resolve(xhr.response);
            }
        }

        xhr.onerror = () => {
            reject(xhr.response);
        }

        xhr.send();
    })
}


document.querySelector('.task-4-btn').addEventListener('click', () => {
    getRequest4('GET', 'https://jonplaceholder.typicode.com/users')
        .then(data => {
            document.querySelector('.task-result-4').textContent = JSON.stringify(data)
        })
        .catch(err => {
            alert(err)

        });
});


//task-5
function getRequest5(method, url) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.responseType = 'json';
        xhr.open(method, url);
        xhr.onload = () => {
            if (xhr.status >= 400) {
                reject(xhr.response);
            } else {
                resolve(xhr.response);
            }
        }

        xhr.send();
    })
}

function createElements(data) {
    data.forEach(el => {
        const div = document.createElement('div');
        div.innerHTML = `
                <div>name: ${el.name}</div>
                <div>id: ${el.id}</div>
            `
        document.querySelector('.task-result-5').append(div);
    });
}

let count = 0;

document.querySelector('.task-5-btn').addEventListener('click', () => {
    getRequest5('GET', 'https://jsonplaceholder.typicode.com/users')
        .then(data => {
            createElements(data);
        });

    setInterval(() => {
        document.querySelector('.task-result-5').innerHTML = '';
    
        setTimeout(() => {
            getRequest5('GET', 'https://jsonplaceholder.typicode.com/users')
                .then(data => {
                    createElements(data);
                });
        }, 500);
        count++;
    }, 5000);
});
