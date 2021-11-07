const search = document.querySelector('#search')
const btn = document.querySelector('#btn')
const code = document.querySelector('#code')

btn.addEventListener('click', async () => {
    code.innerText = 'Loading..'

    const res = await fetch(
        '/get?search=' + encodeURIComponent(search.value)
    )
    const json = await res.json()

    code.innerText = '\n' + JSON.stringify(json, null, 4)
})